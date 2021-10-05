const {contact} = require('./schema/contactSchema')

const updateStatusContact = async (contactId, body) => {
  await contact.findByIdAndUpdate(contactId, { $set: body })
  return contact.findById(contactId)
}


module.exports = {
    updateStatusContact
}