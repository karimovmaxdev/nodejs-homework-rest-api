const Joi = require('joi')

const postScheme = Joi.object({
  email: Joi.string().required(),
  name: Joi.string().required(),
  phone: Joi.number().required()
})

const postValidation = async (req, res, next) => {
    try {
        const { error } = postScheme.validate(req.body)
        if (error) {
            res.status(400).json({ message: "missing required name field" })
            return    
        }

        next()
    } catch (error) {
        next(error)
    }
}

module.exports = {
    postValidation
}