const { User, joiSchema } = require("./user");
const {
  Book,
  bookSchema,
  joiBookSchema,
  joiFavoriteBookSchema,
  joiWishBookSchema,
  joiRatingBookSchema,
} = require("./book");

module.exports = {
  User,
  joiSchema,
  Book,
  bookSchema,
  joiBookSchema,
  joiFavoriteBookSchema,
  joiWishBookSchema,
  joiRatingBookSchema,
};
