const { addContact } = require('../../model/contacts')

const postNewContact = async (req, res, next) => {
  try {
    const newContact = await addContact(req.body, req.user)
    res.status(201).json(newContact)

  } catch (error) {
    next(error)
  }
}


module.exports = {
    postNewContact
}