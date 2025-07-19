const connectDB=require("./src/db/db")
 const dotenv = require("dotenv");
 const app=require("./src/app")
 dotenv.config();

connectDB();

app.listen(3000,()=>{
    console.log("server is running on port:3000");
})