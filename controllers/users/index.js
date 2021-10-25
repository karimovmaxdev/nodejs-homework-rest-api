const { signUp } = require("./signUp")
const { signIn } = require('./signIn')
const { signOut } = require('./signOut')
const { getUser } = require('./getUser')
const { refreshAvatar } = require('./uploadingFiles')
const { confirmEmail, repeatConfirmEmail } = require('./confirmEmail')

module.exports = {
    signUp,
    signIn,
    signOut,
    getUser,
    refreshAvatar,
    confirmEmail,
    repeatConfirmEmail
}