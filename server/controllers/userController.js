const multer = require('multer');

const multerConfig = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null,'public/')
    },
    filename: (req, file, callback) => {
        const ext = file.mimetype.split('/')[1];
        callback(null, `file-${Date.now()}.${ext}`)
    }
})

const upload = multer({
    storage: multerConfig
});

exports.uploadImage = upload.single('photo')

exports.upload = (req, res) => {
    console.log(req.file);
    res.status(200).json({
        success: 'Success'
    });
}