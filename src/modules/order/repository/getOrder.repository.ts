import db from '../../../infrastructure/database/conexao_banco_de_dados';
import { DeleterOrderDTO } from "../dtos/deleteOrder.dto";


export async function getOrderRepository(getOrder: DeleterOrderDTO) {
    await db.connect()
    let result = await db.query(`
        SELECT * FROM lanchonete.carrinho
        WHERE id_carrinho=$1
        `,
    [getOrder.order_id])
    return result.rows[0]
}