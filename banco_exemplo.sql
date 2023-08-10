-- TABELAS - BANCO DE DADOS --
CREATE TABLE IF NOT EXISTS cadastro_cliente (
	id_cliente SERIAL PRIMARY KEY,
	nome_cliente VARCHAR(60)NOT NULL,
	email_cliente VARCHAR(30) NOT NULL, 
	senha_cliente VARCHAR(20) NOT NULL,
	cpf_cliente VARCHAR(11) NOT NULL,
	endereco_cliente VARCHAR(45) NOT NULL
	idade_cliente INTEGER NOT NULL
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

CREATE TABLE IF NOT EXISTS cardapio (
	id_cardapio SERIAL PRIMARY KEY,
	produto_id_cardapio INTEGER NOT NULL,
	valor_produto_cardapio DECIMAL(5,2),
	FOREIGN KEY (produto_id_cardapio) REFERENCES estoque(id_estoque)
);

CREATE TABLE IF NOT EXISTS comanda (
	id_comanda SERIAL PRIMARY KEY,
	produto_id__comanda INTEGER NOT NULL,
	valor_total_comanda DECIMAL(5,2),
	FOREIGN KEY (produto_id__comanda) REFERENCES cardapio(id_cardapio)
);

-- INSERIR DADOS - BANCO DE DADOS --
INSERT INTO cadastro_cliente (
	id_cliente,
	nome_cliente,
	email_cliente,
	senha_cliente,
	cpf_cliente,
	endereco_cliente,
	idade_cliente
)
VALUES (1,'','','','','','');

INSERT INTO cadastro_colaborador (
	id_colaborador,
	nome_colaborador,
	email_colaborador,
	senha_colaborador,
	cpf_colaborador,
	endereco_colaborador,
	idade_colaborador
)
VALUES (1,'','','','','','');

INSERT INTO produto (
	id_produto,
	nome_produto,
	tipo_produto,
	quantidade_produto,
	validade_produto,
	codigo_barra_produto
)
VALUES (1,'','',2,00/00/0000,'');

INSERT INTO estoque (
	id_estoque,
	produto_id_estoque,
	quantidade_estoque
)
VALUES (1,2,3);

INSERT INTO cardapio (
	id_cardapio,
	produto_id_cardapio,
	valor_produto_cardapio
)
VALUES (1,2,00.00);

INSERT INTO comanda (
	id_comanda,
	produto_id__comanda,
	valor_total_comanda
)
VALUES (1,2,00.00);