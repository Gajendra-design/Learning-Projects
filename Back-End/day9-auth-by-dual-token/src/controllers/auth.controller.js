import { userModel } from '../models/user.model.js'
import { hashPassword, tokenGenrater, verifyAccessToken, verifyRefreshToken } from '../utils/auth.js';

export const testController = (req, res) => {
    console.log("testing sucessfull on server side");

    res.status(200).json({
        message: "tesing sucessfull on client side"
    })
}

export const registerController = async (req, res) => {

    //get data from req.body
    const { username, email, password } = req.body;

    //isme initials basich checks lagao for security


    //hash the password
    const newHashPassword = hashPassword(password)

    //save the info in db so you can get the id
    const newUser = await userModel.create({
        username,
        email,
        password: newHashPassword
    })

    //genrate refresh and access token with userId in payload and expirein 15min AT, 7D RT
    const { accessToken, refreshToken } = tokenGenrater(newUser._id)

    //save the refresh token in the db along with the userinfo
    newUser.refreshToken = refreshToken;
    await newUser.save();

    //refresh token will be set in the cokkie 
    res.cookie("refreshToken", refreshToken, {
        httpOnly: true
    })

    //access token will be send in the respose
    return res.status(201).json({
        message: "sucess",
        data: {
            user: {
                username: newUser.username,
                email: newUser.email
            }
        },
        accessToken
    })


}

export const refreshController = async (req, res) => {

    //get refresh token from the cookie in req now why refresh token because its purpose is to refresh tokens and we have saved it in cookie which comes in the header as cookies
    const refreshToken = req.cookies.refreshToken;    //remember it is cookies not cookie in request

    //verify if there is refresh token comming or not

    //if no the response in 401 unauthorize
    if (!refreshToken) {
        return res.status(401).json({
            message: "unathorized, refresh token not found"
        })
    }

    try {
        //if yes then verify first the refrsh token
        const decode = verifyRefreshToken(refreshToken)

        //if user is verfied then we can have his id then find the user in mondodb
        const user = await userModel.findOne({ _id: decode.id })
    } catch (error) {
        //if refresh token is not verifiew then repose with 401 unauthorized
        return res.status(401).json({
            message: "unathorised, invalid refresh token"
        })
    }

    //match the refresh token with the token in the db 

    //if mismatch then 
    if (refreshToken !== user.refreshToken) {

        // make refresh token null in the user info in DB first save it 
        user.refreshToken = null;
        await user.save();

        // and then response with the 401 unauthorised
        return res.status(401).json({
            message: "unathorised, refresh token doesn't match"
        })
    }


    // if matched then again genrate new tokens 
    const { accessToken, refreshToken: newRefreshToken } = tokenGenrater(decode.id);

    //update the refresh token in the DB -> don't forget that
    user.refreshToken = newRefreshToken;
    await user.save();

    //then set refresh token in cookie
    res.cookie('refreshToken', newRefreshToken, { httpOnly: true })

    //then set access token in response
    return res.status(200).json({
        message: "sucess",
        data: {
            username: user.username,
            email: user.email
        },
        accessToken
    })
}

export const userVerifyController = async (req, res) => {

    //get token from the request now this time we need access token because its purpose is to verify the user and we have to send it ourself in the heder and we will send it in Authorization which is default key in header remeber in refresh endpoint it the refresh token is comming in cookies in the header all by itself because we set it in the cookie but when sending access token we have to send it oursef in the Authorization key in header and in that we will send it like Bearer your_access_token_here

    const accessToken = req.headers.authorization.split(' ')[1]   //remember headers hai header nahi and suggestion nahi aayege isme and hum isme Bearer your_access_token_here access token ese bhej rahe hai so for that purpose we have to split it with sapce and get the access token and get last index

    //cheack if the access token is come or not
    if (!accessToken) {
        //if not then 401 unauthorised error
        return res.status(401).json({
            message: "unauthorized, access token not found"
        })
    }

    //if yes then verify the token first
    try {
        //verifing the access token
        const decode = verifyAccessToken(accessToken);

        //if it is verifyied then we have the id in the payload then find the user in the DB
        const user = await userModel.findOne({ _id: decode.id })

        //respose with 200 status code
        return res.status(200).json({
            message: "sucess",
            data: {
                username: user.username,
                email: user.email
            },
            accessToken
        })
    } catch (error) {
        // if it is not verified then 401 unauthoriized response 
        return res.status(401).json({
            message: "unathorized, invalid access token"
        })

    }










    res.send('ok')



}