const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({

    email:{
        type:String,
        required:true,
    },

    password:{
        type:String,
        required:true,
    },

    name:{
        type:String
    },

    cpf:{
        type:Number
    },

    dataDeNascimento:{
        type:Date
    },

    endereço:{
        type:String
    },

    biografia:{
        type:String,
    },

    admStatus:{
        type:Boolean,
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

const User = mongoose.model("User", UserSchema);

module.exports = User;
