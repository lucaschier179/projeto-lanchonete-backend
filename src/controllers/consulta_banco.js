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

module.exports = { ConsultaCliente, ConsultaColaborador }
