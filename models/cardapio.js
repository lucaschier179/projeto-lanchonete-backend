const { DataTypes } = require("sequelize")
const sequelize = require("../config/conexao_sequelize")

const Categorias = sequelize.define("cardapio", {
  categoria_nome: DataTypes.STRING,
})

// Força a criação da tabela novamente e exclui os dados existentes, deve ser executado apenas na primeira vez
// Categorias.sync({force: true})

module.exports = Categorias
