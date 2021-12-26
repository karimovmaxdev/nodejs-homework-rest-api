const { verify, repeatVerify } = require('../../model/users')

const confirmEmail = async (req, res, next) => {
    try {
        const user = await verify(req.params)

        if (!user) {
            res.status(401).json({ message: 'User not found' })
            return
        }

        res.status(200).json({ message: 'Verification successful' })

    } catch (error) {
        next(error)
    }
}

const repeatConfirmEmail = async (req, res, next) => {
    try {
        const responce = await repeatVerify(req.body)
        res.status(200).json(responce)
        
    } catch (error) {
        next(error)
    }
}


module.exports = {
    confirmEmail,
    repeatConfirmEmail
}