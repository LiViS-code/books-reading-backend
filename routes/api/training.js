const express = require("express");
const { auth, ctrlWrapper, schemasValidation } = require("../../middlewares");
const { training: ctrl } = require("../../controllers");
const { joiTrainingSchema, joiResultTrainingSchema } = require("../../models");

const router = express.Router();

router.get("/", auth, ctrlWrapper(ctrl.getTrainings));

router.post(
  "/",
  auth,
  schemasValidation(joiTrainingSchema),
  ctrlWrapper(ctrl.addTraining)
);

router.post(
  "/:idTraining",
  auth,
  schemasValidation(joiResultTrainingSchema),
  ctrlWrapper(ctrl.addResultByIdTraining)
);

module.exports = router;
