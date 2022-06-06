const express = require("express");

const { getCurrent } = require("../../controllers/");
const { auth } = require("../../middlewares/");

const router = express.Router();

router.get("/current", auth, getCurrent);

module.exports = router;
