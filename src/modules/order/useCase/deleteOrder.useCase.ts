import { deleteOrderRepository } from '../repository/deleteOrder.repository';
import { getOrderRepository } from '../repository/getOrder.repository';
import { NotFound } from "../../../infrastructure/expectations/notFound"
import { DeleterOrderDTO } from "../dtos/deleteOrder.dto"


export async function deleteOrderUseCase(registerOrder: DeleterOrderDTO) {
    
    const result = await getOrderRepository(registerOrder)
    if (!result){
        throw new NotFound("Item não cadastado")
    }

    await deleteOrderRepository(registerOrder)
    return {"message": "Item removido com sucesso"}
}