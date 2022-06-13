const { User, joiUserSchema } = require("./user");
const {
  Book,
  bookSchema,
  joiBookSchema,
  joiFavoriteBookSchema,
  joiWishBookSchema,
  joiRatingBookSchema,
} = require("./book");
const {
  Training,
  joiTrainingSchema,
  joiResultTrainingSchema,
} = require("./training");

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
  joiResultTrainingSchema,
};
