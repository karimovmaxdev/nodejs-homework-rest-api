const { updateContact } = require('../../model/contacts')

const patchContactById = async (req, res, next) => {
  try {
    const owner = req.user.id
    const id = req.params.contactId
    const result = await updateContact(id, req.body, owner)
    
    if (!result) {
      res.status(404).json({ message: 'not found' })
      return
    }

    res.status(200).json(result)
    
  } catch (error) {
      if (error.kind === "ObjectId") {
        res.status(404).json({ message: 'not found' })
        return
    }
    next(error)
  }
}

module.exports = {
    patchContactById
}