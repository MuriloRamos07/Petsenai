const express = require("express");
const funcao = require('./functions');
const routers = express.Router();

//Rota Raiz
routers.get('/', async (req, res) => {
    res.status(200).json({ mensagem: "A API está online" });
});

//Rota para cadastrar
routers.post("/cadastrar", async (req, res) => {
    const { nome, cidade, estado, email, senha } = req.body;

    console.log(req.body);

    try {
        const consulta = await funcao.obterEmail(email);

        if (consulta.length > 0) {
            res.status(400).json({ mensagem: "Erro ao tentar cadastrar o usuário" })
        }
        else {
            await funcao.cadastrar(nome, cidade, estado, email, senha)
            res.status(201).json({ mensagem: "Cadastro realizado com sucesso!!!" })
        }
    }
    catch (erro) {
        console.log(erro)
        res.status(500).json({ mensagem: "Erro ao tentar cadastrar o usuário" });
    }
});

//Rota para realizar o Login
routers.post("/login", async (req, res) => {
    const { email, senha } = req.body;

    try {
        const usuario = await funcao.login(email, senha);

        if (!usuario) {
            res.status(401).json({ mensagem: "Email ou senha inválidos" });
        } else {
            res.redirect("/index.html");
        }
    } catch (error) {
        res.status(500).json({ error: 'Erro ao tentar validar login' });
    }
});
module.exports = routers;