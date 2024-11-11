import db from '../../../infrastructure/database/conexao_banco_de_dados';
import { RegisterProductDTO } from "../dtos/registerProduct.dto"


export async function getProductRepository(product: RegisterProductDTO) {
    await db.connect()
    
    let result = await db.query("SELECT * FROM lanchonete.produto WHERE nome_produto=$1 or codigo_barra=$2", [product.name, product.bar_code])
    return result.rows[0]
    
}