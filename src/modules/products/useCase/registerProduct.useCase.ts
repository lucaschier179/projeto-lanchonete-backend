import {registerProductRepository} from '../repository/registerProduct.repository';
import { getProductRepository } from '../repository/getProduct.repository';
import {Duplicate} from "../../../infrastructure/expectations/duplicate"
import {NotFound} from "../../../infrastructure/expectations/notFound"
import { RegisterProductDTO } from "../dtos/registerProduct.dto"
import { getCategoryRepository } from '../repository/getCategory.repository';


export async function registerProductUseCase(registerProduct: RegisterProductDTO) {
    
    let result = await getCategoryRepository(registerProduct)
    if (!result){
        throw new NotFound("Categoria Não encontrada")
    }

    result = await getProductRepository(registerProduct)
    if (result){
        let valuesDuplicates = []
        if(result.nome_produto == registerProduct.name){
            valuesDuplicates.push({"name": registerProduct.name})
        }
        if(result.codigo_barra == registerProduct.bar_code){
            valuesDuplicates.push({"bar_code": registerProduct.bar_code})
        }
        console.log(valuesDuplicates)
        throw new Duplicate({"message": "Produto já cadastrado", "values_duplicates":valuesDuplicates})
    }

    await registerProductRepository(registerProduct)
    return {"message": `Produto ${registerProduct.name} cadastrado com sucesso`}
}