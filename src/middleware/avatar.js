const multer = require('multer')
const avatar = multer({
    limits: {
        fileSize: 2 << 19
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
            return cb(new Error('Please upload an image'))
        }

        cb(undefined, true)
    }
})

module.exports = avatar.single('avatar')