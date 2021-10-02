const {contact} = require('./schema/contactSchema')

const removeContact = async (contactId) => {
  await contact.findByIdAndDelete(contactId)
  return {message: "contact is deleted"}
}

module.exports = {
    removeContact
}