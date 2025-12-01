const express = require("express");
const bodyParser = require('body-parser');
const path = require('path');
const routers = require("../src/routers");
const client = require("./db");
const cors = require("cors");

const app = express();

app.use(bodyParser.urlencoded({ extended: true })); 
app.use(express.static(path.join(__dirname,'..', "public")));
app.use(cors());
app.use(routers);

client.query("select 1")
.then(()=>{
    console.log("conectado com sucesso")
    app.listen(3001, function(){
        console.log("servidor rodando na url:http://localhost:3001")
    });
})
.catch(error => console.error("Falha ao conectar no banco de dados", error));
