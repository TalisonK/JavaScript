import metting from "../services/metting.services";

const addMetting = (req, res) => {
    try{
        if( metting.hasMetting(req.name) ){
            throw "O metting já está cadastrado!";
        }
        else{
            metting.createMetting(req.body);
            res.status(202).send({status: "Metting cadastado com sucesso!", success: 1});
        }
    }
    catch(err){
        res.status(400).send({status: (err)?err:"Valores inválidos!", success: 0})
    }
}