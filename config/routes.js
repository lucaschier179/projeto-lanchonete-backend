const express = require('express')
const routes = express.Router()
const path = require('path')
const BancoInserir = require("../insert")

routes.get('/', function (req, res) {
  res.send('Seja Bem Vindo')
})

routes.post('/api/cadastrarcliente', function (req, res) {
    resposta = BancoInserir.CadastarCliente(req.body.nome,req.body.email,req.body.senha,req.body.cpf,req.body.endereco,req.body.idade)
    res.send(resposta)
  
})  

routes.get('/informacoes', function (req, res) {
  res.sendFile(path.join(__dirname + '/../index.html'))
})

module.exports = routes
