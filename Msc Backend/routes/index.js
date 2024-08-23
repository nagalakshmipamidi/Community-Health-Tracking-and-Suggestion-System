var express = require('express');
const User = require('../models/User');
const multer = require('multer');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads'); // Folder where files will be saved
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${file.originalname}`);
  }
});

const upload = multer({ storage });

// Upload endpoint
router.post('/upload', upload.fields([
  { name: 'beforeImage', maxCount: 1 },
  { name: 'afterImage', maxCount: 1 }
]), async (req, res) => {
  try {
    const { userId, description, targetBmi, targetTime, preferredExercise, progress } = req.body;

    // Create file paths or URLs
    const beforeImageUrl = req.files['beforeImage'] ? `/uploads/${req.files['beforeImage'][0].filename}` : null;
    const afterImageUrl = req.files['afterImage'] ? `/uploads/${req.files['afterImage'][0].filename}` : null;

    // Find the user
    const user = await User.findById(userId);
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Update user journey information
    user.journey = {
      beforeImage: beforeImageUrl,
      afterImage: afterImageUrl,
      description,
      targetBmi,
      targetTime,
      preferredExercise,
      progress
    };

    // Save the updated user
    await user.save();

    res.status(200).json({ message: 'Journey added successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
});



module.exports = router;
