const express = require('express')
let bodyParser = require('body-parser');
const app = express()
const routes = require('./config/routes')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(bodyParser.raw());
app.use(routes)

IP = require("ip").address();
Porta = 3000


app.listen(Porta,IP, ()=>{
    console.log(`Servidor: ${IP}:${Porta}`)
});