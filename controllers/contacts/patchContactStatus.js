const { updateStatusContact } = require('../../model/contacts')

const patchContactStatus = async (req, res, next) => {
  try {
    const id = req.params.contactId
    const result = await updateStatusContact(id, req.body)
    res.status(200).json(result)
    
  } catch (error) {
    next(error)
  }
}

module.exports = {
    patchContactStatus
}