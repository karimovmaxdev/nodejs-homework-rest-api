const { user } = require('./schema/usersSchema')

const getUserById = async (currentUser) => {
    const foundUser = await user.findById(currentUser.id)
    return foundUser
}


module.exports = {
    getUserById
}