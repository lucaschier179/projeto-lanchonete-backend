import db from '../../../infrastructure/database/conexao_banco_de_dados';
import { RegisterCategoryDTO } from "../dtos/registerCategory.dto"
import { RegisterProductDTO } from "../dtos/registerProduct.dto"


export async function getCategoryRepository(category: RegisterCategoryDTO | RegisterProductDTO) {
    await db.connect()
    if ("category_id" in category) {
        let result = await db.query("SELECT * FROM lanchonete.categoria_produto WHERE id_categoria=$1", [category.category_id])
        return result.rows[0]
    }
    else{
        let result = await db.query("SELECT * FROM lanchonete.categoria_produto WHERE nome_categoria=$1", [category.name])
        return result.rows[0]
    }
}