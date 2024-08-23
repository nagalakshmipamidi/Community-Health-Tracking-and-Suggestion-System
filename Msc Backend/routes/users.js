const express = require("express");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", function (req, res, next) {
  res.send("Hey there! Welcome to the MscBackend API! \n Its working!");
});

// Register
router.post("/register", async (req, res) => {
  const { email, password, name } = req.body;

  if (!email || !password || !name) {
    return res.status(200).json({ msg: "Please enter all fields" });
  }

  try {
    let user = await User.findOne({ email });

    if (user) {
      return res.status(200).json({ msg: "User already exists" });
    }

    const newUser = new User(req.body);
    
    await newUser.save();

    const payload = {
      user: {
        id: newUser.id,
      },
    };

    jwt.sign(
      payload,
      "yourSecretToken", // Use an environment variable for this
      { expiresIn: "1h" },
      (err, token) => {
        if (err) throw err;
        res.cookie("token", token);
        res.status(200).json({ msg: "User registered successfully", token ,user:newUser});
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(200).json({ msg: "Please enter all fields" });
  }

  try {
    let user = await User.findOne({ email });

    if (!user) {
      return res
        .status(200)
        .json({ msg: "Please provide a valid email address" });
    }

    // Compare plain text password directly
    if (password !== user.password) {
      return res.status(401).json({ msg: "Invalid credentials" });
    }

    const payload = {
      user: {
        id: user.id,
      },
    };

    jwt.sign(
      payload,
      "yourSecretToken", // Use an environment variable for this
      { expiresIn: "1h" },
      (err, token) => {
        if (err) throw err;
    
        res.cookie("token", token, {
          httpOnly: true,          
        });
    
        res.status(200).json({ msg: "User logged in successfully", user });
      }
    );
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

// Logout
router.get("/logout", (req, res) => {
  res.clearCookie("token");
  res.json({ msg: "Logout successful" });
});

// Protected route - Get user profile
router.get("/profile", authMiddleware, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

router.get("/get_all_users", async (req, res) => {
  try {
    const users = await User.find().select("-password");
    if (users.length === 0) {
      return res.status(404).json({ msg: "No users found" });
    }
    res.json(users);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

router.post("/update_user", authMiddleware, async (req, res) => {
  try {
    const { userId, password,journey,...updateFields } = req.body;

    if (!userId) {
      return res.status(400).json({ msg: "User ID is required" });
    }

    const user = await User.findByIdAndUpdate(userId, updateFields, {
      new: true
    });

    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

router.post("/get_user",authMiddleware, async (req, res) => { 
  try {
    const { userId } = req.body;
    
    if (!userId) {
      return res.status(400).json({ msg: "User ID is required" });
    }

    const user = await User.findById(userId).select("-password");
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    res.json(user);
  } catch (err) {
    res.status(500).send("Server error");
  }});





module.exports = router;
