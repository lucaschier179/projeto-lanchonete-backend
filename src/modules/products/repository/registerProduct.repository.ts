import db from '../../../infrastructure/database/conexao_banco_de_dados';
import { RegisterProductDTO } from "../dtos/registerProduct.dto";

export async function registerProductRepository(registerProduct: RegisterProductDTO) {
    await db.connect()
    await db.query(`
    INSERT INTO lanchonete.produto (nome_produto, id_categoria, descricao, preco, codigo_barra)
        VALUES 
    ($1, $2, $3, $4, $5)`,
    [registerProduct.name, registerProduct.category_id, registerProduct.description, registerProduct.price, registerProduct.bar_code])
}