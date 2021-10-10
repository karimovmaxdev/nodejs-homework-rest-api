const {contact} = require('./schema/contactSchema')

const listContacts = async (owner) => {
  const contactsList = await contact.find({owner})
  return contactsList
}

module.exports = {
    listContacts
}