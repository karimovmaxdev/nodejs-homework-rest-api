const { authentication } = require('../../model/users')

const signIn = async (req, res, next) => {
    try {
        const user = await authentication(req.body)

        if (!user) {
            res.status(401).json({ message: "Email or password is wrong" })
            return
        }
        res.status(200).json(user)

    } catch (error) {
        next(error)
    }
}


module.exports = {
    signIn
}