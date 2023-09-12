const db = require("../../config/conexao_banco_de_dados")

const ConsultaCliente = async function Cadastrados() {
  try{
    await db.connect()
    resultados = (await db.query('SELECT * FROM cadastro_cliente'))
    return resultados.rows
  }
  catch(erro){
    return erro
  }  
}

const ConsultaColaborador = async function Cadastrados() {
  try{
    await db.connect()
    resultados = (await db.query('SELECT * FROM cadastro_colaborador'))
    return resultados.rows
  }
  catch(erro){
    return erro
  }  
}

module.exports = { ConsultaCliente, ConsultaColaborador }