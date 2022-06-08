const express = require("express");
const { auth: ctrl } = require("../../controllers");
const { auth, ctrlWrapper } = require("../../middlewares");

const router = express.Router();

router.post("/signup", ctrlWrapper(ctrl.register));

router.post("/signin", ctrlWrapper(ctrl.login));

router.get("/google", ctrlWrapper(ctrl.googleAuth));

router.get("/google-redirect", ctrlWrapper(ctrl.googleRedirect));

router.get("/logout", auth, ctrlWrapper(ctrl.logout));

module.exports = router;
