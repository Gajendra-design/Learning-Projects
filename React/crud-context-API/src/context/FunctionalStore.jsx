import { createContext, useContext } from "react";
import { UserStore } from "./userStore";

export const FunctionStore = createContext()

export const FunctionStoreProvider = ({ children }) => {

    const {users,setUsers, setIsLoggedIn,isLoggedIn} = useContext(UserStore)

    const handelAuth = (data, servise) => {
    
        if(servise==='register'){
            const check = register(data);
            if(!check)
                return;
        }

        if(servise==="login"){
            const check = login(data);
            if(!check)
                return;
        }
        
        const loginStatus = !isLoggedIn;
        localStorage.setItem('loginStatus',JSON.stringify(loginStatus))
        setIsLoggedIn(loginStatus);
        console.log(servise);
        
    }

    const register = (data) => {
        const isUserExists = users.find((user)=>{return data.email === user.email})   

            if(isUserExists){
                alert('This Email already exists in our DB');
                return false;
            }

            const updatedUsers = [...users,data];
            localStorage.setItem('users',JSON.stringify(updatedUsers));
            setUsers(updatedUsers);
            return true;
    }

    const login = (data)=>{
          const isUserExists = users.find((user)=>{return ((data.email === user.email)&&(data.password === user.password))})   
            
            if(!isUserExists){
                alert("your Login credentials are wrong, please check them before Login")
                return false;
            }

            return true;
    }

    const handelLogOut = ()=>{
        const loginStatus = !isLoggedIn;
        localStorage.setItem('loginStatus',JSON.stringify(loginStatus))
        setIsLoggedIn(loginStatus);
    }

    

    return (
        <FunctionStore.Provider value={{ handelAuth,handelLogOut }}>
            {children}
        </FunctionStore.Provider>
    )
}