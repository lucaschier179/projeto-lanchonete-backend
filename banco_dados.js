const Banco = require("sqlite3");

const db = new Banco.Database('Banco_Lanchonete.db');

db.serialize(function() {
    // Create a table
    db.exec(`CREATE TABLE IF NOT EXISTS Cadastro (
        id INTEGER PRIMARY KEY,
        nome VARCHAR(60)NOT NULL, 
        email VARCHAR(30) NOT NULL, 
        senha VARCHAR(20) NOT NULL,
        cpf VARCHAR(11) NOT NULL,
        endereco VARCHAR(45) NOT NULL
    );`
    );

    // Insert data into the table
    //db.exec(`INSERT INTO Cadastro (name) VALUES ('')`);

    });
db.close();