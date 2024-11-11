import { registerTicketItensRepository } from '../repository/registerTicketItens.repository';
import { registerTicketRepository } from '../repository/registerTicket.repository';
import { TicketRegisterDTO } from "../dtos/ticketRegister.dto"


export async function registerTicketUseCase(registerTicket: TicketRegisterDTO) {
    
    let id_pedido = await registerTicketRepository(registerTicket)
    
    await registerTicketItensRepository(registerTicket, id_pedido)
    return {"message": "Comanda cadastrada com sucesso"}
}