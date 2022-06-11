const { User, joiUserSchema } = require("./user");
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
  joiUserSchema,
  Book,
  bookSchema,
  joiBookSchema,
  joiFavoriteBookSchema,
  joiWishBookSchema,
  joiRatingBookSchema,
};
