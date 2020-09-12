//Required Standart Modules
const validator = require("validator");
const Cryptojs = require("crypto-js");
require("dotenv/config");

const { createUser, hasUser, fetchUser } = require("../services/user.services");
const { createToken, verify, getToken, check } = require("./email.controller");
const { text } = require("body-parser");
const mailer = require("../services/emailhandler.services");

//implemented methods
const authenticate = (props) => {
    return validator.isEmail(props.email) && validator.isAlphanumeric(props.password) && props.password.leght >= 6;
}

//User Login function
const login = (req, res) => {
    try{
        let err = authenticate(req.body);
        if(err) {throw "Erro na autenticação";}

        fetchUser(req.body.email)
        .then((data) => {
            if((data)) {
                let password = Cryptojs.AES.decrypt(data.password, process.env.KEY_ENCRYPTION)
                .toString(Cryptojs.enc.Utf8);
                if(password.toString() === req.body.password){
                    res.status(202).send({status: "Login efetuado com sucesso!", sucess: 1});
                }
                else{res.status(200).send({status: "Senha incorreta!", sucess: 0})};
                return null;
            }
            else{
                res.status(400).send({status: "Email não cadastrado!", sucess: 0});
                return null;
            };
        })
        .catch((err) => { res.status(500).send({status: "Email não cadastrado!", sucess: 0})});
    }
    catch(err) {
        res.status(400).send(err);
    }
};

// Registers a new user
const register = async (req, res) => {
    try{
        if(authenticate(req.body)) throw "Erro de autenticação";
        const cond = await hasUser(req.body.email);
        if( cond ) {
            res.status(200).send({ status: "Usuário ja cadastrado!"}) ;
        }
        else{
            const cripto = Cryptojs.AES.encrypt(req.body.password, process.env.KEY_ENCRYPTION);
            createUser(req.body.email, cripto);
            //res.status(200).send({ status: "cadastrado com sucesso!" });
            
            createToken({email:req.body.email, message:"Email de Confirmação"});

            return res.status(200).send({status:"Cadastrado com sucesso!"})
        }
    }
    catch(err) {
        console.log("erro" +err);
        return res.status(400).send({ error : err });
    }
};

const validateUser = (req, res) => {
    try{
        if(verify(req.body.email, req.body.token)){
            res.status(202).send({status: "Email confirmado com sucesso! :)", validation: 1});
        }
        else{
            res.status(400).send({ status:"Código inválido!", validation: 0 })
        }
    }
    catch(err){
        console.log(err)
        res.status(400).send({ status:"Erro ao verificar o email.", validation:0 })
    }

}

const checkEmail = (req, res) => {
    if(check(req.body.email)){
        res.status(200).send({ status: "confirmado" });
    }
    else{
        res.status(200).send({ status: "nao confirmado" });
    }

}

module.exports = { login, register, validateUser, checkEmail }