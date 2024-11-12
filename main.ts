import routeProducts from './src/modules/products/controllers/product.controller'
import routeTicket from './src/modules/tickets/controllers/ticket.controller';
import routeOrder from './src/modules/order/controllers/order.controller';
import {Duplicate} from "./src/infrastructure/expectations/duplicate"
import {NotFound} from "./src/infrastructure/expectations/notFound"
import route from './src/modules/users/controllers/user.controller';
import { Request, Response, NextFunction } from 'express';
import express from 'express';
import ip from 'ip';


require('dotenv').config();

const app = express();
app.use(express.json());
app.use(route);
app.use(routeProducts);
app.use(routeOrder);
app.use(routeTicket);


app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err instanceof NotFound || err instanceof Duplicate) {
        let message

        try{
            message = JSON.parse(err.message)
        }catch{
            message = err.message
        }

        res.status(err.status).send({ mensagem: message });
    } else {
        console.log(err);
        res.status(500).json({ mensagem: "Erro interno do servidor" });
    }
});

const IP = ip.address();
const PORT = 3000;

app.listen(PORT, IP, () => {
    console.log(`Servidor rodando em http://${IP}:${PORT}`);
});
