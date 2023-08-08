const express = require('express')

const routes = express.Router()
const path = require('path')

routes.get('/', function (req, res) {
  res.send('Teste')
})

routes.get('/informacoes', function (req, res) {
  res.sendFile(path.join(__dirname + '/../index.html'))
})

module.exports = routes
