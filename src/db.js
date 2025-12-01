// Variável para armazernar as propriedadesde conexão com MYSQL
const mysql = require("mysql2/promise");

// Criar conexão com banco de dados 
const conexao = mysql.createPool({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "admin",
    database: "oh_my_dog" // Criar o banco de dados
});

module.exports = conexao;