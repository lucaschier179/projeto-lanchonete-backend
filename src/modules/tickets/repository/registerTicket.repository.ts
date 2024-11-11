import db from '../../../infrastructure/database/conexao_banco_de_dados';
import { TicketRegisterDTO } from "../dtos/ticketRegister.dto";


export async function registerTicketRepository(registerTicket: TicketRegisterDTO) {
    await db.connect()
    await db.query(`
    INSERT INTO lanchonete.pedido (id_usuario, status_pedido)
        VALUES
    ($1, 'Em Análise')
    `,
    [registerTicket.user_id])

    let result = await db.query(`
        SELECT MAX(id_pedido) FROM lanchonete.pedido WHERE id_usuario=$1
        `,
        [registerTicket.user_id])
    return result.rows[0]
}