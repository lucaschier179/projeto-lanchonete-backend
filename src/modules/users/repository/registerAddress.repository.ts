import db from '../../../infrastructure/database/conexao_banco_de_dados';
import { RegisterUserDTO } from "../dtos/registerUser.dto";


export async function registerAddressRepository(id_usuario:string, registerUser: RegisterUserDTO) {
    await db.connect()
    await db.query(`
        INSERT INTO lanchonete.endereco (id_usuario, rua, numero, complemento, cidade, estado, cep)
            VALUES 
        ($1, $2, $3, $4, $5, $6, $7);`,
    [id_usuario, registerUser.street, registerUser.number, registerUser.complement, registerUser.city, registerUser.state, registerUser.zipCode])
}