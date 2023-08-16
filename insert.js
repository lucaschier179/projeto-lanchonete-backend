const db = require("./conexao")

const CadastarCliente = async function inserirDados(Nome, Email, Senha, CPF, Endereco, Idade) {
  await db.connect()
  const novoCliente = "INSERT INTO cadastro_cliente (nome_cliente, email_cliente, senha_cliente, cpf_cliente, endereco_cliente, idade_cliente) VALUES ($1, $2, $3, $4, $5, $6)"
  await db.query(novoCliente, [Nome, Email, Senha, CPF, Endereco, Idade])
  await db.end()
  return "aaaaaaaaa"
}

module.exports = {CadastarCliente}
