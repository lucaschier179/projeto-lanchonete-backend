const express = require('express')
const app = express()
const routes = require('./config/routes')

app.use(routes)

const PORT = "3000"
const IP = "192.168.197.230"

// app.set("PORT",PORT)

app.listen(PORT,IP, () => {
  console.log("Servidor Ligado em: " + IP + ":" + PORT)
});
