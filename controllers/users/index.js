const { signUp } = require("./signUp")
const { signIn } = require('./signIn')
const { signOut } = require('./signOut')
const {getUser} = require('./getUser')

module.exports = {
    signUp,
    signIn,
    signOut,
    getUser
}