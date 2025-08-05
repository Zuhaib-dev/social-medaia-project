require('dotenv').config()
const express = require("express")
const authRouter = require('./routes/auth.routes')
const userModel = require('./models/user.model')
const app = express()
app.use(express.json())
app.use('/auth', authRouter)
module.exports = app