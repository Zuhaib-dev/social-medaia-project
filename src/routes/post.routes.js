const express = require("express");
const authMiddleware = require("../middlewares/auth.midlleware");
const cookieParser = require("cookie-parser");
const userModel = require("../models/user.model");
const router = express.Router();
router.post("/", authMiddleware);
module.exports = router;
