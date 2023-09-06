const express = require('express')
const routes = express.Router()
const path = require('path')
const BancoInserir = require("../controllers/insert")
const BancoDeletar = require("../controllers/delete")

routes.get('/', function (req, res) {
  res.sendFile(path.join(__dirname + '/../views/index.html'))
})

routes.get('/cadastrocliente', function (req, res) {
  res.sendFile(path.join(__dirname + '/../views/cadastro_cliente.html'))
})

routes.post('/api/cadastrarcliente', function (req, res) {
  BancoInserir.CadastarCliente(req.body.nome, req.body.email, req.body.senha, req.body.cpf, req.body.endereco, req.body.idade)
    .then((Resposta) => {
      res.send(Resposta)
    })
    .catch((error) => {
      res.send(error)
    })
})

routes.delete('/api/deletarcadastro', function (req, res) {
  BancoDeletar.RemoveCliente(req.body.id_cliente)
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

routes.get('/insomnia', function (req, res) {
  res.json(infos)
})

routes.get('/insomnia/:id', function (req, res) {
  res.json(consulta(req.params.id))
})

routes.post('/insomnia', function (req, res) {
  infos.push(req.body)
  res.send("Dados inseridos com sucesso!")
})

routes.put('/insomnia/:id', function (req, res) {
  let index = consultaIndice(req.params.id)
  infos[index].nome = req.body.nome
  infos[index].idade = req.body.idade
  res.send("Editado com sucesso!")
})

routes.delete('/insomnia/:id', function (req, res) {
  let index = consultaIndice(req.params.id)
  infos.splice(index, 1)
  res.send("Deletado com sucesso!")
})
*/

module.exports = routes
