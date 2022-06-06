const express = require("express");
const { register, login, logout, googleAuth, googleRedirect } = require("../../controllers");
const { auth } = require("../../middlewares");

const router = express.Router();

router.post("/signup", register);

router.post("/signin", login);

router.get("/google", googleAuth);

router.get("/google-redirect", googleRedirect);

router.get("/logout", auth, logout);

module.exports = router;
