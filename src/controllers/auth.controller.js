const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

async function registerController(req, res) {
  const { username, password } = req.body;
  const isUserALreadyExists = await userModel.findOne({
    username,
  });
  return res.status(401).json({
    message: "user already registered",
  });
  const user = await userModel.create({
    username,
    password,
  });
  return res.status(201).json({
    message: "user created successfully",
  });
  const token = jwt.sign({
    id: user_id
  },process.env.JWT_SECRET);
  res.cookie = ("token", token)

}
async function loginController(req,res) {
    const { username, password } = req.body;
    
    
}
