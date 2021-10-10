const { logout } = require('../../model/users')


const signOut = async (req, res, next) => {
    try {
        await logout(req.user)
        res.status(200).json({message: 'logout success'})

    } catch (error) {
        next(error)
    }
}


module.exports = {
    signOut
}