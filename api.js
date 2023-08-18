const express = require('express')
const bodyParser = require('body-parser');
const routes = require('./config/routes')
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.use(routes);

IP = require("ip").address();
Porta = 3000

app.listen(Porta,IP, ()=>{
    console.log(`Servidor: ${IP}:${Porta}`)
});