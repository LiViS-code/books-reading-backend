const queryString = require("query-string");
const axios = require("axios");
const jwt = require('jsonwebtoken');
const { User } = require('../../models/user');
const bcrypt = require('bcryptjs');

const { SECRET_KEY } = process.env;

const googleRedirect = async (req, res) => {
  const fullUrl = `${req.protocol}://${req.get("host")}${req.originalUrl}`;
  const urlObj = new URL(fullUrl);
  const urlParams = queryString.parse(urlObj.search);
  const code = urlParams.code;
  const tokenData = await axios({
    url: `https://oauth2.googleapis.com/token`,
    method: "post",
    data: {
      client_id: process.env.GOOGLE_CLIENT_ID,
      client_secret: process.env.GOOGLE_CLIENT_SECRET,
      redirect_uri: `${process.env.BASE_URL}/auth/google-redirect`,
      grant_type: "authorization_code",
      code,
    },
  });
  const userData = await axios({
    url: "https://www.googleapis.com/oauth2/v2/userinfo",
    method: "get",
    headers: {
      Authorization: `Bearer ${tokenData.data.access_token}`,
    },
  });
  
  const { name, email, id } = userData.data;

  const user = await User.findOne({ email });

  if (!user) {
    const hashPassword = bcrypt.hashSync(id, bcrypt.genSaltSync(10));
    const result = await User.create({
      name,
      email,
      password: hashPassword,
    });

    return res.redirect(
      `${process.env.FRONTEND_URL}?name=${result.name}&email=${result.email}`,
    );
  }

  const token = jwt.sign(user._id, SECRET_KEY, { expiresIn: '72h' });

  await User.findByIdAndUpdate(user._id, { token });
  
  return res.redirect(
    `${process.env.FRONTEND_URL}?token=${token}&name=${user.name}&email=${user.email}`,
  );

};

module.exports = googleRedirect;