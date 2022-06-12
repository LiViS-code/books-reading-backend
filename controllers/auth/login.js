const { User, joiUserSchema } = require("../../models/");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { SECRET_KEY } = process.env;
const { validation } = require("../../middlewares");

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const validationResult = joiUserSchema.validate(req.body);

    validation(validationResult, res);

    const user = await User.findOne({ email });

    let passCompare = "";

    if (user) {
      passCompare = bcrypt.compareSync(password, user.password);
    }

    if (!user || !passCompare) {
      return res.status(401).json({
        message: "Email or password is wrong",
      });
    }
    const payload = {
      id: user._id,
    };

    const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "1h" });
    await User.findByIdAndUpdate(user._id, { token });
    res.status(200).json({
      user: {
        email,
        token,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = login;
