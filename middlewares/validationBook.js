const {
  joiFavoriteBookSchema,
  joiWishBookSchema,
  joiRatingBookSchema,
} = require("../models");

const shemaSelect = (status) => {
  switch (status) {
    case "wish":
      return joiWishBookSchema;
    case "rating":
      return joiRatingBookSchema;
    case "favorite":
      return joiFavoriteBookSchema;
    default:
      throw createError(400, "status can be one of: favorite/rating/wish");
  }
};

const { createError } = require("../helpers");

const validationBook = (schema = null, message = null) => {
  return (req, _, next) => {
    let err = null;
    if (schema === null) {
      const { status } = req.params;
      schema = shemaSelect(status);
      const { error } = schema.validate(req.body);
      err = error;
      schema = null;
    } else {
      const { error } = schema.validate(req.body);
      err = error;
    }

    if (err) {
      if (message) {
        next(createError(400, message));
      }
      const { message: errMsg } = err;
      next(createError(400, errMsg));
    }

    next();
  };
};

module.exports = validationBook;
