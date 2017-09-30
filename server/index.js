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
      password: '123456',
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

app.post('/app/animalDel', (req, res) => {
    const client = getClient();
    const id = req.body.id_animal;

    client.connect()

    client.query("DELETE FROM animal WHERE id_animal = $1",[id], (err, result) => {
        if (err){
            res.jason(err)
            return next(err)
        } else {
            res.status(200).json(result.rows)
        }
        client.end();
    })
})

app.post('/app/animalUpdate', (req, res) => {
    const client = getClient();
    const id = req.body.id;
    const name = req.body.nome;
    const especie = req.body.especie;
    const breed = req.body.raca;

    client.connect()

    client.query("UPDATE animal SET nome = $1, especie = $2, raca = $3 WHERE id_animal = $4",[name,especie, breed,id], (err, result) => {
        if (err){
            res.jason(err)
            return next(err)
        } else {
            res.status(200).json("deletado")
        }
        client.end();
    })
})


app.listen(3000, function(){
    console.log('Servidor iniciado.');
});
