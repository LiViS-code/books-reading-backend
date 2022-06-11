const { Training } = require('../../models/training');

const getTrainings = async (req, res) => {
  const userId = req.user._id;

  const trainings = await Training.find({ userId });
  
  res.status(200).json({ trainings });
};

module.exports = getTrainings;