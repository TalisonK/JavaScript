const mongoose = require('mongoose');


const Grupo = new mongoose.Schema({

    nome:{
        type:String,
        required:true
    },

    senha:{
        type:String,
        required:true
    },

    nivel:{
        type:String,
        required:true
    },

    respondidas:{
        type:Array,
    },

    date:{
        type:Date,
        default:Date.now()
    }
})
mongoose.model("grupos", Grupo)