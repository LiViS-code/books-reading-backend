const { User, joiSchema } = require('../../models/user')
const bcrypt = require('bcryptjs');
const { validation } = require('../../middlewares/');
const { v4 } = require('uuid');
const { sendMail } = require('../../helpers/');


const register = async(req, res, next) => {
  try {
    const {email, name, password} = req.body;
    const validationResult = joiSchema.validate(req.body);
    
    const hashPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));

    validation(validationResult, res)
  
    const user = await User.findOne({email})
    if(user) {
      res.status(409).json({
        message: "Email in use"
      })
    }
    const verificationToken = v4()

    await User.create({email, name, password: hashPassword, verificationToken})
  
    const mail = {
      to: email,
      subject: 'Confirm email',
      html: `<a target='_blanc' href='http:localhost:3001/api/users/verify/${verificationToken}'>Confirm your email</a>`
    }
    await sendMail(mail)

    res.status(201).json({
      user: {
        email,
        name,
        verificationToken
      }
    })
    } catch (error) {
      next(error)
    }
}

module.exports = register;