
// required modules
    const express = require('express');
    const router = express.Router();
    const mongoose = require('mongoose');


// Mongoose Question Schema
    require('../models/Questao');
    const Questao = mongoose.model("questoes");


//Routes

    
    router.post("/request", (req, res) =>{
        res.send(req.body.nome)
    })

    router.post("/add", (req, res) => {
        const nova = {
            texto:req.body.texto,
            img:req.body.img,
            alternativas:req.body.alternativas,
            resposta:req.body.resposta,
            tipo:req.body.tipo
        }

        new Questao(nova).save()
        .then(() =>{
            res.status(201).send({status: "questão adicionada"})
        })
        .catch((err) => {res.status(500).send({status: "Erro ao adicionar questao"})})
    })









//module exportation
    module.exports = router;