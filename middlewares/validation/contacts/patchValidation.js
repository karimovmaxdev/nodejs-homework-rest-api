const Joi = require('joi')

const patchScheme = Joi.object({
  email: Joi.string(),
  name: Joi.string(),
  phone: Joi.string().pattern(new RegExp('^[0-9]{0,11}$'))  
})

const contactStatusSchema = Joi.object({
  favorite: Joi.boolean().required()
})

const patchValidation = async (req, res, next) => {
    try {
        const { name, email, phone } = req.body
        const { error } = patchScheme.validate(req.body)

        if (!name && !email && !phone) {
            res.status(400).json({ message: "missing all fields" })
            return
        }

        if (error) {
            res.status(400).json({ message: "wrong types of values" })
            return    
        }
        
        next()

    } catch (error) {
        next(error)
    }
}

const patchContactStatusValidation = async (req, res, next) => {
    try {
        const { error } = contactStatusSchema.validate(req.body)

        if (error) {
            res.status(400).json({ message: "error of fields names or values" })
            return    
        }
        
        next()

    } catch (error) {
        next(error)
    }
}



module.exports = {
    patchValidation,
    patchContactStatusValidation
}