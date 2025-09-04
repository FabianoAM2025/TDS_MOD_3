const express = require("express");

const app = express();

app.use(express.json());

const pessoas = [
    { id: 1, nome: "Fabiano", telenone: "999114954" },
    { id: 2, nome: "Fernando", telefone: "984051770" }
];

var contador = 2;

app.get("/pessoas", (request, response) => {
    return response.send(pessoas);
});

app.post("/pessoas", (request, response) => {

    const nome = request.body.nome;
    const telefone = request.body.telefone;
    const status = request.body.status;
    contador++;
    pessoas.push({
        id: contador,
        nome,
        telefone,
        status
    });
    return response.send(pessoas);
});



app.get("/pessoas/:id", (request, response) => {
    const id = request.params.id;

    const pessoa = pessoas.filter(i => i.id == id);

    if (pessoa.length <= 0) {
        return response.send({
            menssagem: "Nenhuma pessoa com este ID foi encontrada!"
        });
    }

    return response.send(pessoa);
});



app.put("/pessoas", (request, response) => {

   const {id,nome,telefone,status}=request.body;

    if (id == undefined) {
        return response.send({
            menssagem:
                "O campo ID é obrigatorio"
        });
    }
    
    const pessoa = pessoas.filter(item => item.id == id) ;
   

    if (pessoa.length <= 0){
        return response.send({ menssagem: "Nenhuma pessoa com este id foi encontrada!" });
    }
        
    pessoa[0].nome = nome;
    pessoa[0].telefone = telefone;
    pessoa[0].status = status;

    return response.send(pessoa);

});



app.delete("/pessoas/:id", (request, response) => {

  const { id } = request.params;

  const indexPessoas = pessoas.findIndex( i => i.id == id);

  if(indexPessoas > -1 ){
    pessoas.splice(indexPessoas,1);
    return response.send({menssagem: "pessoa deletada com sucesso !"});
  }else{
    return response.send({menssagem: "pessoan nao encontrada !"});
  }
});


app.listen(8080, () => {
    console.log(" O servidor esta rodando na porta 8080 : ");
});

