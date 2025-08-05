const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");
const bcrypt = require("bcryptjs");
async function registerController(req, res) {
  const { username, password } = req.body;
  const isUserAlreadyExists = await userModel.findOne({ username });
  if (isUserAlreadyExists) {
    return res.status(400).json({ message: "User already exists" });
  }
  const user = await userModel.create({
    username,
    password: await bcrypt.hash(password, 10),
  });
  const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
  res.cookie = ("token", token);
}
async function loginController(req, res) {
  const { username, password } = req.body;
  const user = await userModel.findOne({ username });
  if (!user) {
    return res.status(400).json({
      message: "user not found",
    });
  }
  const isPasswordvalid = bcrypt.compare(password,user.password);
  if (!isPasswordvalid) {
    return res.status(400).json({
      message: "invalid password",
    });
  }
  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET
  );
  res.cookie = ("token", token);
  res.status(200).json({
    message: "USer logged in ",
    user: {
      username: user.username,
      id: user._id,
    },
  });
}
module.exports = {
  registerController,
  loginController,
};
