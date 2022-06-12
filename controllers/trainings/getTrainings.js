const { Training } = require('../../models/training');

const getTrainings = async (req, res) => {
  const userId = req.user._id;

  const training = await Training.find({ owner: userId });

  if(!training) {
    return res.status(400).json({
      message: "The user has no training yet ",
    });
  }
  
  res.status(200).json({ training });
};

module.exports = getTrainings;