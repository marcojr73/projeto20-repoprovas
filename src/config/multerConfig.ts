import multer from "multer";
import crypto from "crypto"

const multerConfig = {
    dest: 'uploads/',

    fileFilter: (req, file, cb) => {
        const allowedMimes=[
            "application/pdf"
        ]
        if(allowedMimes.includes(file.mimetype)){
            cb(null, true)
        } else {
            throw {
                status: 422,
                message: "invalid file type"
            }
        }
    }

}

export default multerConfig