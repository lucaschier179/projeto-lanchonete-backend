import db from "../../config/conexao_banco_de_dados";

const CadastarPessoa = async function CadastarPessoa(CPF: string) {
  await db.connect()
  const CadastradoExiste:any = await db.query("SELECT * FROM cadastrados WHERE cpf=$1", [CPF])
  if (CadastradoExiste.rowCount <= 0)
    try {
      const NovoCliente = `INSERT INTO cadastrados 
      (nome, email, senha, cpf, endereco, idade) 
      VALUES ($1, $2, $3, $4, $5, $6)`
      await db.query(NovoCliente, [CPF])
      return "Cliente Cadastrado Com Sucesso!"
    }
    catch {
      return "Erro ao cadastrar" || 500
    }
  else {
    return "CPF já cadastrado! Por favor insira outro CPF..."
  }
}

export default { CadastarPessoa }
