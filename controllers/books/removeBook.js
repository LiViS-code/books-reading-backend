const { Book } = require("../../models");
const { createError } = require("../../helpers");

const removeBook = async (req, res) => {
  const { bookId } = req.params;
  const { _id: owner } = req.user;
  const book = await Book.findOneAndRemove({ _id: bookId, owner });
  if (!book) {
    throw createError(404, `book with id=${bookId} not found`);
  }
  res.status(200).json({ status: 200, message: "success", data: book });
};

module.exports = removeBook;
