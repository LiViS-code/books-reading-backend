const { User, joiSchema } = require("./user");
const { Book, bookSchema, joiStatusBookSchema } = require("./book");

module.exports = {
  User,
  joiSchema,
  Book,
  bookSchema,
  joiStatusBookSchema,
};
