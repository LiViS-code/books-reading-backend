const Joi = require('joi');
const {Schema, model} = require('mongoose');

const userSchema = Schema({
  password: {
    type: String,
    required: [true, 'Password is required'],
  },
  email: {
    type: String,
    required: [true, 'Email is required'],
    unique: true,
  },
  name: {
    type: String,
  },
  token: {
    type: String,
    default: null,
  },
  verify: {
    type: Boolean,
    default: false,
  },
  verificationToken: {
    type: String,
    required: [true, 'Verify token is required'],
  },
}, {versionKey: false, timestamps: true});

const joiSchema = Joi.object({
  email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
  name: Joi.string().min(3).max(30),
  password: Joi.string().min(6).max(30).required(),
})

const User = model('user', userSchema);

module.exports = {
  User,
  joiSchema
};
