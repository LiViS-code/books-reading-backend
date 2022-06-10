const { Book } = require("../../models");
const { createError } = require("../../helpers");

const updateStatusBook = async (req, res) => {
  const { bookId, status } = req.params;
  const { _id: owner } = req.user;

  let book = null;
  let favorite = null;
  let rating = null;
  let wish = null;

  switch (status) {
    case "favorite":
      favorite = req.body.favorite;
      book = await Book.findOneAndUpdate(
        { _id: bookId, owner },
        { favorite },
        { new: true }
      );
      break;
    case "rating":
      rating = req.body.rating;
      book = await Book.findOneAndUpdate(
        { _id: bookId, owner },
        { rating },
        { new: true }
      );
      break;
    case "wish":
      wish = req.body.wish;
      book = await Book.findOneAndUpdate(
        { _id: bookId, owner },
        { wish },
        { new: true }
      );
      break;
    default:
      throw createError(
        400,
        "fparameter is invalid (can be favorite/rating/wish)"
      );
  }

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
