const express = require('express')
const router = express.Router()
const path = require('path')

const controllersPath = path.resolve('./controllers/contacts/index')
const validationPath = path.resolve('./middlewares/validation/contacts/index')
const authorizationPath = path.resolve('./middlewares/authorization/index')

const controllsContacts = require(controllersPath)
const validation = require(validationPath)
const {authorization} = require(authorizationPath)



router.get('/', authorization, controllsContacts.getAll)
router.get('/:contactId', authorization, controllsContacts.getById)
router.post('/', authorization, validation.postValidation, controllsContacts.postNewContact)
router.patch('/:contactId', authorization, validation.patchValidation, controllsContacts.patchContactById)
router.patch('/:contactId/favorite', authorization, validation.patchContactStatusValidation, controllsContacts.patchContactStatus)
router.delete('/:contactId', authorization, controllsContacts.deleteById)


module.exports = router
