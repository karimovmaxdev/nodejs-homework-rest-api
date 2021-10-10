const Joi = require('joi')

const signUpSchema = Joi.object({
  email: Joi.string().required(),
  password: Joi.string().required(),
  subscriptions: Joi.string()
})

const signUp = async (req, res, next) => {
    try {
        console.log('validation is work')
        const { error } = signUpSchema.validate(req.body)
        if (error) {
            res.status(400).json({ message: "missing required fields" })
            return    
        }
        next()
        
    } catch (error) {
        next(error)
    }
}

module.exports = {
    signUp
}