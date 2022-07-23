const auth = require('../middleware/auth')
const express = require('express');
const router = express.Router();
const userSignUp = require('../controller/user.controller')


router.post('/user/login', auth, (req, res) => {
    return res.send({success: true, code: 200, message: 'Welcome'})
})

router.post('/user/signup', auth, userSignUp)

module.exports = router