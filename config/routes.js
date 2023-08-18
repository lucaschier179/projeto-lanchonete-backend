const express = require('express')
const routes = express.Router()
const path = require('path')
const BancoInserir = require("../insert")

routes.get('/', function (req, res) {
  res.send('Seja Bem Vindo')
})

routes.post('/api/cadastrarcliente', function (req, res) {
  BancoInserir.CadastarCliente(req.body.nome, req.body.email, req.body.senha, req.body.cpf, req.body.endereco, req.body.idade)
  res.send("ok")
})

/*
routes.get('/informacoes', function (req, res) {
  res.sendFile(path.join(__dirname + '/../index.html'))
*/

routes.post('/cadastro-cliente', function (req, res) {
  BancoInserir.CadastarCliente(req.body.nome_cliente, req.body.email_cliente, req.body.senha_cliente, req.body.cpf_cliente, req.body.endereco_cliente, req.body.endereco_cliente)
    .then(() => {
      res.send("Cliente cadastrado com sucesso!")
    })
    .catch((error) => {
      res.send("Erro")
    })
})

module.exports = routes
