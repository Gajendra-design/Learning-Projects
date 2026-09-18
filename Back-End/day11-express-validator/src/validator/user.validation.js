import { body, validationResult } from 'express-validator';

const validation = [
    body('email')
        .exists().withMessage('email is required')
        .isEmail().withMessage('invalid email formate'),
    body('phone')
        .exists().withMessage('please provide mobile number')
        .isMobilePhone('en-IN').withMessage('please provide a valid indian phone number'),
    body('password')
        .exists().withMessage('please provide passerod')
        .trim().isLength({min:8}).withMessage('password must be of atleast 8 character long')
        .isStrongPassword().withMessage('password must be at least of 8 character long and must contain atleast one uppercase, one lowercase, one number and one special charater'),
        (req,res,next)=>{
            const errors = validationResult(req);

           //while they both will give same result but user errors.array() because it is a guarenteed method from express-validator pakage and also is very flexible like let's say we have more then one validation for each field in validation chain then we can write errors.array({ onlyFirstError: true }); which return only first error of each field and on the other side errors.errors is we are accessing property inside the returning object of validationResult(req) which can be changed by the any time and is not gurantee the same name in fututre so for that we prefre errors.array() over errors.errors 
            // console.log(errors.errors);
            // console.log(errors.array());
            
            

            if(!errors.isEmpty()){
               return res.status(400).json({
                    success:false,
                    message:"data validation failed",
                    errors:errors.array()
                })
            }

            next()
        }
]

export default validation