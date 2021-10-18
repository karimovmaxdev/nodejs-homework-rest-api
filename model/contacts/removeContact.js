const {contact} = require('./schema/contactSchema')

const removeContact = async (contactId, owner) => {
  const removedContact = await contact.findByIdAndDelete({ _id: contactId, owner })
   
  return removedContact
}

module.exports = {
    removeContact
}