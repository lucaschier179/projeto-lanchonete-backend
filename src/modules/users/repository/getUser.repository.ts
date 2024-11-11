import db from '../../../infrastructure/database/conexao_banco_de_dados';
import { RegisterUserDTO } from "../dtos/registerUser.dto"


export async function getUser(user: RegisterUserDTO) {
    await db.connect()
    const result = await db.query(`SELECT * FROM lanchonete.usuario
        LEFT JOIN lanchonete.endereco ON usuario.id_usuario = endereco.id_usuario
        WHERE cpf_usuario=$1 OR email_usuario=$2`,
        [user.cpf, user.email])

    return result.rows[0]
}