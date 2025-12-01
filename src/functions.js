const conexao = require('./db');

// Função para Cadastro
module.exports.Cadastro = async (NOME, TELEFONE, EMAIL, ASSUNTO, EMPRESA_ID, MENSAGEM) => {
    try {
        const [resultado] = await conexao.query("INSERT INTO contato (NOME, TELEFONE, EMAIL, ASSUNTO, EMPRESA_ID, MENSAGEM) VALUES(?,?,?,?,?,?)",
            [NOME, TELEFONE, EMAIL, ASSUNTO, EMPRESA_ID, MENSAGEM]);

        return resultado;
    }
    catch (erro) {
        return erro;
    }
};