const db = require("../../config/conexao_banco_de_dados")

const CadastarCliente = async function inserirDados(Nome, Email, Senha, CPF, Endereco, Idade) {
  await db.connect()
  Cadastro_Existe = (await db.query("SELECT * FROM cadastro_cliente WHERE cpf_cliente=$1",[CPF])).rowCount
  if(CadastarCliente <= 0)
    try {
      const novoCliente = `INSERT INTO cadastro_cliente 
      (nome_cliente, email_cliente, senha_cliente, cpf_cliente, endereco_cliente, idade_cliente) 
      VALUES ($1, $2, $3, $4, $5, $6)`
      await db.query(novoCliente, [Nome, Email, Senha, CPF, Endereco, Idade])
      await db.end()
      return "Cadastrado Com Sucesso!"
    } catch {
      return 'Erro ao cadastrar', 500
    }
  else{
    return 'Cadastro Já realizado', 422
  }
}

module.exports = { CadastarCliente }
