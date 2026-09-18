import express from 'express';
import { registerController } from '../controller/user.controller.js';
import userValidation from '../validator/user.validation.js'

const route = express.Router()

route.post('/register',userValidation,registerController)


export default route;