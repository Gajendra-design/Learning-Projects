import express from 'express'
import { authLoginController, authRegesterController } from '../controllers/auth.controller.js';

const router = express.Router();

router.get('/get-user-test',(req,res)=>{
    res.status(200).json({
        message:"testing api is sucessfull"
    })
})

router.post('/register',authRegesterController)
router.post('/login',authLoginController)


export default router;