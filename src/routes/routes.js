const BancoConsulta = require("../controllers/consulta_banco")
const BancoInserir = require("../controllers/insert")
const BancoDeletar = require("../controllers/delete")
const express = require("express")
const path = require("path")
const routes = express.Router()

routes.get('/testeteste', function (req, res) {
  res.render('./../views/teste.ejs')
})

routes.get('/home', function (req, res) {
  res.render('./../views/home.ejs')
})

routes.get('/', function (req, res) {
  res.render('./../views/index.ejs')
})

routes.get('/cadastros', function (req, res) {
  res.render('./../views/cadastros.ejs')
})

routes.get('/cadastroCliente', function (req, res) {
  res.render('./../views/cadastro_cliente.ejs')
})

routes.get('/cadastroColaborador', function (req, res) {
  res.render('./../views/cadastro_colaborador.ejs')
})

routes.get('*', function(req, res){
  res.status(404).send('what???');
});

routes.get("/api/obter-Cadastrados", function (req, res) {
  BancoConsulta.ConsultaCadastrados()
    .then((Resposta) => {
      res.send(Resposta)
    })
    .catch((error) => {
      res.send(error)
    })
})

routes.get("/api/login", function (req, res) {
  BancoConsulta.Login(req.body.email, req.body.senha)
    .then((Resposta) => {
      res.send('./../views/home.ejs')
    })
    .catch((error) => {
      res.send(error)
    })
})

routes.post("/api/cadastrar-pessoa", function (req, res) {
  BancoInserir.CadastarPessoa(req.body.nome, req.body.email, req.body.senha, req.body.cpf, req.body.endereco, req.body.idade)
    .then((Resposta) => {
      res.send(Resposta)
    })
    .catch((error) => {
      res.send(error)
    })
})

routes.delete("/api/remover-cadastro-pessoa/:nome", function (req, res) {
  BancoDeletar.RemoverCadastradoPessoa(req.params.nome)
    .then((Resposta) => {
      res.sendStatus(Resposta)
    })
    .catch((error) => {
      res.sendStatus(error)
    })
})

module.exports = routes
