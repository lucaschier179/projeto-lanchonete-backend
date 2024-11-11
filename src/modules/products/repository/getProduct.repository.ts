import db from '../../../infrastructure/database/conexao_banco_de_dados';
import { RegisterOrderDTO } from "../../order/dtos/registerOrder.dto"
import { RegisterProductDTO } from "../dtos/registerProduct.dto"


export async function getProductRepository(product: RegisterProductDTO | RegisterOrderDTO) {
    await db.connect()
    if ("bar_code" in product){
        let result = await db.query("SELECT * FROM lanchonete.produto WHERE nome_produto=$1 or codigo_barra=$2", [product.name, product.bar_code])
        return result.rows[0]
    }else{
        let result = await db.query("SELECT * FROM lanchonete.produto WHERE id_produto=$1", [product.product_id])
        return result.rows[0]
    }
}