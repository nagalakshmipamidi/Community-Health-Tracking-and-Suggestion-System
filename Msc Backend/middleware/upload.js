const multer = require('multer');
const path = require('path');

// Define storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // Specify the directory where files will be uploaded
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    // Specify the file name
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

// Initialize multer with the defined storage configuration
const upload = multer({
  storage: storage,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10 MB size limit
  fileFilter: (req, file, cb) => {
    // Accept image files only
    const filetypes = /jpeg|jpg|png|gif/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);
    if (mimetype && extname) {
      return cb(null, true);
    } else {
      cb(new Error('Invalid file type. Only JPEG, JPG, PNG, and GIF files are allowed.'));
    }
  }
});

module.exports = upload;
