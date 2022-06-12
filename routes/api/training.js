const express = require("express");
const {
  auth,
  ctrlWrapper,
  // trainingValidation
} = require("../../middlewares");
const { training: ctrl } = require("../../controllers");
// const { joiTrainingSchema } = require("../../models");

const router = express.Router();

router.post(
  "/",
  auth,
  // trainingValidation(joiTrainingSchema),
  ctrlWrapper(ctrl.addTraining)
);

router.get("/", auth, ctrlWrapper(ctrl.getTrainings));

module.exports = router;
