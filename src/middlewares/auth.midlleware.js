const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");

async function authMiddleware(req, res, next) {
  const token = req.cookies.token; // ✅ Correct way to read cookie

  if (!token) {
    return res.status(401).json({
      message: "Unauthorized access. Please log in.",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // ✅ decode token
    const user = await userModel.findById(decoded.id); // ✅ correct way

    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    req.user = user; // ✅ attach user to request
    next();
  } catch (error) {
    return res.status(400).json({
      message: "Invalid token. Please log in again.",
    });
  }
}

module.exports = authMiddleware;
