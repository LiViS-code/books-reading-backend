const { Training, Book } = require("../../models");

const addTraining = async (req, res) => {
  const { _id } = req.user;
  const booksTraining = await Book.find({ owner: _id, wish: "Reading now" });

  const training = await Training.create({
    ...req.body,
    owner: _id,
    books: booksTraining,
  });
  res.status(201).json({ status: 201, message: "success", data: training });
};

module.exports = addTraining;
