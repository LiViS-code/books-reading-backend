const { User, joiUserSchema } = require("./user");
const {
  Book,
  bookSchema,
  joiBookSchema,
  joiFavoriteBookSchema,
  joiWishBookSchema,
  joiRatingBookSchema,
} = require("./book");
const { Training, joiTrainingSchema } = require("./training");

module.exports = {
  User,
  joiUserSchema,
  Book,
  bookSchema,
  joiBookSchema,
  joiFavoriteBookSchema,
  joiWishBookSchema,
  joiRatingBookSchema,
  Training,
  joiTrainingSchema,
};
