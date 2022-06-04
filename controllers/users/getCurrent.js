const getCurrent = async (req, res, next) => {
  try {
    const {email, name} = req.user;

    res.status(200).json({
      email,
      name
    })
  } catch (error) {
      next(error)
    }
}

module.exports = {
  getCurrent
}