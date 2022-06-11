
const express = require('express');
const { auth, ctrlWrapper } = require("../../middlewares/");
const { training: ctrl } = require('../../controllers');

const router = express.Router();

router.post('/', auth, ctrlWrapper(ctrl.addTraining));

router.get('/', auth, ctrlWrapper(ctrl.getTrainings));


module.exports = router;