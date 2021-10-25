const { user } = require('./schema/usersSchema')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const authentication = async ({ password, email }) => {
    const account = await user.findOne({ email, verify: true })
    if (!account) {
        return account
    }

    if (!await bcrypt.compare(password, account.password)) {
        return false
    }

    const token = jwt.sign({
        email: account.email,
        password: account.password,
        id: account._id
    }, process.env.JWT_SECRET)

    await user.findOneAndUpdate({ email }, { token })
    
    return {
        token,
        user: {
            email: account.email,
            subscription: account.subscription
        }
    }
}


module.exports = {
    authentication
}