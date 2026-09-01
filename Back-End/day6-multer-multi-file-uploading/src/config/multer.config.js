import multer from 'multer'

//single and multi ka kaam wha pe set hoga jaaha pe apan api bana rahe hai yaha pe apan file se releted jitni api hai wo file.router.js me bana rah hai so wha pe dekho

// diskStorage
// const storage = new multer.diskStorage({
//     destination: (req,file,cb)=>{cb(null,'uploads/')},
//     filename: (req,file,cb)=>{cb(null,Date.now()+file.originalname)}
// })

//memoryStoage
const storage = new multer.memoryStorage()

const fileUpload = multer({storage})

export default fileUpload