const db = require("../../config/conexao_banco_de_dados")

const ConsultaCliente = async function Cadastrados() {
  try {
    await db.connect()
    resultados = (await db.query("SELECT * FROM cadastro_cliente ORDER BY id_cliente ASC"))
    return resultados.rows
  }
  catch (erro) {
    return erro
  }
}

const ConsultaColaborador = async function Cadastrados() {
  try {
    await db.connect()
    resultados = (await db.query("SELECT * FROM cadastro_colaborador ORDER BY id_colaborador ASC"))
    return resultados.rows
  }
  catch (erro) {
    return erro
  }
}

const Login = async function Login_Cadastros(Tabela, Coluna_a, Email, Coluna_b, Senha) {
  try {
    await db.connect()
    resultados = (await db.query(`SELECT * FROM ${Tabela} WHERE ${Coluna_a}=$1 AND ${Coluna_b}=$2`,[Email,Senha]))
    if (resultados.rowCount > 0){
        return 200
    }else{
      return 404
    }
  }
  catch (erro) {
    return erro
  }
}

module.exports = { ConsultaCliente, ConsultaColaborador, Login}
