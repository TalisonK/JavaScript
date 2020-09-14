//Required Modules
const express = require("express");
const router = express.Router();

//Required methods
const controller = require("../../Controllers/menu.controller");
const authMiddleware = require("../../middlewares/auth.middlewares");

router.use(authMiddleware);

router.get("/auth", controller.teste);


module.exports = router;