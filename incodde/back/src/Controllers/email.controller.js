const User = require("../Database/models/User");
const { createUser, hasUser, fetchUser, validateUser } = require("../services/user.services");
const mailGen = require("../services/emailhandler.services");

const tokenStorage = {};

function emailVerify(email){
    const data = fetchUser(email);
    if ( data.confirmedEmail ) return true;
    return false;
}

function createToken(props){
    tokenStorage[props.email] = Math.floor(100000 + Math.random() * 900000);
    mailGen(props.email, tokenStorage[props.email], props.message);
}

function verify(email, token){
    console.log(tokenStorage[email]);
    if(tokenStorage[email] === token){
        validateUser(email);
        delete tokenStorage[email];
        return true;
    }
    return false;
}

function getToken(email) {
    return tokenStorage[email];
    
}

async function check(email){
    return await User.findOne({email:email}).confirmedEmail;
}

module.exports = { emailVerify, createToken, verify, getToken, check, mailGen };