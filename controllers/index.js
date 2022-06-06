const login = require("./auth/login");
const logout = require("./auth/logout");
const register = require("./auth/register");
const getCurrent = require("./users/getCurrent");

module.exports = {
  login,
  logout,
  register,
  getCurrent,
};
