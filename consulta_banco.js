const db = require("./conexao")

async function listar(){
  await db.connect()
  resultado = await db.query("SELECT * FROM alunos")
  console.log(resultado.rows)
  await db.end()
}

listar()
