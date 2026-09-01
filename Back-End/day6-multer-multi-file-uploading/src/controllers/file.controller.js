import { toFile } from "@imagekit/nodejs";
import imageKit from "../services/storage.service.js";
import { url } from "node:inspector";

const singleFileUploadDiskControlller = (req,res) => {
    console.log('single file upload disk controller');
    return res.send('in single file upload disk controller')
}

const multiFileUploadDiskControlller = (req,res)=>{
    console.log('multi file upload disk controller');
    return res.send('in multi file upload disk controller')
}

const singleFileUploadMemoryController = async (req, res) => {
    const {buffer,originalname} = req.file

    //make a file object it is provided in the imageKit and we are usiing it because the upload funcition in imageKit will not accepts the buffer data directly so that is why we have to convert it to dile object
    const fileobject = await toFile(buffer,originalname)   //await lagana na bhule

    //upload in the image kit
    const uplodaFile = await imageKit.files.upload({      //await lagana na bhule
        file:fileobject,
        fileName:originalname,
        folder:'cohert-3'
    })
    

    return res.status(201).json({
        message:"file uploaded sucessfully",
        imageUrl:uplodaFile.url
    })
    
};

const MultiFileUploadMemoryController = async (req,res)=>{


    const files = req.files


    //for this we are using a diffrent approach in single file uploading we were converting the buffer into file now here we are converting it into base64 string
    const filesObject = files.map((file)=>{
        return {
            bufferString:file.buffer.toString('base64'),
            fileName:file.originalname
        }
    })

    
    //ab  ye jo hai janab dega pending promices because hum async await ko filter,map... jese function me use nahi kar dakthe hai because they don't support async tasks
    const fileUploads = filesObject.map((file)=>{
        return imageKit.files.upload({
            file:file.bufferString,
            fileName:file.fileName,
            folder:"cohert-3"
        })
    })

    //now for solving all the pending taksis one by one we will use promise.all
    const uploadResults = await Promise.all(fileUploads)    //await lagana mat bhulna and p capital hai promise me

    //now retrive every image url form the resolve promise from the uploadResults
    const fileUrls = uploadResults.map((result)=>{
        return {
            fileName:result.name,
            url:result.url
        }
    })
    
    res.status(201).json({
        message:"file uploaded sucessfully",
        uploadeFile:fileUrls
    })
}


export {
        singleFileUploadDiskControlller,
        multiFileUploadDiskControlller,
        singleFileUploadMemoryController,
        MultiFileUploadMemoryController
    }