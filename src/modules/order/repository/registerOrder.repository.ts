import db from '../../../infrastructure/database/conexao_banco_de_dados';
import { RegisterOrderDTO } from "../dtos/registerOrder.dto";


export async function registerOrderRepository(registerOrder: RegisterOrderDTO) {
    await db.connect()
    await db.query(`
        INSERT INTO lanchonete.carrinho (id_usuario, id_produto, quantidade)
            VALUES 
        ($1, $2, $3)`,
    [1, registerOrder.product_id, registerOrder.quantity])
}