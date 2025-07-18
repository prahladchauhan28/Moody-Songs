const express=require("express");
const connectDB=require("./src/db/db")
 const dotenv = require("dotenv");
 dotenv.config();
const app=express();

connectDB();

app.listen(3000,()=>{
    console.log("server is running on port:3000");
})