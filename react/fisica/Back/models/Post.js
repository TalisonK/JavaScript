const mongoose = require('mongoose');


const PostSchema = mongoose.Schema({

    texto: {
        type:String,
        require:true
    },
    img: {
        type:String,
        require:true
    },
    alternativas: {
        type:Array,
        require:true
    }, 
    resposta: {
        type:String,
        require:true
    }
})

module.exports = mongoose.model('Questao', PostSchema);