const { removeContact } = require('../../model/contacts')

const deleteById = async (req, res, next) => {
  try {
    const result = await removeContact(req.params.contactId)
  
    if (!result) {
      res.status(404).json({ message: "Not found" })
      return
    }
    res.status(200).json(result)

  } catch (error) {
    next(error)
  }
}

module.exports = {
    deleteById
}

