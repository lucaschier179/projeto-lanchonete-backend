import db from '../../../infrastructure/database/conexao_banco_de_dados';
import { DeleterOrderDTO } from "../dtos/deleteOrder.dto";


export async function deleteOrderRepository(deleteOrder: DeleterOrderDTO) {
    await db.connect()
    await db.query(`
        DELETE FROM lanchonete.carrinho
        WHERE id_carrinho=$1`,
    [deleteOrder.order_id])
    
}