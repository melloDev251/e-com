const User = require("../models/userModel");
const router = require("express").Router();
const cryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

// register
router.post("/register", async (req, res) => {
  const newUser = User({
    username: req.body.username,
    email: req.body.email,
    password: cryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SECRET
    ).toString(),
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

// login
router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(401).json("WRONG CREDENTIALS");

    const hashPassword = cryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SECRET
    );
    const originalPassword = hashPassword.toString(cryptoJS.enc.Utf8);
    originalPassword !== req.body.password &&
      res.status(401).json("WRONG CREDENTIALS");

    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SECRET,
      { expiresIn: "9d" }
    );

    const { password, ...others } = user._doc;

    res.status(200).json({ ...others, accessToken });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
