const express = require("express");

const { getCurrent, verifyEmail } = require("../../controllers/");
const { auth } = require("../../middlewares/");

const router = express.Router();

router.get("/current", auth, getCurrent);

router.get('/verify/:verificationToken', verifyEmail);

module.exports = router;
