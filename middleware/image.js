const multer = require("multer");
const uuid = require("uuid");

const multerOptions = {
  storage: multer.diskStorage({
    destination: (req, file, next) => {
      next(null, "public/uploads");
    },
    filename: (req, file, next) => {
      next(null, `${uuid.v4()}.${file.mimetype.split("/")[1]}`);
    },
  }),
  fileFilter: (req, file, next) => {
    const allowed = ["image/png", "image/jpg", "image/jpeg"];
    if (allowed.includes(file.mimetype)) {
      next(null, true);
    } else {
      next(null, false);
    }
  },
};

exports.upload = multer(multerOptions).single("imagem");
