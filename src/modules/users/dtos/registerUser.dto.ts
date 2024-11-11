export interface RegisterUserDTO {
    street: string;        // Rua
    number: string;        // Número
    complement: string;   // Complemento (opcional)
    neighborhood: string;  // Bairro
    city: string;          // Cidade
    state: string;         // Estado
    zipCode: string;       // CEP
    country: string;       // País
    cpf: string;           // Cpf
    email: string;         // Email
    username: string;              // Nome de usuário
    password: string;              // Senha
    confirmPassword: string;       // Confirmação de senha
    
}