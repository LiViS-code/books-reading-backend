const {
  joiFavoriteBookSchema,
  joiWishBookSchema,
  joiRatingBookSchema,
} = require("../models");

const shemaSelect = async (status) => {
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
  return async (req, _, next) => {
    if (schema === null) {
      console.log("NULL");
      const { status } = req.params;
      schema = await shemaSelect(status);
    }

    const { error } = schema.validate(req.body);

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
