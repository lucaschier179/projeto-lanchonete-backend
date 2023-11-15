const db = require("../../config/conexao_banco_de_dados")

const CadastarPessoa = async function CadastarPessoa(Nome, Email, Senha, CPF, Endereco, Idade) {
  await db.connect()
  CadastradoExiste = await db.query("SELECT * FROM cadastrados WHERE cpf=$1 or email=$2", [CPF,Email])
  if (CadastradoExiste.rowCount <= 0)
    try {
      const NovoCliente = `INSERT INTO cadastrados 
      (nome, email, senha, cpf, endereco, idade) 
      VALUES ($1, $2, $3, $4, $5, $6)`
      await db.query(NovoCliente, [Nome, Email, Senha, CPF, Endereco, Idade])
      return "Cliente Cadastrado Com Sucesso!"
    }
    catch {
      return "Erro ao cadastrar", 500
    }
  else {
    return "Usuario já cadastrado!", 409
  }
}

module.exports = { CadastarPessoa }
