const multer =require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "./uploadFiles");
    },
    filename: function (req, file, cb) {
      cb(null,  `${Date.now()}--${file.originalname}`);
    },
  });

  const uploadExcelFile = multer({
    storage: storage,
  });
  
  const uploadsFile = uploadExcelFile.single('Image')

  module.exports={
    uploadsFile,
  }