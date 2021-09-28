const multer = require('multer');
const path = require('path');
const newPath = require('path').resolve;

const storage = multer.diskStorage({
    destination(req, file, cb) {
        if (file.fieldname === 'picture') {
            const destination = path.join(__dirname, `../../../../public/uploads`);
            cb(null, destination);
        } else {
            const destination = path.join(__dirname, `../../../../${process.env.DIR_NAME}`);
            cb(null, destination);
        }
    },
    filename(req, file, cb) {
        let ext = '';

        if (file.mimetype === 'image/png' || file.mimetype === 'image/jpeg') ext = '.jpg';
        else ext = path.extname(file.originalname);

        console.log(ext);
        cb(null, file.originalname.split('.')[0] + '-' + Date.now() + ext);
    }
});

module.exports = {
    upload: multer({
        storage,
        limits: { fileSize: 1024 * 1024 * 750 }
    })
};
