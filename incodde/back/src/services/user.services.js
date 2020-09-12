const User = require("../Database/models/User");

const mongoose = require("./database.services").mongoose;

// Mongoose Group Schema
require("../Database/models/User");
const Users = mongoose.model("User");

const createUser = (email, password) => {
    Users.create({
        email,
        password
    })
}

const fetchUser = async (email) => {
    const data = await User.findOne({email:email});
    return data;
}

const hasUser = async (email) => {
    console.log("entrou no has")
    const data = await User.find({email:email})
    console.log(data);
    if(data.length > 0) return true;
    return false;
}

const validateUser = async (email) => {
    const data = await User.findOne({email:email});
    data.confirmedEmail = true;
    await User.replaceOne({email:email}, data);
}

module.exports = { createUser, hasUser, fetchUser, validateUser};