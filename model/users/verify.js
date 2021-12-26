const { user } = require('./schema/usersSchema')
const { BadRequest } = require('http-errors')
const sgMail = require('@sendgrid/mail')

const verify = async (params) => {
    const verifyToken = params.verificationToken
    const {_id } = await user.findOneAndUpdate({ verifyToken }, { $set: { verify: true, verifyToken: null } })
    const foundUser = await user.findById(_id)
    return foundUser
}

const repeatVerify = async ({email}) => {
    const foundUser = await user.findOne({ email })
    const verifyToken = foundUser.verifyToken

    if (!foundUser) {
        throw new BadRequest('not found')
    }

    if (foundUser.verify) {
        throw new BadRequest('Verification has already been passed')
    }
    
    const msg = {
        to: email,
        from: 'juk3z1973@gmail.com', 
        subject: 'Thank you for registration',
        text: `click this link for verify your profile <a href="http://localhost:3000/api/users/verify/${verifyToken}">Verify</a>`,
        html: `click this link for verify your profile <a href="http://localhost:3000/api/users/verify/${verifyToken}">Verify</a>`,
    }
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    await sgMail.send(msg)

    return {message: 'verification email sent'}
}


module.exports = {
    verify,
    repeatVerify
}