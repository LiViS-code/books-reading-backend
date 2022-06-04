const express = require('express');
const { register } = require('../../controllers/auth/register')

const router = express.Router();

router.post('/signup', register)

module.exports = router;