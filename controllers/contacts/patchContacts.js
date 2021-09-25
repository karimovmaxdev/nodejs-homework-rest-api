const { updateContact } = require('../../model/contacts')

const patchContactById = async (req, res, next) => {
  try {
    const id = req.params.contactId
    const result = await updateContact(id, req.body)
    res.status(200).json(result)
    
  } catch (error) {
    next(error)
  }
}

module.exports = {
    patchContactById
}