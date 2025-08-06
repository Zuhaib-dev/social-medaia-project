require('dotenv').config()
const app  = require('./src/app')
const connectDB = require('./src/db/db')
const cookieParser = require("cookie-parser")
connectDB()
app.listen(3000,()=>{
    console.log("Server is running");
    
})
