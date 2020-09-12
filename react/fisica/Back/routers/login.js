const express = require('express');
const router = express.Router()
const mongoose = require('mongoose');

grupo = "fudidos"
senha = '123'

function autentica(data){
    if(data.grupo === grupo && data.senha === senha){
        return "sucesso";
    }else{
        return "Erro na autenticação. Nome ou senha errados"
    }
}


router.post("/login", (req, res) => {
    console.log("I got a login!")
    console.log(req.body)
    const dados = autentica(req.body);
    res.status(200).send({
        status: dados,
    })
})

module.exports = router