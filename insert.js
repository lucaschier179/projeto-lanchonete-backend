const db = require("./conexao")

const CadastarCliente = async function inserirDados(Nome, Email, Senha, CPF, Endereco, Idade) {
  console.log(Nome, Email, Senha, CPF, Endereco, Idade)
  await db.connect()
  try{
    const novoCliente = `INSERT INTO cadastro_cliente 
    (nome_cliente, email_cliente, senha_cliente, cpf_cliente, endereco_cliente, idade_cliente) 
    VALUES ($1, $2, $3, $4, $5, $6)`
    db.query(novoCliente, [Nome, Email, Senha, CPF, Endereco, Idade])
    return "Cadastrado Com Sucesso!"
  }catch{
    return 'Qaqwq'
  }
}

module.exports = {CadastarCliente}