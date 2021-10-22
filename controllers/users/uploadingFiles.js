const { patchAvatars } = require('../../model/users')


const refreshAvatar = async (req, res, next) => {
    try {
        const avatarURL = await patchAvatars(req.user, req.file)
        res.status(200).json({avatarURL})

    } catch (error) {
        next(error)
    }
}

module.exports = {
    refreshAvatar
}