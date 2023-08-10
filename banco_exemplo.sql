CREATE TABLE IF NOT EXISTS Cadastro_Cliente (
	id_cliente SERIAL PRIMARY KEY,
	nome VARCHAR(60)NOT NULL,
	email VARCHAR(30) NOT NULL, 
	senha VARCHAR(20) NOT NULL,
	cpf VARCHAR(11) NOT NULL,
	endereco VARCHAR(45) NOT NULL
);

CREATE TABLE IF NOT EXISTS Cadastro_Colaborador (
	id_colaborador SERIAL PRIMARY KEY,
	nome VARCHAR(60)NOT NULL,
	email VARCHAR(30) NOT NULL, 
	senha VARCHAR(20) NOT NULL,
	cpf VARCHAR(11) NOT NULL,
	endereco VARCHAR(45) NOT NULL,
	idade INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS Produto (
	id_produto SERIAL PRIMARY KEY,
	nome VARCHAR(50) NOT NULL,
	tipo VARCHAR(20) NOT NULL,
	quantidade_produto INTEGER NOT NULL,
	validade VARCHAR(10) NOT NULL
	codigo_barra VARCHAR(20) NOT NULL,
);

CREATE TABLE IF NOT EXISTS Estoque (
	id SERIAL PRIMARY KEY,
	produto_id INTEGER NOT NULL,
	quantidade_estoque INTEGER NOT NULL,
	FOREIGN KEY (quantidade_estoque) REFERENCES Produto(quantidade_produto)
);