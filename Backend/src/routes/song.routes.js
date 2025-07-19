const express = require('express');
const multer = require('multer');
const uploadImage = require('../services/storage.service'); 

const upload =multer({storage: multer.memoryStorage()});

const router = express.Router();

router.post('/songs',upload.single("audio"), async (req, res) => {
    console.log('Received song data:', req.body);
      console.log( req.file);
      const fileData = await uploadImage(req.file);
      console.log('File uploaded successfully:', fileData);
      
    res.status(201).json({ message: 'Song data received successfully',
        song: req.body
     });
})

module.exports = router;