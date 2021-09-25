const fs = require('fs/promises')
const contactsPath = require('path').resolve('./db/contacts.json')

const { getContactById } = require('./getContactById')
const { listContacts } = require('./getListContacts.js')

const updateContact = async (contactId, body) => {
  const contact = await getContactById(contactId)
  const contacts = await listContacts()
  const newContactsList = contacts.filter(it => it.id !== Number(contactId))

  if (!contact) {
    return {message: "Not found"}
  }

  const updatedInfo = { ...contact, ...body }

  await fs.writeFile(contactsPath, JSON.stringify([...newContactsList, updatedInfo], null, 2), 'utf-8');
  return updatedInfo

}

module.exports = {
    updateContact
}