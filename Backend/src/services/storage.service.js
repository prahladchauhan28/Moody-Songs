const dotenv = require("dotenv");
dotenv.config();
const ImageKit = require("imagekit");

var imagekit = new ImageKit({
    publicKey : process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey : process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT
});

function uploadImage(file) {
    return new Promise((resolve, reject) => {
    imagekit.upload({
        file: file.buffer, 
        fileName: "cohort-01",
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