const db = require("../../config/conexao_banco_de_dados")

const RemoveCliente = async function DeletaRegistro(ID_Cliente) {
  resultado = await db.query("SELECT * FROM cadastro_cliente WHERE id_cliente= " + ID_Cliente)
  console.log(resultado)
  if (resultado.rowCount > 0) {
    console.log("aaaaaaaaaaaaaaaa")
    await db.query("DELETE FROM cadastro_cliente WHERE id_cliente= " + ID_Cliente)
    db.end()
    return "ID: " + ID_Cliente + " excluido com sucesso!",200
  }
  else {
    console.log("bbbbbbbbbbbbbbbbbbbbbbbbbb")
    db.end()
    return "ID: " + ID_Cliente + " não existe!",404
  }
}

module.exports = { RemoveCliente }
