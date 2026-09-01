const express = require('express');
const upload = require('../config/multer')

const router = express.Router();

//checking route is working properly or not
router.get('/get',(req,res)=>{
    res.status(200).json({
        message:"checkiong sucessful"
    })
})

router.post('/upload',upload.single('image'),(req,res)=>{res.status(201).json({message:'file recived sucessfully'})})



module.exports = router;