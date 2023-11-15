const db = require("../../config/conexao_banco_de_dados")

const RemoverCadastradoPessoa = async function RemoverCadastradoPessoa(Nome_Pessoa) {
  try{
    await db.query("DELETE FROM cadastrados WHERE nome= $1", [Nome_Pessoa])
    return "Usuario: " + Nome_Pessoa + " excluído com sucesso!", 200
  }
  catch{
      return "Usuario: " + Nome_Pessoa + " não cadastro!", 404
  }
}

module.exports = { RemoverCadastradoPessoa}
