const mongoose = require('mongoose');

const Questao = new mongoose.Schema({

    pergunta:{
	type:Array,
	required:true,
    },

    alternativas:{
        type:Array,
        required:true,
    },

    resposta:{
        type:String,
        required:true
    },

    nivel:{
        type:String,
        required:true,
    },

    tipo:{
        type:String,
        default:"radio"
    }
});

mongoose.model("questoes", Questao);
