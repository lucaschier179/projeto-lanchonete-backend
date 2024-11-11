import {registerCategoryRepository} from '../repository/registerCategory.repository';
import {getCategoryRepository} from '../repository/getCategory.repository';
import {Duplicate} from "../../../infrastructure/expectations/duplicate"
import { RegisterCategoryDTO } from "../dtos/registerCategory.dto"


export async function registerCategoryUseCase(registerCategory: RegisterCategoryDTO) {
    
    const category_id = await getCategoryRepository(registerCategory)
    if (category_id){
        throw new Duplicate("Categoria já cadastrada")
    }
    await registerCategoryRepository(registerCategory)
    return {"message": `Categoria ${registerCategory.name} cadastrado com sucesso`}
}