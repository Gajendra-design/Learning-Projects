import axios from "axios";

//instance create hoga by create method ofacios and usme object jayega as a parmeter and usme baseurl jsyegi
export const axiosInstance = axios.create({
    baseURL:"https://fakestoreapi.com"
})

//yaha pe hum intercepter use kar rahe hai for the resonse travel(server se frontend pe data aayeg POST request) and isme use function use hoga jisme 2 callbak function honge
axiosInstance.interceptors.response.use(
    (res)=>{return res},  //ye callback function haifor handelingresponse and alsodon'tforget to return the response or the component which called it will not get the data and your code will blast
    (err)=>{console.log(err); //this callback function is for showing error if there is any 
    }
)

// now let's humkohamare frontend pe ek se jayada api se data lena hai tho uske liye humko multiple instances banane hongefor example if we eant to get data form the dummy storeapi also then we have to make anothr instance

// export const axiosInstance2 = axios.create({
//     baseURL:"http://dummyjson.com/"
// })
