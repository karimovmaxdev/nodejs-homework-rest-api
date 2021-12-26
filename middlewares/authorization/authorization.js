const jwt = require('jsonwebtoken')
const { Unauthorized } = require('http-errors')
const { user } = require('../../model/users/schema/usersSchema')

const authorization = async (req, res, next) => {
    try {
        const authHeader = req.get('authorization')
        if (!authHeader) {
            throw new Unauthorized('not have a headers')
        }

        const [tokenType, token] = authHeader.split(' ')
        const decodeUser = jwt.decode(token, process.env.JWT_SECRET)
        if (!decodeUser) {
            throw new Unauthorized('not auhtorized')
        }

        const currentUser = await user.findById(decodeUser.id)

        if (currentUser.token !== token) {
            throw new Unauthorized('not auhtorized')
        }

        req.user = decodeUser
        req.token = token
        next()

    } catch (error) {
        next(error)
    }

}

module.exports = {
    authorization
}