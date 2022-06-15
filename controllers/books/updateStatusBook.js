const { Book } = require("../../models");
const { createError } = require("../../helpers");

const updateStatusBook = async (req, res) => {
  const { bookId } = req.params;
  const { _id: owner } = req.user;
  const parameterToChange = req.url.split("/").reverse()[0];

  let book = null;
  let favorite = null;
  let rating = null;
  let resume = null;
  let wish = null;

  switch (parameterToChange) {
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
      resume = req.body.resume;
      book = await Book.findOneAndUpdate(
        { _id: bookId, owner },
        { rating, resume },
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
        "parameter is invalid (can be favorite/rating/wish)"
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
