const express = require('express')
const router = express.Router()
const path = require('path')

const controllersPath = path.resolve('./controllers/contacts/index')
const validationPath = path.resolve('./middlewares/validation')

const controllsContacts = require(controllersPath)
const validation = require(validationPath)

router.get('/', controllsContacts.getAll)
router.get('/:contactId', controllsContacts.getById)
router.post('/', validation.postValidation, controllsContacts.postNewContact)
router.delete('/:contactId', controllsContacts.deleteById)
router.patch('/:contactId', validation.patchValidation, controllsContacts.patchContactById)


module.exports = router
