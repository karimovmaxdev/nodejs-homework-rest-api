const {contact} = require('./schema/contactSchema')

const getContactById = async (contactId, owner) => {
  const foundContact = await contact.findOne({ _id: contactId, owner })
  return foundContact
}

module.exports = {
    getContactById
}