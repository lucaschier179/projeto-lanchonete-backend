import express, { Request, Response, NextFunction } from 'express';
import path from 'path';
import cookieParser from 'cookie-parser';
import jwt from 'jsonwebtoken';
import routes from './src/routes/routes';
import ip from 'ip';

require('dotenv').config();

const app = express();

const AUTH_COOKIE_NAME = 'auth-token';
const REFRESH_COOKIE_NAME = 'refresh-token';
const JWT_SECRET = process.env.JWT_SECRET; 
const JWT_EXPIRATION = '15m';
const REFRESH_TOKEN_EXPIRATION = '7d';

if (!JWT_SECRET) {
    throw new Error('JWT_SECRET is not defined in the environment variables');
}

// Declaração da variável users globalmente
const users = new Map<string, string>(); 
users.set('user', 'password');

// Middleware para parsing de JSON e cookies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Função para gerar tokens JWT
const generateTokens = (username: string) => {
    const authToken = jwt.sign({ username }, JWT_SECRET, { expiresIn: JWT_EXPIRATION });
    const refreshToken = jwt.sign({ username }, JWT_SECRET, { expiresIn: REFRESH_TOKEN_EXPIRATION });
    return { authToken, refreshToken };
};

// Endpoint de login
app.post('/login', (req: Request, res: Response) => {
    const { username, password } = req.body;
    if (username && password && users.get(username) === password) {
        const { authToken, refreshToken } = generateTokens(username);
        res.cookie(AUTH_COOKIE_NAME, authToken, { 
            httpOnly: true, 
            secure: true, 
            sameSite: 'strict' 
        });
        res.cookie(REFRESH_COOKIE_NAME, refreshToken, { 
            httpOnly: true, 
            secure: true, 
            sameSite: 'strict' 
        });
        res.send('Login successful');
    } else {
        res.status(401).send('Invalid credentials');
    }
});

// Endpoint de logout
app.post('/logout', (req: Request, res: Response) => {
    res.clearCookie(AUTH_COOKIE_NAME);
    res.clearCookie(REFRESH_COOKIE_NAME);
    res.send('Logout successful');
});

// Middleware para autenticação
const authenticate = (req: Request, res: Response, next: NextFunction) => {
    const token = req.cookies[AUTH_COOKIE_NAME];
    if (token) {
        jwt.verify(token, JWT_SECRET, (err: any, decoded: any) => {
            if (err) return res.status(401).send('Unauthorized');
            req.body.username = decoded.username;
            next();
        });
    } else {
        res.status(401).send('Unauthorized');
    }
};

// Endpoint para refresh token
app.post('/refresh', (req: Request, res: Response) => {
    const refreshToken = req.cookies[REFRESH_COOKIE_NAME];
    if (refreshToken) {
        jwt.verify(refreshToken, JWT_SECRET, (err: any, decoded: any) => {
            if (err) return res.status(401).send('Unauthorized');
            const { authToken, refreshToken: newRefreshToken } = generateTokens(decoded.username);
            res.cookie(AUTH_COOKIE_NAME, authToken, { 
                httpOnly: true, 
                secure: true, 
                sameSite: 'strict' 
            });
            res.cookie(REFRESH_COOKIE_NAME, newRefreshToken, { 
                httpOnly: true, 
                secure: true, 
                sameSite: 'strict' 
            });
            res.send('Tokens refreshed');
        });
    } else {
        res.status(401).send('Unauthorized');
    }
});

// Aplicando middleware de autenticação globalmente
app.use(authenticate);

// Configuração de arquivos estáticos
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use('/public/css', express.static(path.join(__dirname, 'public', 'css')));

// Configuração do motor de visualização
app.set('views', path.join(__dirname, './src/views'));
app.set('view engine', 'ejs');

// Usando as rotas definidas
app.use(routes);

const IP = ip.address();
const PORT = 3000;

app.listen(PORT, IP, () => {
    console.log(`Servidor rodando em http://${IP}:${PORT}`);
});
