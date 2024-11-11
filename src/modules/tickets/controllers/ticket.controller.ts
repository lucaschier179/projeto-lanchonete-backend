import { registerTicketUseCase } from "../useCase/registerTicket.useCase";
import express, { Request, Response, NextFunction } from "express";
import { TicketRegisterDTO } from "../dtos/ticketRegister.dto";


const routeTicket = express.Router();

routeTicket.post("/ticket/register", async function (req: Request<TicketRegisterDTO>, res: Response, next: NextFunction) {
    const registerOrder = req.body; 
    
    try{
      const response = await registerTicketUseCase(registerOrder);
      res.send(response);
    }catch (error){
      next(error);
    }
})


export default routeTicket;