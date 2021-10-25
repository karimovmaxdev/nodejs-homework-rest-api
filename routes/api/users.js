const express = require('express')
const router = express.Router()
const path = require('path')

const controllersPath = path.resolve('./controllers/users/index')
const validationPath = path.resolve('./middlewares/validation/users/index')
const authorizationPath = path.resolve('./middlewares/authorization/index')
const uploadingFilesPath = path.resolve('./middlewares/uploadFiles/index')

const controllsUsers = require(controllersPath)
const validation = require(validationPath)
const { authorization } = require(authorizationPath)
const {uploadingAvatar} = require(uploadingFilesPath)

router.post('/signup', validation.signUp, controllsUsers.signUp)
router.post('/login', validation.signUp, controllsUsers.signIn)
router.post('/logout', authorization, controllsUsers.signOut)
router.get('/current', authorization, controllsUsers.getUser)

router.post('/verify', validation.repeatVerify, controllsUsers.repeatConfirmEmail)
router.get('/verify/:verificationToken', controllsUsers.confirmEmail)

router.patch('/avatars', [authorization, uploadingAvatar.single('avatar')], controllsUsers.refreshAvatar)


module.exports = router
