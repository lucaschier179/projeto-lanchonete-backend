
import { registerUserUseCase } from "../useCase/registerUser.useCase";
import express, { Request, Response, NextFunction } from "express";
import { getUserUseCase } from "../useCase/getUser.useCase";
import {RegisterUserDTO} from "../dtos/registerUser.dto";
import {LoginDTO} from "../dtos/userlogin.dto";


const route = express.Router();

route.post("/user/login", async function (req: Request<unknown, unknown, LoginDTO>, res: Response, next: NextFunction) {
    const user = req.body; 
    
    try{
      const response = await getUserUseCase(user);
      res.send(response);
    }catch (error){
      next(error);
    }
})


route.post("/user/register", async function (req: Request<RegisterUserDTO>, res: Response, next: NextFunction) {
    const registerUser = req.body;
    try{
      const response = await registerUserUseCase(registerUser);
      res.send(response);
    }catch (error){
      next(error);
    }
})


export default route;