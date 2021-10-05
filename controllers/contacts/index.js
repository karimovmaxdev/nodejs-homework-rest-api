const { getAll, getById } = require('./getContacts')
const { postNewContact } = require('./postContacts')
const { patchContactById } = require('./patchContacts')
const { deleteById } = require('./deleteContacts')
const { patchContactStatus } = require('./patchContactStatus')


module.exports = {
    getAll,
    getById,
    postNewContact,
    patchContactById,
    deleteById,
    patchContactStatus
}