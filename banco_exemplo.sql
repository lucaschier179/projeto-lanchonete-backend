CREATE TABLE IF NOT EXISTS cadastro_cliente (
	id_cliente SERIAL PRIMARY KEY,
	nome_cliente VARCHAR(60)NOT NULL,
	email_cliente VARCHAR(30) NOT NULL, 
	senha_cliente VARCHAR(20) NOT NULL,
	cpf_cliente VARCHAR(11) NOT NULL,
	endereco_cliente VARCHAR(45) NOT NULL
);

CREATE TABLE IF NOT EXISTS cadastro_colaborador (
	id_colaborador SERIAL PRIMARY KEY,
	nome_colaborador VARCHAR(60)NOT NULL,
	email_colaborador VARCHAR(30) NOT NULL, 
	senha_colaborador VARCHAR(20) NOT NULL,
	cpf_colaborador VARCHAR(11) NOT NULL,
	endereco_colaborador VARCHAR(45) NOT NULL,
	idade_colaborador INTEGER NOT NULL
);

CREATE TABLE IF NOT EXISTS produto (
	id_produto SERIAL PRIMARY KEY,
	nome_produto VARCHAR(50) NOT NULL,
	tipo_produto VARCHAR(20) NOT NULL,
	quantidade_produto INTEGER NOT NULL,
	validade_produto VARCHAR(10) NOT NULL,
	codigo_barra_produto VARCHAR(20) NOT NULL
);

CREATE TABLE IF NOT EXISTS estoque (
	id_estoque SERIAL PRIMARY KEY,
	produto_id_estoque INTEGER NOT NULL,
	quantidade_estoque INTEGER NOT NULL,
	FOREIGN KEY (produto_id_estoque) REFERENCES produto(id_produto)
);