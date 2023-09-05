const db = require("../../config/conexao_banco_de_dados")

const Consulta = async function listar() {
  await db.connect()
  resultado = await db.query("SELECT * FROM cadastro_cliente")
  console.log(resultado.rows)
  await db.end()
}

module.exports = { Consulta }