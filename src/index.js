const express = require('express');

const app = express();

function listenServeur(){
    console.log("start serveur")
    return "Bonjour";
}

app.get('/test', (req, res) => {
    res.send('Hello, World!');
  });

app.get('/caca', (req,res) => {
    res.json({
        name:"Gabo"
    })
})

app.listen(3000,listenServeur);
