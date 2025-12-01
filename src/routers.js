
const express = require("express");
const funcao = require("./functions")
const routers = express.Router();

// Rota para Cadastrar objeto no Banco de dados
routers.post("/Cadastrar", async (req, res) => {
    const { NOME, TELEFONE, EMAIL, ASSUNTO, MENSAGEM } = req.body;

    const EMPRESA_ID = 1;

    console.log(req.body);

    try {
        const cadastro = await funcao.Cadastro(NOME, TELEFONE, EMAIL, ASSUNTO, EMPRESA_ID, MENSAGEM);

        console.log(cadastro)

        if (cadastro) {
            res.status(201).json({ msg: "Mensagem enviada com sucesso!" });
        }
        else {
            res.status(404).json({ msg: "Mensagem não enviada!" });
        }
    }
    catch (erro) {
        console.log(erro)
        res.status(500).json({ msg: "Erro no servidor!" });
    }
});
module.exports = routers;