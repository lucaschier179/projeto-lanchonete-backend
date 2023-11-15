const BancoConsulta = require("../controllers/consulta_banco")
const BancoInserir = require("../controllers/insert")
const BancoDeletar = require("../controllers/delete")
const express = require("express")
const path = require("path")
const routes = express.Router()

routes.get('/testeteste', function (req, res) {
  res.render('./../views/teste.ejs')
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
      res.send(Resposta)
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


//  CRUD - Básico - Aula 31/08/2023
/*
let infos = [
  {
    id: 1,
    nome: "Lucas",
    idade: 19,
    email: "lschier179@hotmail.com",
  },
  {
    id: 2,
    nome: "Joãozinho",
    idade: 16,
    email: "jao123@hotmail.com",
  },
  {
    id: 3,
    nome: "Zequinha",
    idade: 19,
    email: "ze123kinha@hotmail.com",
  },
]

function consulta(id) {
  return infos.filter(info => info.id == id)
}

function consultaIndice(id) {
  return infos.findIndex(info => info.id == id)
}

routes.get("/insomnia", function (req, res) {
  res.json(infos)
})

routes.get("/insomnia/:id", function (req, res) {
  res.json(consulta(req.params.id))
})

routes.post("/insomnia", function (req, res) {
  infos.push(req.body)
  res.send("Dados inseridos com sucesso!")
})

routes.put("/insomnia/:id", function (req, res) {
  let index = consultaIndice(req.params.id)
  infos[index].nome = req.body.nome
  infos[index].idade = req.body.idade
  res.send("Editado com sucesso!")
})

routes.delete("/insomnia/:id", function (req, res) {
  let index = consultaIndice(req.params.id)
  infos.splice(index, 1)
  res.send("Deletado com sucesso!")
})
*/

module.exports = routes
