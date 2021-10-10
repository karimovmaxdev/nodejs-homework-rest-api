const { getUserById } = require('../../model/users')


const getUser = async (req, res, next) => {
    try {
        const {email, subscription} = await getUserById(req.user)
        res.status(200).json({ email, subscription })
        
    } catch (error) {
        next(error)
    }
}


module.exports = {
    getUser
}