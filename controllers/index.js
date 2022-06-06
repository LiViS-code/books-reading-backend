const login = require("./auth/login");
const logout = require("./auth/logout");
const register = require("./auth/register");
const googleAuth = require("./auth/googleAuth");
const googleRedirect = require("./auth/googleRedirect");
const getCurrent = require("./users/getCurrent");
const verifyEmail = require("./users/verifyEmail");

module.exports = {
  login,
  logout,
  register,
  googleAuth,
  googleRedirect,
  getCurrent,
  verifyEmail
};
