import db from "../../config/conexao_banco_de_dados";

const RemoverCadastradoPessoa = async function RemoverCadastradoPessoa(Nome_Pessoa: string) {
  try {
    await db.query("DELETE FROM cadastrados WHERE nome= $1", [Nome_Pessoa])
    return `Usuario: ${Nome_Pessoa} excluído com sucesso!` || 200
  }
  catch {
    return `Usuario: ${Nome_Pessoa} não cadastrado!` || 404
  }
}

export default { RemoverCadastradoPessoa }
