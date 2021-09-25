const fs = require('fs/promises')
const contactsPath = require('path').resolve('./db/contacts.json')

const { listContacts } = require('./getListContacts.js')

const addContact = async ({ name, email, phone }) => {
  const contacts = await listContacts()
  const id = contacts[contacts.length - 1].id + 1
  const newContact = {
    id,
    name,
    email,
    phone,
  }

  await fs.writeFile(contactsPath, JSON.stringify([...contacts, newContact], null, 2), 'utf-8');
  return newContact
}

module.exports = {
    addContact
}