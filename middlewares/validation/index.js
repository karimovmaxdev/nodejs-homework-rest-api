const { postValidation } = require('./postValidation')
const { patchValidation, patchContactStatusValidation } = require('./patchValidation')
// const { patchFavoriteFieldValidation} = require('./patchFavoriteFieldValidation')

module.exports = {
    postValidation,
    patchValidation,
    patchContactStatusValidation
}