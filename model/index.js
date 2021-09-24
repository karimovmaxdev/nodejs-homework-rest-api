const fs = require('fs/promises')
// const contacts = require('./contacts.json')
const contactsPath = require('path').resolve('./model/contacts.json')

const listContacts = async () => {
  const contacts = await fs.readFile(contactsPath, 'utf-8');
  return JSON.parse(contacts)
}

const getContactById = async (contactId) => {
  const contacts = await listContacts()
  const [foundContact] = contacts.filter(it => it.id === Number(contactId))

  return foundContact
}

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

const addContact = async ({name, email, phone}) => {
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
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
}
