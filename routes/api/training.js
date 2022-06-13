const express = require("express");
const { auth, ctrlWrapper, trainingValidation } = require("../../middlewares");
const { training: ctrl } = require("../../controllers");
const { joiTrainingSchema, joiResultTrainingSchema } = require("../../models");

const router = express.Router();

router.get("/", auth, ctrlWrapper(ctrl.getTrainings));

router.post(
  "/",
  auth,
  trainingValidation(joiTrainingSchema),
  ctrlWrapper(ctrl.addTraining)
);

router.post(
  "/:idTraining",
  auth,
  trainingValidation(joiResultTrainingSchema),
  ctrlWrapper(ctrl.addResultByIdTraining)
);

module.exports = router;
