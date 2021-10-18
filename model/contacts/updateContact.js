const {contact} = require('./schema/contactSchema')

const updateContact = async (contactId, body, owner) => {
  await contact.findByIdAndUpdate({ _id: contactId, owner }, { $set: body })
  return contact.findOne({ _id: contactId, owner })
}


module.exports = {
    updateContact
}