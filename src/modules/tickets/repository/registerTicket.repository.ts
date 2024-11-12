import db from '../../../infrastructure/database/conexao_banco_de_dados';
import { TicketRegisterDTO } from "../dtos/ticketRegister.dto";


export async function registerTicketRepository(registerTicket: TicketRegisterDTO) {
    await db.connect()
    await db.query(`
    INSERT INTO lanchonete.pedido (id_usuario, status_pedido, valor_total)
        VALUES
    ($1, 'Em Análise', 10.00)
    `,
    [registerTicket.user_id])

    let result = await db.query(`
        SELECT MAX(id_pedido) as id_pedido FROM lanchonete.pedido WHERE id_usuario=$1
        `,
        [registerTicket.user_id])
    return result.rows[0].id_pedido
}