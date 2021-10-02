const {contact} = require('./schema/contactSchema')

const addContact = async ({ name, email, phone, favorite }) => {
  const newContact = await contact({ name, email, phone, favorite })
  await newContact.save()
  return newContact
}

module.exports = {
    addContact
}