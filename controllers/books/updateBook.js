const { Book } = require("../../models");
const { createError } = require("../../helpers");

const updateBook = async (req, res) => {
  const { bookId } = req.params;
  const { _id: owner } = req.user;
  const book = await Book.findOneAndUpdate({ _id: bookId, owner }, req.body, {
    new: true,
  });
  if (!book) {
    throw createError(404, `book with id=${bookId} not found`);
  }
  res.status(200).json({
    status: "success",
    code: 200,
    data: {
      book,
    },
  });
};

module.exports = updateBook;
