const User = require('../models/user.model')


const auth = async (req, res, next) => {
    try {
        const user = await User.findOne({ email: req.body.email, password: req.body.password })

        req.user = user
        
        if (req.url === '/user/signup'){
            return next()
         }
        if (!user)
            throw new Error()

        return next()
    } catch (e) {
       return res.status(401).send({ error: 'Please Authenticate' })
    }


}

module.exports = auth