const { query } = require("express")
const db = require("./conexao")

async function inserirDados() {
  await db.connect()
  const novoCliente = "INSERT INTO cadastro_cliente (id_cliente, nome_cliente, email_cliente, senha_cliente, cpf_cliente, endereco_cliente, idade_cliente) VALUES ($1, $2, $3, $4, $5, $6, $7)"
  await db.query(novoCliente, [6, "Diego César Nogueira", "diegeira@etipel.com.br", "LIG1gNw2Oy", "65589455251", "Rua Agenor dos Santos", 25])
  await db.end()
}

inserirDados()
