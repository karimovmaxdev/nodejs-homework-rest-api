const { user } = require('./schema/usersSchema')
const bcrypt = require('bcrypt')


const registration = async ({ password, email, subscription }) => {
  const isUserExisted = await user.findOne({ email })
  if (isUserExisted) {
    return null
  }

  const newUser = await new user({
    password: await bcrypt.hash(password, 10),
    email,
    subscription
  })

  await newUser.save()
  return newUser
}


module.exports = {
    registration
}