import db from '../../../infrastructure/database/conexao_banco_de_dados';
import { RegisterCategoryDTO } from "../dtos/registerCategory.dto";


export async function registerCategoryRepository(registerCategory: RegisterCategoryDTO) {
    await db.connect()
    await db.query(`
    INSERT INTO lanchonete.categoria_produto (nome_categoria)
        VALUES
    ($1)`,
    [registerCategory.name])
}