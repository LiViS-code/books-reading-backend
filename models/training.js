const { Schema, model } = require("mongoose");
const Joi = require("joi");

const trainingSchema = Schema(
  {
    start: {
      type: Date,
      required: [true, "Start of training is required"],
    },
    end: {
      type: Date,
      required: [true, "End of training is required"],
    },
    result: { type: Array, required: [false, "Daily Read Result (Date/Pages)"] },
    books: {
      type: [Schema.Types.ObjectId],
      ref: "book",
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
      required: true,
    },
  },
  { versionKey: false, timestamps: true }
);

const joiTrainingSchema = Joi.object({
  start: Joi.date().required(),
  end: Joi.date().required(),
});

const joiResultTrainingSchema = Joi.object({
  result: Joi.array().required(),
})

const Training = model("training", trainingSchema);

module.exports = {
  Training,
  joiTrainingSchema,
  joiResultTrainingSchema,
};
