const { user } = require('./schema/usersSchema')

const logout = async (currentUser) => {
    await user.findByIdAndUpdate({_id: currentUser.id }, { $set: {token: null} })
    const foundUser = await user.findById(currentUser.id)
}


module.exports = {
    logout
}