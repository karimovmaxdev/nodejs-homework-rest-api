// const { getAllContacts, getById, postNewContact, patchContactById, deleteById } = require('./contacts.js')
const { getAll, getById } = require('./getContacts')
const { postNewContact } = require('./postContacts')
const { patchContactById } = require('./patchContacts')
const { deleteById } = require('./deleteContacts')


module.exports = {
    getAll,
    getById,
    postNewContact,
    patchContactById,
    deleteById
}