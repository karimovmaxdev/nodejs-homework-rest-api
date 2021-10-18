const { listContacts, getContactById } = require('../../model/contacts')

const getAll = async (req, res, next) => {
  try {
        const allContacts = await listContacts(req.user.id)
        res
        .status(200)
        .json(allContacts)
        
    }
    catch (error) {
        next(error)
    }
}
    
const getById = async (req, res, next) => {
  try {
    const owner = req.user.id
    const contact = await getContactById(req.params.contactId, owner)
    if (!contact) {
      res.status(404).json({ message: "Not found" })
      return
    }

    res.json(contact).status(200)

  }
  catch (error) {
    if (error.kind === "ObjectId") {
      res.status(404).json({ message: 'not found' })
      return
    }
    next(error)
  }
}

module.exports = {
    getAll,
    getById
}