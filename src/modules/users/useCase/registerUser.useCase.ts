import {registerUserRepository} from '../repository/registerUser.repository';
import {registerAddressRepository} from '../repository/registerAddress.repository';
import {Duplicate} from "../../../infrastructure/expectations/duplicate"
import { RegisterUserDTO } from "../dtos/registerUser.dto"
import {getUser} from '../repository/getUser.repository';


export async function registerUserUseCase(registerUser: RegisterUserDTO) {
    
    const result = await getUser(registerUser)
    console.log(result)
    if (result){
        throw new Duplicate("Usuário já cadastrado")
    }else{
        const id_usuario =await registerUserRepository(registerUser)
        await registerAddressRepository(id_usuario, registerUser)
        return {"message": `Usuário ${registerUser.username} cadastrado com sucesso`}
    }
}