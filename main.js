const express = require('express')
const app = express()

app.get('/', function(req, res){
    res.send("Essa é a rota !")
})

app.get("/sobre", function(req, res){
    res.send("Essa é a rota sobre!")
})

app.get("/contato", function(req, res){
    res.send("Essa é a rota de contato!")
})

app.listen(3050, function(){
    console.log("minha aplicação esta no ar!")
});
