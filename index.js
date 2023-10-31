const express = require('express')
const bodyParser = require('body-parser');
const routes = require('./src/routes/routes') // ../src/routes/routes
const app = express();
const path = require('path')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static('/public/css'));

app.use('/public', express.static(__dirname + '/public'));

app.use(routes);

app.set('views', path.join(__dirname, './src/views'))
app.set('view engine', 'ejs')

app.use('/public', express.static('public'))

IP = require("ip").address();
Porta = 3000

app.listen(Porta, IP, () => {
  console.log(`Servidor: ${IP}:${Porta}`)
});