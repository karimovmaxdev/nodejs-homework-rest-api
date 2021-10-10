const { removeContact } = require('../../model/contacts')

const deleteById = async (req, res, next) => {
  try {
    const owner = req.user.id
    const result = await removeContact(req.params.contactId, owner)
  
    if (!result) {
      res.status(404).json({ message: "Not found" })
      return
    }
    res.status(200).json({message: "Contact is deleted succsess"})

  } catch (error) {
    if (error.kind === "ObjectId") {
      res.status(404).json({ message: 'not found' })
      return
    }
    next(error)
  }
}

module.exports = {
    deleteById
}

