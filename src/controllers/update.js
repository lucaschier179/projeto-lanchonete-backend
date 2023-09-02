const db = require("../../config/conexao_banco_de_dados")

async function alterarRegistro() {
  await db.connect()
  const atualiza = `UPDATE cadastro_cliente SET nome_cliente='Teste' WHERE nome_cliente='André Samuel César Farias'`
  await db.query(atualiza)
  await db.end()
  console.log("Alterado com sucesso!!!")
}

alterarRegistro()
