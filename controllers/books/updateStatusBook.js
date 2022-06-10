const { Book } = require("../../models");
const { createError } = require("../../helpers");

const updateStatusBook = async (req, res) => {
  const { bookId } = req.params;
  const { favorite } = req.body;
  const { _id: owner } = req.user;
  const book = await Book.findOneAndUpdate(
    { _id: bookId, owner },
    { favorite },
    { new: true }
  );
  if (!book) {
    throw createError(404, `book with id=${bookId} not found`);
  }
  res.json({
    status: "success",
    code: 200,
    data: {
      book,
    },
  });
};

module.exports = updateStatusBook;
