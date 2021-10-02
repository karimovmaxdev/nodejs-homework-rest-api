const {contact} = require('./schema/contactSchema')

const listContacts = async () => {
  const contactsList = await contact.find()
  return contactsList
}

module.exports = {
    listContacts
}