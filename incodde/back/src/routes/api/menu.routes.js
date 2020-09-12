const express = require("express");
const router = express.Router();

const emailController = require('../../Controllers/email.controller');

router.post("/emailvalidate", emailController.createToken );


module.exports = router;