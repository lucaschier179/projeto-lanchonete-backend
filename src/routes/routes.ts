import express, { Request, Response } from "express";
import BancoConsulta from "../controllers/consulta_banco";
import BancoDeletar from "../controllers/delete";
import BancoInserir from "../controllers/insert";

const routes = express.Router()


routes.get('/testeteste', function (req: Request, res: Response) {
  res.render('./../views/teste.ejs')
})

routes.get('/home', function (req: Request, res: Response) {
  res.render('./../views/home.ejs')
})

routes.get('/', function (req: Request, res: Response) {
  res.render('./../views/index.ejs')
})

routes.get('/cadastros', function (req: Request, res: Response) {
  res.render('./../views/cadastros.ejs')
})

routes.get('/cadastroCliente', function (req: Request, res: Response) {
  res.render('./../views/cadastro_cliente.ejs')
})

routes.get('/cadastroColaborador', function (req: Request, res: Response) {
  res.render('./../views/cadastro_colaborador.ejs')
})


routes.get("/api/obter-Cadastrados", function (req: Request, res: Response) {
  BancoConsulta.ConsultaCadastrados()
    .then((response: any) => {
      res.send(response)
    })
    .catch((error: Error) => {
      res.send(error)
    })
})

routes.get("/api/login", function (req: any, res: any) {
  BancoConsulta.Login(req.body.email, req.body.senha)
    .then((response: any) => {
      console.log(response)
      res.render('./../views/home.ejs')
    })
    .catch((error: Error) => {
      console.log(error)
      res.send(error)
    })
})

routes.post("/api/cadastrar-pessoa", function (req: any, res: any) {
  BancoInserir.CadastarPessoa(req.body.nome)
    .then((response: any) => {
      res.send(response)
    })
    .catch((error: any) => {
      res.send(error)
    })
})

routes.delete("/api/remover-cadastro-pessoa/:nome", function (req: any, res: any) {
  BancoDeletar.RemoverCadastradoPessoa(req.params.nome)
    .then((response: any) => {
      res.sendStatus(response)
    })
    .catch((error: any) => {
      res.sendStatus(error)
    })
})


routes.all('*', function (req: Request, res: Response) {
  res.status(404).render('./../views/404.ejs');
});


export default routes
