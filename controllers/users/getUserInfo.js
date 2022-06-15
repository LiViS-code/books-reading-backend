const { User } = require("../../models");
const { createError } = require("../../helpers");

const getUserInfo = async (req, res, next) => {
  const { _id } = req.user;
  const userInfo = await User.findOne({ _id });
  if (!userInfo) {
    throw createError(404, `User width id=${_id} not found`);
  }
  res.status(200).json({ status: 200, message: "success", data: userInfo });
};

module.exports = getUserInfo;
