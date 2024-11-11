import { getProductRepository } from '../../products/repository/getProduct.repository';
import { registerOrderRepository } from '../repository/registerOrder.repository';
import { NotFound } from "../../../infrastructure/expectations/notFound"
import { RegisterOrderDTO } from "../dtos/registerOrder.dto"


export async function registerOrderUseCase(registerOrder: RegisterOrderDTO) {
    
    const result = await getProductRepository(registerOrder)
    if (!result){
        throw new NotFound("Produto não cadastado")
    }

    await registerOrderRepository(registerOrder)
    return {"message": "Item cadastrado com sucesso"}
}