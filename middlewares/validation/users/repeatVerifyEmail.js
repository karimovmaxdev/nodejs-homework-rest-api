const Joi = require('joi')

const repeatVerifySchema = Joi.object({
  email: Joi.string().required()
})

const repeatVerify = async (req, res, next) => {
    try {
        const { error } = repeatVerifySchema.validate(req.body)
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
    repeatVerify
}