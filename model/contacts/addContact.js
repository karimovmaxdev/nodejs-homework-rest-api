const {contact} = require('./schema/contactSchema')

const addContact = async ({ name, email, phone, favorite }, user) => {
  const owner = user.id

  const newContact = await contact({ name, email, phone, favorite, owner })
  await newContact.save()
  return newContact
}

module.exports = {
    addContact
}