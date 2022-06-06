const express = require("express");
const { register, login, logout } = require("../../controllers");
const { auth } = require("../../middlewares");

const router = express.Router();

router.post("/signup", register);

router.post("/signin", login);

router.get("/logout", auth, logout);

module.exports = router;
