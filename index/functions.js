const connection = require("./db");

module.exports.obterEmail = async (email) => {
    try {
        const [resultado] = await connection.query("SELECT email FROM usuarios WHERE email=?", [email])
        return resultado
    }
    catch (erro) {
        throw erro
    }
};

module.exports.cadastrar = async(nome, cidade, estado, email, senha) => {
    try {
        const resultado = await connection.query(
            "INSERT INTO usuarios (nome, cidade, estado, email, senha) VALUES (?, ?, ?, ?, ?)",
            [nome, cidade, estado, email, senha]
        );
        return resultado;
    } catch (erro) {
        throw erro;
    }
};

module.exports.login = async (email, senha) => {
    try {
        const [resultado] = await connection.query("SELECT nome, email,senha FROM usuarios WHERE email=? AND senha = ?", [email, senha]);

        if (resultado.length > 0) {
            return resultado
        }
        else {
            return null
        }
    } catch (erro) {
        throw erro;
    }
};