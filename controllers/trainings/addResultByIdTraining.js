const { Training } = require("../../models");
const { createError } = require("../../helpers");

const addResultByIdTraining = async (req, res, next) => {
  const { idTraining } = req.params;
  const { _id: owner } = req.user;
  const [{ date, page }] = req.body.result;
  const training = await Training.findOne({
    _id: idTraining,
    owner,
  });
  if (!training) {
    throw createError(404, `training with id=${idTraining} not found`);
  }
  const result = training.result;
  result.push({ date, page });
  const trainingUpdate = await Training.findOneAndUpdate(
    {
      _id: idTraining,
      owner,
    },
    { result },
    { new: true }
  );
  res
    .status(201)
    .json({ status: 201, message: "success", data: trainingUpdate });
};

module.exports = addResultByIdTraining;
