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
    wish: {
      type: String,
      enum: ["Already read", "Reading now", "Going to read"],
      default: "Going to read",
    },
    rating: {
      type: Number,
      enum: [0, 1, 2, 3, 4, 5],
      default: 0,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    resume: {
      type: String,
      minlength: 10,
      default: "",
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
  title: Joi.string().required().min(3).max(100),
  author: Joi.string().required().min(3).max(35),
  year: Joi.date().required(),
  pages: Joi.number().required().min(1),
  wish: Joi.string(),
  rating: Joi.number(),
  favorite: Joi.boolean(),
});

const joiFavoriteBookSchema = Joi.object({
  favorite: Joi.boolean().required(),
});

const joiWishBookSchema = Joi.object({
  wish: Joi.string()
    .valid("Already read", "Reading now", "Going to read")
    .required(),
});

const joiRatingBookSchema = Joi.object({
  rating: Joi.number().valid(0, 1, 2, 3, 4, 5).required(),
  resume: Joi.string().min(10).required(),
});

const Book = model("book", bookSchema);

module.exports = {
  Book,
  bookSchema,
  joiBookSchema,
  joiFavoriteBookSchema,
  joiWishBookSchema,
  joiRatingBookSchema,
};
