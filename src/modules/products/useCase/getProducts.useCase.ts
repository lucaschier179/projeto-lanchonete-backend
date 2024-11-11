import {getProductsRepository} from '../repository/getProducts.repository';
import {NotFound} from "../../../infrastructure/expectations/notFound"
import { GetProductDTO } from "../dtos/getProduct.dto"


export async function getProductsUseCase(getProducts: GetProductDTO) {
    
    const result = await getProductsRepository(getProducts)
    if (result.length <= 0 ){
        throw new NotFound("Categoria não cadastrada")
    }
    return result
}