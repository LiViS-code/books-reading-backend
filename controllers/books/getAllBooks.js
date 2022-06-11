const { Book } = require("../../models");
const { createError } = require("../../helpers");

const getAllBooks = async (req, res) => {
  const { _id } = req.user;
  const { page = 1, limit = 20, favorite = null } = req.query;
  console.log("req.query", req.query);
  const skip = (page - 1) * limit;
  let books = null;
  switch (favorite) {
    case "true":
    case "false":
      books = await Book.find({ owner: _id, favorite }, "", {
        skip,
        limit: Number(limit),
      }).populate("owner", "_id");
      break;
    case null: // will return all books
      books = await Book.find({ owner: _id }, "", {
        skip,
        limit: Number(limit),
      }).populate("owner", "_id");
      break;
    default:
      throw createError(
        400,
        "favorite parameter is invalid (can be boolean true or false)"
      );
  }
  if (!books) {
    throw createError(404, "books not found");
  }
  res.json({
    status: "success",
    code: 200,
    data: {
      books,
    },
  });
};

module.exports = getAllBooks;
