
import { registerOrderUseCase } from "../useCase/registerOrder.useCase";
import { deleteOrderUseCase } from "../useCase/deleteOrder.useCase";
import express, { Request, Response, NextFunction } from "express";
import {RegisterOrderDTO} from "../dtos/registerOrder.dto";
import {DeleterOrderDTO} from "../dtos/deleteOrder.dto";


const routeOrder = express.Router();

routeOrder.post("/orders/register", async function (req: Request<RegisterOrderDTO>, res: Response, next: NextFunction) {
    const registerOrder = req.body; 
    
    try{
      const response = await registerOrderUseCase(registerOrder);
      res.send(response);
    }catch (error){
      next(error);
    }
})


routeOrder.delete("/orders", async function (req: Request<undefined, undefined, undefined, DeleterOrderDTO>, res: Response, next: NextFunction) {
    const deleteOrder = req.query;
    try{
      const response = await deleteOrderUseCase(deleteOrder);
      res.send(response);
    }catch (error){
      next(error);
    }
})


export default routeOrder;