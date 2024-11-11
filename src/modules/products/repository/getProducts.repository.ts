import db from '../../../infrastructure/database/conexao_banco_de_dados';
import { GetProductDTO } from "../dtos/getProduct.dto"


export async function getProductsRepository(getProducts: GetProductDTO) {
    await db.connect()
    if (!getProducts.category_id){
        let result = await db.query(`
                SELECT
                categoria_produto.id_categoria as category_id,
                categoria_produto.nome_categoria as product_category,
                JSON_AGG(produto) AS products
            FROM
                lanchonete.produto produto
            LEFT JOIN
                lanchonete.categoria_produto categoria_produto
            ON
                categoria_produto.id_categoria = produto.id_categoria
            GROUP BY
                categoria_produto.nome_categoria,
                categoria_produto.id_categoria
                `)
        return result.rows
    }
    else{
        let result = await db.query(`
            SELECT
                categoria_produto.id_categoria as category_id,
                categoria_produto.nome_categoria as product_category,
                JSON_AGG(produto) AS products
            FROM
                lanchonete.produto produto
            LEFT JOIN
                lanchonete.categoria_produto categoria_produto
            ON
                categoria_produto.id_categoria = produto.id_categoria
            
            WHERE produto.id_categoria=$1

            GROUP BY
                categoria_produto.nome_categoria,
                categoria_produto.id_categoria
            `, [getProducts.category_id])
        return result.rows
    }
    
}