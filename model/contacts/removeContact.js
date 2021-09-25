const fs = require('fs/promises')
const contactsPath = require('path').resolve('./db/contacts.json')

const { getContactById } = require('./getContactById')
const { listContacts } = require('./getListContacts.js')

const removeContact = async (contactId) => {
  const contact = await getContactById(contactId)
  const allContacts = await listContacts()

  if (!contact) {
    return undefined
  }

  const newContacts = allContacts.filter(it=>it.id !== contact.id)
  await fs.writeFile(contactsPath, JSON.stringify([...newContacts], null, 2), 'utf-8');
  return {message: "contact deleted"}
}

module.exports = {
    removeContact
}