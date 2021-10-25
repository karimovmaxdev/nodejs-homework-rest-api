const { user } = require('./schema/usersSchema')
const bcrypt = require('bcrypt')
const gravatar = require('gravatar')

const { nanoid } = require('nanoid')
const sgMail = require('@sendgrid/mail')




const registration = async ({ password, email, subscription }) => {
  const isUserExisted = await user.findOne({ email })
  if (isUserExisted) {
    return null
  }

  const verifyToken = nanoid()

  const newUser = await new user({
    password: await bcrypt.hash(password, 10),
    email,
    subscription,
    avatarURL: gravatar.url(email, null, false),
    verifyToken,
  })

  await newUser.save()

  const msg = {
    to: email,
    from: 'juk3z1973@gmail.com', 
    subject: 'Thank you for registration',
    text: `click this link for verify your profile <a href="http://localhost:3000/api/users/verify/${verifyToken}">Verify</a>`,
    html: `click this link for verify your profile <a href="http://localhost:3000/api/users/verify/${verifyToken}">Verify</a>`,
    
  }
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  await sgMail.send(msg)

  return newUser
}


module.exports = {
    registration
}