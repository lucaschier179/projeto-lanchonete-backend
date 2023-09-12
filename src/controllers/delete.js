const db = require("../../config/conexao_banco_de_dados")

const RemoveCliente = async function DeletaRegistro(ID_Cliente) {
  resultado = await db.query("SELECT * FROM cadastro_cliente WHERE id_cliente=$1", [ID_Cliente])
  if (resultado.rowCount > 0) {
    await db.query("DELETE FROM cadastro_cliente WHERE id_cliente= $1", [ID_Cliente])
    return "ID: " + ID_Cliente + " excluído com sucesso!", 200
  }
  else {
    return "ID: " + ID_Cliente + " não existe!", 404
  }
}

const RemoveColaborador = async function DeletaRegistro(ID_Colaborador) {
  resultado = await db.query("SELECT * FROM cadastro_colaborador WHERE id_colaborador=$1", [ID_Colaborador])
  if (resultado.rowCount > 0) {
    await db.query("DELETE FROM cadastro_colaborador WHERE id_colaborador=$1", [ID_Colaborador])
    return "ID: " + ID_Colaborador + " excluído com sucesso!", 200
  }
  else {
    return "ID: " + ID_Colaborador + " não existe!", 404
  }
}

module.exports = { RemoveCliente, RemoveColaborador }
