import { createContext, useState } from "react";

export const UserStore =  createContext();

export const UserStoreProvider = ({children})=>{
    // localStorage.clear()
    console.log('login status',JSON.parse(localStorage.getItem('loginStatus')));
    
    const [isLoggedIn, setIsLoggedIn] = useState(JSON.parse(localStorage.getItem('loginStatus'))||false)
    const [isNewUser, setIsNewUser] = useState(true)
    const [users,setUsers] = useState(JSON.parse(localStorage.getItem('users'))||[]);
    console.log('users',users);
    

    return (
        <UserStore.Provider value={{isLoggedIn,setIsLoggedIn,users,setUsers,isNewUser,setIsNewUser}} >
            {children}
        </UserStore.Provider>
    )
}