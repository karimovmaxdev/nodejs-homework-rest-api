const { registration } = require('./registration')
const { authentication } = require('./authentication')
const { logout } = require('./logout')
const { getUserById } = require('./getUserById')
const { patchAvatars } = require('./patchAvatars')

module.exports = {
    registration,
    authentication,
    logout,
    getUserById,
    patchAvatars
}