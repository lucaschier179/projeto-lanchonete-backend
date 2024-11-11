import {NotFound} from "../../../infrastructure/expectations/notFound";
import {loginUserRepository} from '../repository/loginUser.repository';
import { LoginDTO} from "../dtos/userlogin.dto";


export async function getUserUseCase(user: LoginDTO) {
    const result = await loginUserRepository(user);
    if (result){
        return result;
    }else{
        throw new NotFound("Usuário não encontrado");
    }
}