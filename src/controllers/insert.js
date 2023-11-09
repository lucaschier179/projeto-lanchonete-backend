const db = require("../../config/conexao_banco_de_dados")

const CadastarCliente = async function inserirDadosCliente(Nome, Email, Senha, CPF, Endereco, Idade) {
  await db.connect()
  Cadastro_Existe = await db.query("SELECT * FROM cadastro WHERE cpf=$1 or email=$2", [CPF,Email])
  if (Cadastro_Existe.rowCount <= 0)
    try {
      const novoCliente = `INSERT INTO cadastro 
      (nome, email, senha, cpf, endereco, idade) 
      VALUES ($1, $2, $3, $4, $5, $6)`
      await db.query(novoCliente, [Nome, Email, Senha, CPF, Endereco, Idade])
      return "Cliente Cadastrado Com Sucesso!"
    }
    catch {
      return "Erro ao cadastrar"
    }
  else {
    return "Cadastro já realizado!"
  }
}
const CadastarColaborador = async function inserirDadosColaborador(Nome, Email, Senha, CPF, Endereco, Idade) {
  await db.connect()
  Cadastro_Existe = await db.query("SELECT * FROM cadastro WHERE cpf=$1 or email=$2", [CPF,Email])
  if (Cadastro_Existe.rowCount <= 0)
    try {
      const novoColaborador = `INSERT INTO cadastro 
      (nome, email, senha, cpf, endereco, idade) 
      VALUES ($1, $2, $3, $4, $5, $6)`
      await db.query(novoColaborador, [Nome, Email, Senha, CPF, Endereco, Idade])
      return "Colaborador Cadastrado Com Sucesso!"
    }
    catch {
      return "Erro ao cadastrar"
    }
  else {
    return "Cadastro já realizado!"
  }
}

module.exports = { CadastarCliente, CadastarColaborador }
