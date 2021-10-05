const Joi = require('joi')

const postScheme = Joi.object({
  email: Joi.string().required(),
  name: Joi.string().required(),
  phone: Joi.string().required().pattern(new RegExp('^[0-9]{0,11}$')),
  favorite: Joi.boolean()
})

const postValidation = async (req, res, next) => {
    try {
        console.log(req.body)
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