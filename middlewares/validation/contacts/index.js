const { postValidation } = require('./postValidation')
const { patchValidation, patchContactStatusValidation } = require('./patchValidation')

module.exports = {
    postValidation,
    patchValidation,
    patchContactStatusValidation
}