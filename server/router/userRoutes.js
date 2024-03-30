const express = require('express');
const router = express.Router();
const multer = require('multer');
const userController = require('../controller/userController');

// Multer setup for image upload
const uploadDir = 'uploads';
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function(req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  }
});
const upload = multer({ storage: storage });

router.post('/signup', upload.single('profileImage'), userController.signup);
router.post('/signin', userController.signin);
router.get('/user/details', userController.getUserDetails);
router.post('/send-otp', userController.sendOTP);

module.exports = router;
