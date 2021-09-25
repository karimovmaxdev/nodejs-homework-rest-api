const Joi = require('joi')

const patchScheme = Joi.object({
  email: Joi.string(),
  name: Joi.string(),
  phone: Joi.number()
})

const patchValidation = async (req, res, next) => {
    try {
        const { name, email, phone } = req.body
        const { error } = patchScheme.validate(req.body)
        if (error) {
            res.status(400).json({ message: "missing required name field" })
            return    
        }

        if (!name && !email && !phone) {
            res.status(400).json({ message: "missing all fields" })
            return
        }
        
        next()

    } catch (error) {
        next(error)
    }
}

module.exports = {
    patchValidation
}