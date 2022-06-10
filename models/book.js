const { Schema, model } = require("mongoose");
const Joi = require("joi");

const bookSchema = Schema(
  {
    title: {
      type: String,
      required: [true, "enter the title of the book"],
      minlength: 3,
    },
    author: {
      type: String,
      required: [true, "enter author name"],
      minlength: 3,
    },
    year: {
      type: Number,
      length: 4,
      required: [true, "enter publication date (year)"],
    },
    pages: {
      type: Number,
      required: [true, "enter amount of pages"],
      min: 1,
    },
    status: {
      type: String,
      enum: ["Already read", "Reading now", "Going to read"],
      default: "Going to read",
    },
    rating: {
      type: Number,
      enum: ["0", "1", "2", "3", "4", "5"],
      default: "0",
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const joiBookSchema = Joi.object({
  title: Joi.string().required().min(3).max(50),
  author: Joi.string().required().min(3).max(35),
  year: Joi.date().required(),
  pages: Joi.number().required().min(1),
  status: Joi.string(),
  rating: Joi.number(),
  favorite: Joi.boolean(),
});

const joiStatusBookSchema = Joi.object({
  favorite: Joi.boolean().required(),
});

const Book = model("book", bookSchema);

module.exports = {
  Book,
  bookSchema,
  joiBookSchema,
  joiStatusBookSchema,
};
