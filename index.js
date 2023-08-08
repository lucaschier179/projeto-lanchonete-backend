const express = require('express')
const app = express()
const routes = require('./config/routes')
const IP = require('ip').address();
app.use(routes)

const PORT = "3000"

app.listen(PORT,IP, () => {
  console.log( `Servidor Ligado em: ${IP}:${PORT}`)
});