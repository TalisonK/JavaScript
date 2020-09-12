
// required modules
    const express = require('express');
    const router = express.Router();
    const mongoose = require("mongoose");
    const CryptoJS = require("crypto-js");
    require("dotenv/config")

//Mongoose Group Schema
    require("../models/Grupo");
    const Grupo = mongoose.model("grupos");


// Name and Password authentication function
    function authent(nome, senha){

        if(nome === undefined || nome === null){return {status: "&#9746; Campo do nome não pode ficar vazio!"}};

        if(!senha || senha === undefined || senha === null){return {status: "&#9746; Campo da senha não pode ficar vazio!"}};

        if(nome.length < 3 || senha.length < 3){return {status: "&#9746; Campo do nome e senha tem que ter mais de 2 caracteres!"}};

        return null;
    }

//Routes
    // Get route to registrations list
        router.get("/cadastro", (req, res) =>{
            Grupo.find().sort({date:"desc"})
            .then((cadastros) => {res.send(cadastros)})
            .catch((err) => {res.status(500); console.log("&#9746; Erro ao pegar os cadastros: "+err)})
        })


    // group registration Post
        router.post("/cadastro", async (req, res) => {
            (err = authent(req.body.nome, req.body.senha)) => {if(err){res.status(200).send(err)}}
                
            Grupo.find({nome:req.body.nome})
            .then((data) => {
                if(data.length > 0){
                    res.status(200).send({status: "&#9746; Já existe um grupo com esse nome"});
                }
                else{
                    const novo = {
                        nome:req.body.nome,
                        senha: CryptoJS.AES.encrypt(req.body.senha, process.env.KEY_ENCRYPTION),
                        nivel:req.body.nivel
                    }
                    new Grupo(novo).save()
                    .then(()=> res.status(202).send({status:"&#9745; Cadastrado com sucesso"}))
                    .catch((err) => {
                        res.status(200).send({status: `&#9746; erro ao cadastrar`});
                        console.log("Erro ao realizar um cadastro: " + err);
                    })      
                }
            })
        })


    // Login Post route
        router.post("/login", async (req, res) => {
            let err = authent(req.body.nome, req.body.senha);
            if(err){res.status(200).send(err)}
            else{
                Grupo.findOne({nome:req.body.nome})
                .then((data) => {
                    if(data){
                        let senha = CryptoJS.AES.decrypt(data.senha, process.env.KEY_ENCRYPTION)
                        .toString(CryptoJS.enc.Utf8);
                        
                        if(data.nome === req.body.nome && senha === req.body.senha){
                            res.status(202).send({status: "&#9745; Login efetuado com sucesso!"})
                        }
                        else{res.status(200).send({status: "&#9746; Falha no login"})}
                    }
                    else{res.status(200).send({status: "&#9746; Falha no login"})} 
                })
                .catch((err) => {console.log(err)})
            }
        })
//module exportation
module.exports = router;