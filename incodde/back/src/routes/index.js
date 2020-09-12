const express = require("express");
const router = express.Router();

// requires
    const login = require("./api/login.routes");
    const menu = require("./api/menu.routes");

//routes
    router.use("/", login);
    router.use("/home", menu);

module.exports = router;