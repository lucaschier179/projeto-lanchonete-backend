const db = require("../../config/conexao_banco_de_dados")

const CadastarCliente = async function inserirDados(Nome, Email, Senha, CPF, Endereco, Idade) {
  await db.connect()
  Cadastro_Existe = await db.query("SELECT * FROM cadastro_cliente WHERE cpf_cliente=$1",[CPF])
  if(Cadastro_Existe.rowCount <= 0)
    try {
      console.log("a")
      const novoCliente = `INSERT INTO cadastro_cliente 
      (nome_cliente, email_cliente, senha_cliente, cpf_cliente, endereco_cliente, idade_cliente) 
      VALUES ($1, $2, $3, $4, $5, $6)`
      await db.query(novoCliente, [Nome, Email, Senha, CPF, Endereco, Idade])
      // await db.end()
      return "Cadastrado Com Sucesso!"
    } catch {
      return 'Erro ao cadastrar'
    }
  else{
    return 'Cadastro Já realizado'
  }
}
const CadastarColaborador = async function inserirDadosColaborador(Nome, Email, Senha, CPF, Endereco, Idade) {
  await db.connect()
  Cadastro_Existe = await db.query("SELECT * FROM cadastro_colaborador WHERE cpf_colaborador=$1",[CPF])
  if(Cadastro_Existe.rowCount <= 0)
    try {
      console.log("a")
      const NovoColaborador = `INSERT INTO cadastro_colaborador 
      (nome_colaborador, email_colaborador, senha_colaborador, cpf_colaborador, endereco_colaborador, idade_colaborador) 
      VALUES ($1, $2, $3, $4, $5, $6)`
      await db.query(NovoColaborador, [Nome, Email, Senha, CPF, Endereco, Idade])
      return "Cadastrado Com Sucesso!"
    } catch {
      return 'Erro ao cadastrar'
    }
  else{
    return 'Cadastro Já realizado'
  }
}

module.exports = { CadastarCliente,CadastarColaborador }
