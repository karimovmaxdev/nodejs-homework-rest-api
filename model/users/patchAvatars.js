const { user } = require('./schema/usersSchema')
const Jimp = require('jimp')
const path = require('path')
const fs = require('fs').promises

const patchAvatars = async (currentUser, currentFile) => {
    const destinationPath = path.resolve('public/avatars')
    const [name, extension] = currentFile.originalname.split('.')

    const origFile = await Jimp.read(currentFile.path)
    const finalFile = `${destinationPath}/${currentUser.email}_${name + Date.now()}.${extension}`

    origFile
        .resize(250, 250)
        .quality(60)
    
    await origFile
        .writeAsync(finalFile)
    
    await user.findByIdAndUpdate({ _id: currentUser.id }, { $set: { avatarURL: finalFile } })
    await fs.unlink(currentFile.path)

    return finalFile

}


module.exports = {
    patchAvatars
}