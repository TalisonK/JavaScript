const mongoose = require("mongoose");

const mettingSchema = new mongoose.Schema({

    name:{
        type:String
    },

    descricao:{
        type:String
    },

    sala:{
        type:String
    },

    horario:{
        type:String
    },

    criador:{
        type:String,
    },

    participantes:{
        type:Array,
        default:false
    },

    confirmedEmail:{
        type:Boolean,
        default:false
    },
    
    createdAt:{
        type:Date,
        default:Date.now(),
    }
})

const Mettings = mongoose.model("Metting", UserSchema);

module.exports = Mettings;
