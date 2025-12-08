const conexao = require('./db');

// Função para Cadastro
module.exports.Cadastro = async (NOME_COMPLETO, TELEFONE, EMAIL, ASSUNTO, MENSAGEM) => {
    try {
        const [resultado] = await conexao.query("INSERT INTO contato (NOME_COMPLETO, TELEFONE, EMAIL, ASSUNTO, MENSAGEM) VALUES(?,?,?,?,?)",
            [NOME_COMPLETO, TELEFONE, EMAIL, ASSUNTO, MENSAGEM]);

        return resultado;
    }
    catch (erro) {
        return erro;
    }
};