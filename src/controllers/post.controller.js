const postModel = require('../models/post.model')
const generateCaption = require('../service/ai.service');
const uploadFile = require('../service/storage.service');
const {v4: uuidv4 } = require('uuid')

async function createPostController(req,res) {
    const file = req.file;
    console.log("File recieved ", file);
    const base64Image = new Buffer.from(file.buffer).toString('base64')
    const caption = await generateCaption(base64Image)
    const result = await uploadFile(file.buffer,`${uuidv4()}`)
    res.json({
        caption, result,
        message:"Caption generated"
    })
    
    
}
module.exports = {
    createPostController
}