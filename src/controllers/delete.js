const db = require("../../config/conexao_banco_de_dados")

const RemoveCliente = async function DeletaRegistro(ID_Cliente) {
  await db.connect()
  resultado = await db.query("SELECT * FROM cadastro_cliente WHERE id_cliente= " + ID_Cliente)
  if (resultado.rowCount > 0) {
    console.log("bbbbbbbbbbb")
    await db.query("DELETE FROM cadastro_cliente WHERE id_cliente= " + ID_Cliente)
    return "ID: " + ID_Cliente + " excluido com sucesso!"
  }
  else {
    console.log("aaaaaaaaaaa")
    return "ID: " + ID_Cliente + " não existe!"
  }
}

module.exports = { RemoveCliente }
