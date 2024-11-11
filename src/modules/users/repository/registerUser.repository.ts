import db from '../../../infrastructure/database/conexao_banco_de_dados';
import { RegisterUserDTO } from "../dtos/registerUser.dto";
import { getUser } from "../repository/getUser.repository";


export async function registerUserRepository(registerUser: RegisterUserDTO) {
    await db.connect()
    await db.query(`
        INSERT INTO lanchonete.usuario (nome_usuario, email_usuario, senha_usuario, cpf_usuario, tipo_usuario)
            VALUES 
        ($1, $2, $3, $4, $5)`,
    [registerUser.username, registerUser.email, registerUser.password, registerUser.cpf, 'Usuario'])
    const result =await getUser(registerUser)
    return result.id_usuario
}