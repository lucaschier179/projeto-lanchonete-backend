CREATE TABLE IF NOT EXISTS Cadastro_Cliente (
        id INTEGER PRIMARY KEY,
        nome VARCHAR(60)NOT NULL, 
        email VARCHAR(30) NOT NULL, 
        senha VARCHAR(20) NOT NULL,
        cpf VARCHAR(11) NOT NULL,
        endereco VARCHAR(45) NOT NULL
);

CREATE TABLE IF NOT EXISTS Cadastro_Colaborador (
        id SERIAL PRIMARY KEY,
        nome VARCHAR(60)NOT NULL,
        email VARCHAR(30) NOT NULL, 
        senha VARCHAR(20) NOT NULL,
        cpf VARCHAR(11) NOT NULL,
        endereco VARCHAR(45) NOT NULL
);