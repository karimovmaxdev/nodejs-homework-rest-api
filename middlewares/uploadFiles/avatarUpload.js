const multer = require('multer')
const path = require('path')


const storage = multer.diskStorage({
    destination: function (req, file, cb) {
    cb(null, path.resolve('./tmp'))
  },
  filename: function (req, file, cb) {
    const [name, extension] = file.originalname.split('.')
    cb(null, name + Date.now() + '.' + extension)
  }
})

const uploadingAvatar = multer({storage})

module.exports = {
    uploadingAvatar
}
