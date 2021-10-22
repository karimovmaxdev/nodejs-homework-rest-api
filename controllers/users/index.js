const { signUp } = require("./signUp")
const { signIn } = require('./signIn')
const { signOut } = require('./signOut')
const { getUser } = require('./getUser')
const { refreshAvatar } = require('./uploadingFiles')

module.exports = {
    signUp,
    signIn,
    signOut,
    getUser,
    refreshAvatar
}