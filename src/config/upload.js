const multer = require('multer');
const path = require('path');

module.exports = {
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, ',..','..', '..','..', 'uploads'),
        filename: (req, file, cb) => {
            const filename = path.basename(file.originalname);
            const extension = path.extname(file.originalname);

            console.log(`${filename}-${Date.now()}${extension}`);

            cb(null, `${filename}-${Date.now()}${extension}`);
        }
    })
};