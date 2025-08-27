const express = require("express");

const app = express();

app.get("/",(request,response)=>{

    const { nome }  = request.query;

        
        response.send(`Oppa! ${nome} BAOOO ?`);

});
app.get("/somaDeDoisValores", (request, response)=>{
    const {a , b } = request.query;

    response.send (`${a} + ${b} = ${Number (a) + Number (b) }`);

});

app.get("/DivisaoDeDoisValores", (request, response)=>{
    const {a , b } = request.query;

    response.send (`${a} / ${b} = ${Number (a) / Number (b) }`);

});

app.get("/SubtracaoDeDoisValores", (request, response)=>{
    const {a , b } = request.query;

    response.send (`${a} - ${b} = ${Number (a) - Number (b) }`);

});

app.get("/MultiplicacaoDeDoisValores", (request, response)=>{
    const {a , b } = request.query;

    response.send (`${a} * ${b} = ${Number (a) * Number (b) }`);

});


app.listen(8080, ()=> {

console.log("Servidor esta rodando na porta 8080");

});

  //http://127.0.0.1:8080/