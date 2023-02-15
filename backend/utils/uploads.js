import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public/uploads"); // The directory where the uploaded files will be stored
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname); // The name of the uploaded file
    },
});

const upload = multer({ storage: storage });

export { upload };