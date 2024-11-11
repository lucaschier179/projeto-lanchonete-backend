import db from '../../../infrastructure/database/conexao_banco_de_dados';
import { LoginDTO } from '../dtos/userlogin.dto'; "../dtos/userlogin.dto"


export async function loginUserRepository(user: LoginDTO) {
    await db.connect()
    console.log(user.user, user.password)
    const result = await db.query(`
        SELECT nome_usuario 
        FROM lanchonete.usuario
        WHERE (cpf_usuario = $1 AND senha_usuario = $2) OR (email_usuario = $3 AND senha_usuario = $4)`,
        [user.user, user.password, user.user, user.password])
    return result.rows[0]
}