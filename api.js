const express = require('express')
const bodyParser = require('body-parser');
const routes = require('./config/routes')
const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(routes)
$.get('http://api.fixer.io/latest', function(data) {
    console.log(data);
});

IP = require("ip").address();
Porta = 3000


app.listen(Porta,IP, ()=>{
    console.log(`Servidor: ${IP}:${Porta}`)
});