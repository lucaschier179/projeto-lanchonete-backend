CREATE TABLE aluno(
	id_aluno SERIAL PRIMARY KEY NOT NULL,
	nome_aluno VARCHAR(50) NOT NULL,
	curso_aluno VARCHAR(50) NOT NULL,
	nota_aluno FLOAT NOT NULL
);

CREATE TABLE turma(
	id_turma SERIAL PRIMARY KEY NOT NULL,
	nome_turma VARCHAR(50) NOT NULL,
	qtd_aluno_turma INT NOT NULL,
	codigo_turma VARCHAR(10) NOT NULL
);

CREATE TABLE disciplina(
	id_disciplina SERIAL PRIMARY KEY NOT NULL,
	nome_disciplina VARCHAR(50) NOT NULL,
	professor_disciplina VARCHAR(11) NOT NULL
);

CREATE TABLE professor(
	id_professor SERIAL PRIMARY KEY NOT NULL,
	nome_professor VARCHAR(50)
);

CREATE TABLE aluno_turma(
	id_aluno_turma SERIAL PRIMARY KEY NOT NULL,
	aluno_id INT,
	turma_id INT,
	FOREIGN KEY (aluno_id) REFERENCES aluno(id_aluno),
	FOREIGN KEY (turma_id) REFERENCES turma(id_turma)
);

CREATE TABLE curso(
	id_curso SERIAL PRIMARY KEY NOT NULL,
	duracao_curso VARCHAR(11) NOT NULL,
	turno_curso VARCHAR(15) NOT NULL,
	nome_curso VARCHAR(30) NOT NULL
);

CREATE TABLE nota_aluno(
	id_nota_aluno SERIAL PRIMARY KEY NOT NULL,
	disciplina_id INT,
	nota DECIMAL(4,2),
	FOREIGN KEY (id_nota_aluno) REFERENCES aluno(id_aluno),
	FOREIGN KEY (disciplina_id) REFERENCES disciplina(id_disciplina)
);