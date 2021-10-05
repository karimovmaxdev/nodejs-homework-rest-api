const {contact} = require('./schema/contactSchema')

const getContactById = async (contactId) => {
  const foundContact = await contact.findById(contactId)
  return foundContact
}

module.exports = {
    getContactById
}