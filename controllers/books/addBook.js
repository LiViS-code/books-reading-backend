const { Book } = require("../../models");

const addBook = async (req, res) => {
  const { _id } = req.user;
  const book = await Book.create({ ...req.body, owner: _id });
  res.status(201).json({ status: 201, message: "success", data: book });
};

module.exports = addBook;
