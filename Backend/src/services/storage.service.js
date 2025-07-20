const dotenv = require("dotenv");
dotenv.config();
const ImageKit = require("imagekit");
const mangoose = require("mongoose");

var imagekit = new ImageKit({
    publicKey : process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey : process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT
});

function uploadImage(file) {
    return new Promise((resolve, reject) => {
    imagekit.upload({
        file: file.buffer, 
        fileName: new mangoose.Types.ObjectId().toString(),
        folder: "Moody-playlist",
    }, (error, result) => {
        if (error) {    
            reject(error);
        } else{
            resolve(result);
        }
    });
    });
}

module.exports = uploadImage