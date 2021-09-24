const express = require('express')
const router = express.Router()
const path = require('path')
const Joi = require('joi')

const contactsControls = path.resolve('model')
const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
} = require(contactsControls)


const postScheme = Joi.object({
  email: Joi.string().required(),
  name: Joi.string().required(),
  phone: Joi.number().required()
})

const patchScheme = Joi.object({
  email: Joi.string(),
  name: Joi.string().alphanum(),
  phone: Joi.number()
})

router.get('/', async (req, res, next) => {
  try {
    const allContacts = await listContacts()
    res
      .status(200)
      .json(allContacts)
    
  }
  catch (error) {
    next(error)
  }
})

router.get('/:contactId', async (req, res, next) => {
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
})

router.post('/', async (req, res, next) => {
  try {
    const {error} =  postScheme.validate(req.body)

    if (error) {
      res.status(400).json({ message: "missing required name field" })
      return
    }

    const newContact = await addContact(req.body)
    res.status(201).json(newContact)

  } catch (error) {
    next(error)
  }
})

router.delete('/:contactId', async (req, res, next) => {
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

})

router.patch('/:contactId', async (req, res, next) => {
  try {
    const { error } = patchScheme.validate(req.body)
    const id = req.params.contactId
    const { name, email, phone } = req.body
    
    if (error) {
      res.status(400).json({ message: "incorrect fields value" })
      return
    }

    if (!name && !email && !phone) {
      res.status(400).json({ message: "missing fields" })
      return
    }
    const result = await updateContact(id, req.body)
    res.status(200).json(result)
    
  } catch (error) {
    next(error)
  }
})

module.exports = router
