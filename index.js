const express = require('express')
const bodyParser = require('body-parser');
const routes = require('./src/routes/routes') // ../src/routes/routes
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static('/public/css'));

app.use('/public', express.static(__dirname + '/public'));

app.use(routes);

IP = require("ip").address();
Porta = 3000

app.listen(Porta, IP, () => {
  console.log(`Servidor: ${IP}:${Porta}`)
});