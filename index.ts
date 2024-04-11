import bodyParser from 'body-parser';
import express from 'express';
import path from 'path';
import routes from './src/routes/routes';

const app = express();

app.use(bodyParser.json())

app.use(bodyParser.urlencoded({ extended: true }))

app.use(express.static('/public/css'));

app.use('/public', express.static(__dirname + '/public'));

app.use(routes);

app.set('views', path.join(__dirname, './src/views'))

app.set('view engine', 'ejs')

app.use('/public', express.static('public'))

const IP = require("ip").address();
const Porta = 3000

app.listen(Porta, IP, () => {
  console.log(`Servidor: ${IP}:${Porta}`)
});