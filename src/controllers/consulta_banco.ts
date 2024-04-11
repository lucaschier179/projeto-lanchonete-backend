import db from "../../config/conexao_banco_de_dados";

const ConsultaCadastrados = async function Cadastrados() {
  try {
    await db.connect()
    const resultados = (await db.query("SELECT * FROM cadastrados ORDER BY id_cliente ASC"))
    return resultados.rows
  }
  catch (erro) {
    return erro
  }
}

const Login = async function Login_Cadastros(Email: string, Senha: string) {
  try {
    await db.connect()
    const resultados: any = (await db.query(`SELECT * FROM cadastrados WHERE email=$1 AND senha=$2`, [Email, Senha]))
    if (resultados.rowCount > 0) {
      return 200
    } else {
      return 404
    }
  }
  catch (erro) {
    return erro
  }
}

export default { ConsultaCadastrados, Login }
