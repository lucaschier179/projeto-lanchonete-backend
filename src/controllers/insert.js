const db = require("../../config/conexao_banco_de_dados")

const CadastarCliente = async function inserirDados(Nome, Email, Senha, CPF, Endereco, Idade) {
  console.log(Nome, Email, Senha, CPF, Endereco, Idade)
  await db.connect()
  Cadastro_Existe = db.query("SELECT cpf_cliente FROM cadastro_cliente where cpf_cliente = " + CPF)
  if(!Cadastro_Existe)
    try {
      const novoCliente = `INSERT INTO cadastro_cliente 
      (nome_cliente, email_cliente, senha_cliente, cpf_cliente, endereco_cliente, idade_cliente) 
      VALUES ($1, $2, $3, $4, $5, $6)`
      db.query(novoCliente, [Nome, Email, Senha, CPF, Endereco, Idade])
      return "Cadastrado Com Sucesso!"
    } catch {
      return 'Erro ao cadastrar'
    }
  else{
    return 'Cadastro Já realizado', 404
  }
}

module.exports = { CadastarCliente }
