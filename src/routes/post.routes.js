const express = require("express");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser")
const userModel = require("../models/user.model");
const router = express.Router();
router.post("/", async (req, res) => {
  const token = res.cookie.token;
  if (!token) {
    return res.status(401).json({
      message: "Unauthorized access, Login first bsdk",
    });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await userModel.findOne({
      _id: jwt.decoded.id,
    });
  } catch (error) {
    return res.status(400).json({
      message: "invalid token , please login first ",
    });
  }
});
module.exports = router;
