const express = require('express')
const routes = express.Router()
const path = require('path')
const BancoInserir = require("../insert")
const BancoDeletar = require("../delete")

routes.get('/', function (req, res) {
  res.send('Seja Bem Vindo')
})

routes.post('/api/cadastrarcliente', function (req, res) {
  Cadastro={
    "nome": req.body.nome,
    "email": req.body.email,
    "senha": req.body.senha,
    "cpf": req.body.cpf,
    "endereco": req.body.endereco,
    "idade": req.body.idade

  }
  BancoInserir.CadastarCliente(req.body.nome, req.body.email, req.body.senha, req.body.cpf, req.body.endereco, req.body.idade)
    .then((Resposta) => {
      res.send(Resposta)
    })
    .catch((error) => {
      res.send(error)
    })

})
routes.delete('/api/deletarcadastro', function (req, res) {
  console.log(req.body.id_cliente)
  BancoDeletar.RemoveCliente(req.body.id_cliente)
    .then((Resposta) => {
      res.send(Resposta)
    })
    .catch((error) => {
      res.send(error)
    })

})

/*
routes.get('/informacoes', function (req, res) {
  res.sendFile(path.join(__dirname + '/../index.html'))
*/

module.exports = routes
