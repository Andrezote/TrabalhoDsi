"use strict";

const express = require('express');
const bodyParser = require('body-parser');
const pg = require('pg');
const cors = require('cors');

function getClient() {
    return new pg.Client({
      host: 'localhost',
      port: 5432,
      database: 'cadanimal',
      user:'postgres',
      password: 'admin',
    });
}

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(cors());

app.use(express.static('.'));

app.post('/app/animal', (req, res) => {
    const name = req.body.nome;
    const especie = req.body.especie;
    const breed = req.body.raca;
    const client = getClient();
    client.connect();
    client.query("INSERT INTO animal(nome, especie, raca) VALUES ($1, $2, $3)", [name, especie, breed], (err, item) => {
        if(err){
            res.json(err)
            return next(err)
        } else {
            res.status(200).json("adicionado")
        }
        client.end();
    });
});

app.get('/app/animal', (req, res) => {
    const client = getClient();

    client.connect()

    client.query("SELECT * FROM animal", (err, result) => {

        if (err){
            res.jason(err)
            return next(err)
        } else {
            res.status(200).json(result.rows)
        }

        client.end();
    })
})

app.listen(3000, function(){
    console.log('Servidor iniciado.');
});
