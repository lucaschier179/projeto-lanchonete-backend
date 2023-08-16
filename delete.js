const db = require("./conexao")

async function deletaRegistro() {
  await db.connect()
  const excluir = "DELETE FROM cadastro_cliente WHERE id_cliente=1"
  await db.query(excluir)
  await db.end()
  console.log("Deletado com sucesso!!!")
}

