const {listContacts} = require('./getListContacts.js')

const getContactById = async (contactId) => {
  const contacts = await listContacts()
  const [foundContact] = contacts.filter(it => it.id === Number(contactId))

  return foundContact
}

module.exports = {
    getContactById
}