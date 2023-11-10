const db = require("../../config/conexao_banco_de_dados")

const Cadastar = async function inserirDadosCliente(Nome, Email, Senha, CPF, Endereco, Idade) {
  await db.connect()
  cadastrados_Existe = await db.query("SELECT * FROM cadastrados WHERE cpf=$1 or email=$2", [CPF,Email])
  if (cadastrados_Existe.rowCount <= 0)
    try {
      const novoCliente = `INSERT INTO cadastrados 
      (nome, email, senha, cpf, endereco, idade) 
      VALUES ($1, $2, $3, $4, $5, $6)`
      await db.query(novoCliente, [Nome, Email, Senha, CPF, Endereco, Idade])
      return "Cliente Cadastrado Com Sucesso!"
    }
    catch {
      return "Erro ao cadastrar"
    }
  else {
    return "cadastrados já realizado!"
  }
}

module.exports = { Cadastar }
