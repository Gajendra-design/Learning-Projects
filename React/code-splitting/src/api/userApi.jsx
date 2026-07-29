import axios from "axios"

export const getUsersData = async ()=>{
    console.log('getUserData chal raha hai');
    
    try{
    const userData = await axios.get('https://fakestoreapi.com/users')
        return userData
    }catch(err){
        console.log(err);
        
    }
}