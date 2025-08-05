const express = require("express");
const authMiddleware = require("../middlewares/auth.midlleware");
const cookieParser = require("cookie-parser");
const userModel = require("../models/user.model");
const multer = require("multer");
const router = express.Router();
const upload = multer({
  storage: multer.memoryStorage(),
});
router.post("/", authMiddleware,
    upload.single("image"),
     createPostController
    );
module.exports = router;
