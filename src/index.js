const express = require("express");
const bodyParser = require('body-parser');
const path = require('path');
const routers = require("../src/routers");
const conexao = require("./db");
const cors = require("cors");

const app = express();

app.use(bodyParser.urlencoded({ extended: true })); 
app.use(express.static(path.join(__dirname,'..', "public")));
app.use(cors());
app.use(routers);

conexao.query("select 1")
.then(() => {
    console.log("sucesso");
    app.listen(3001, function(){
        console.log("Servidor executado na url: http://localhost:3001")
    });
})
.catch (erro => console.log(" Conexão falhou \n" + erro))