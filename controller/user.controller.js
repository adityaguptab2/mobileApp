const User = require('../models/user.model')

const userSignUp = async (req, res) => {
    try {
        if (req.user) {
            return res.send({ success: true, code: 200, message: 'User Already Exist' })
        }
        const userBody = req.body
        const newUser = new User({
            name: userBody.name,
            email: userBody.email,
            password: userBody.password,
            department: userBody.department
        })
         await newUser.save()

        return res.send({ success: true, code: 200, message: 'User Created' })
    } catch (e) {
        console.log('CATCH BLOCK usersignUp error', e)
        return res.send({ success: false, code: 500, message: 'Internal server error' })
    }
}

module.exports = userSignUp 