const express = require("express")
const routes = express.Router()
const path = require("path")
const BancoConsulta = require("../controllers/consulta_banco")
const BancoInserir = require("../controllers/insert")
const BancoDeletar = require("../controllers/delete")

routes.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/../views/index.html"))
})

routes.get("/cadastroCliente", function (req, res) {
  res.sendFile(path.join(__dirname + "/../views/cadastro_cliente.html"))
})

routes.get("/cadastroColaborador", function (req, res) {
  res.sendFile(path.join(__dirname + "/../views/cadastro_colaborador.html"))
})

routes.get("/api/obterCadastrados", function (req, res) {
  BancoConsulta.ConsultaCliente()
    .then((Resposta) => {
      res.send(Resposta)
    })
    .catch((error) => {
      res.send(error)
    })
})

routes.get("/api/obterColaboradoresCadastrados", function (req, res) {
  BancoConsulta.ConsultaColaborador()
    .then((Resposta) => {
      res.send(Resposta)
    })
    .catch((error) => {
      res.send(error)
    })
})

routes.post("/api/cadastrarCliente", function (req, res) {
  BancoInserir.CadastarCliente(req.body.nome, req.body.email, req.body.senha, req.body.cpf, req.body.endereco, req.body.idade)
    .then((Resposta) => {
      res.send(Resposta)
    })
    .catch((error) => {
      res.send(error)
    })
})

routes.post("/api/cadastrarColaborador", function (req, res) {
  BancoInserir.CadastarColaborador(req.body.nome, req.body.email, req.body.senha, req.body.cpf, req.body.endereco, req.body.idade)
    .then((Resposta) => {
      res.send(Resposta)
    })
    .catch((error) => {
      res.send(error)
    })
})

routes.delete("/api/deletarCliente/:id_cliente", function (req, res) {
  BancoDeletar.RemoveCliente(req.params.id_cliente)
    .then((Resposta) => {
      res.send(Resposta)
    })
    .catch((error) => {
      res.send(error)
    })
})

routes.post("/api/login/:tabela", function (req, res) {
  BancoConsulta.Login(req.params.tabela, req.body.coluna_a, req.body.email, req.body.coluna_b, req.body.senha)
    .then((Resposta) => {
      res.send(Resposta)
    })
    .catch((error) => {
      res.send(error)
    })
})


routes.delete("/api/deletarColaborador/:id_colaborador", function (req, res) {
  BancoDeletar.RemoveColaborador(req.params.id_colaborador)
    .then((Resposta) => {
      res.send(Resposta)
    })
    .catch((error) => {
      res.send(error)
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
