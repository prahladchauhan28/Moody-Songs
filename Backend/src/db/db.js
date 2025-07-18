const mongoose=require("mongoose");

function connectDB()
{
    mongoose.connect(process.env.MONGODB_URL)
    .then(()=>{
        console.log("Connectd to DB! ");
    })
    .catch((err)=>{
        console.log(err);
    })
}
module.exports=connectDB;