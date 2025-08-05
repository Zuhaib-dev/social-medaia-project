const express = require("express")
const userModel = require("../models/user.model")
const jwt = require('jsonwebtoken')

const router = express.Router()

router.post('/register', async(req,res)=>{
    const {username,password} = req.body
    const exsistingUser = userModel.findOne({
        username
    })
    if(exsistingUser){
        return res.status(409).json({
            message: "User already exists"
        })
    }
    const user = await userModel.create({
        username,password
    })
    const token  = jwt.sign({
        id:user._id
    },process.env.JWT_SECRET)

    res.cookie('token', token)
    res.status(201).json({
        message:"User created successfully",
    })
})
module.exports = router