// controllers/userController.js
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const nodemailer = require("nodemailer");
const randomstring = require("randomstring");

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: "manoj.h@nestorbird.com",
    pass: "Manoj@1999",
  },
});

// Generate a secure secret key for JWT token signing
const secretKey = crypto.randomBytes(32).toString("hex");

exports.signup = async (req, res) => {
  const { name, email, phone, otp, password } = req.body;
  try {
    
    const existingUser = await User.findOne({ $or: [{ email }, { phone }] });
    if (existingUser) {
      return res.status(400).send({ message: "User already exists Phone OR Email " });
    }
    
    const user = new User({
      name,
      email,
      phone,
      otp,
      password,
      profileImage: req.file.path,
    });
    await user.save();
    res.status(201).send({ message: "User created successfully", user });
  } catch (error) {
    res
      .status(500)
      .send({ message: "Error creating the user", error: error.message });
  }
};

exports.signin = async (req, res) => {
  const { email, password } = req.body;
  try {

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(401).json({ message: "Invalid password" });
    }

    const token = jwt.sign({ userId: user._id }, secretKey, {
      expiresIn: "1h",
    });

    user.token = token;
    await user.save();

    res.status(200).json({ token });
  } catch (error) {
    console.error("Error signing in:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.getUserDetails = async (req, res) => {
 
  const token = req.headers.authorization;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    
    const decodedToken = jwt.verify(token, secretKey);
    const userId = decodedToken.userId;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching user details:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

function generateOTP() {
  return randomstring.generate({
    length: 6, 
    charset: "numeric", 
  });
}

exports.sendOTP = async (req, res) => {
  const { email } = req.body;

  const otp = generateOTP();

  const mailOptions = {
    from: "manoj.h@nestorbird.com",
    to: email,
    subject: "Your One-Time Password (OTP)",
    text: `Your OTP is: ${otp}`,
  };

  try {
    // Send email
    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: "OTP sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};
