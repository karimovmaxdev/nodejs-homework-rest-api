const { registration } = require('./registration')
const { authentication } = require('./authentication')
const { logout } = require('./logout')
const {getUserById} = require('./getUserById')

module.exports = {
    registration,
    authentication,
    logout,
    getUserById
}