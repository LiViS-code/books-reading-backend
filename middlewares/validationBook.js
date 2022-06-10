const { createError } = require("../helpers");

const validationBook = (schema, message = null) => {
  return (req, _, next) => {
    const { error } = schema.validate(req.body);
    console.log("error: ", error);
    if (error) {
      if (message) {
        next(createError(400, message));
      }
      const { message: errMsg } = error;
      next(createError(400, errMsg));
    }
    next();
  };
};

module.exports = validationBook;
