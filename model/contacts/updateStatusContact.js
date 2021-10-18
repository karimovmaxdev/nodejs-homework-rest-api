const {contact} = require('./schema/contactSchema')

const updateStatusContact = async (contactId, body, owner) => {
  await contact.findByIdAndUpdate({_id: contactId, owner }, { $set: body })
  return contact.findById({_id: contactId, owner })
}


module.exports = {
    updateStatusContact
}