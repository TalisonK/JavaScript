const express = require("express");
const router = express.Router();

const userController = require("../../Controllers/user.controller");

router.post("/login",  userController.login);
router.post("/register",  userController.register);
router.post("/validation",  userController.validateUser);
router.get("/confirmed",  userController.checkEmail);
//router.post("/login",  userController.register);
//router.post("/login",  userController.register);

module.exports = router;