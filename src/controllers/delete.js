const db = require("../../config/conexao_banco_de_dados")

const RemoveCadastrados = async function DeletaRegistro(ID_Cliente) {
  try{
    await db.query("DELETE FROM cadastrados WHERE id_cliente= $1", [ID_Cliente])
    return "ID: " + ID_Cliente + " excluído com sucesso!", 200
  }
  catch{
      return "ID: " + ID_Cliente + " não existe!", 404
  }
}

module.exports = { RemoveCadastrados}
