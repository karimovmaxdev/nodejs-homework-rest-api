const { listContacts, getContactById } = require('../../model/contacts')

const getAll = async (req, res, next) => {
    try {
        const allContacts = await listContacts()
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
    const contact = await getContactById(req.params.contactId)
    
    if (!contact) {
      res.status(404).json({ message: "Not found" })
      return
    }

    res.json(contact).status(200)

  }
  catch (error) {
    next(error)
  }
}

module.exports = {
    getAll,
    getById
}