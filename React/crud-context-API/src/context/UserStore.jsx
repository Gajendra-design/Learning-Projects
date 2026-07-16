import { createContext, useState } from "react";

export const UserStore =  createContext();

export const UserStoreProvider = ({children})=>{
    // localStorage.clear()
    console.log('login status',JSON.parse(localStorage.getItem('loginStatus')));
    
    const [isLoggedIn, setIsLoggedIn] = useState(JSON.parse(localStorage.getItem('loginStatus'))||false)
    const [isNewUser, setIsNewUser] = useState(true)
    const [users,setUsers] = useState(JSON.parse(localStorage.getItem('users'))||[]);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isYourRecipieOpen, setIsYourRecipieOpen] = useState(false);

    console.log('users',users);
    console.log('cart open',isCartOpen);
    console.log('your recipie open',isYourRecipieOpen);
    
    

    return (
        <UserStore.Provider value={{
            isLoggedIn,
            setIsLoggedIn,
            users,
            setUsers,
            isNewUser,
            setIsNewUser,
            isCartOpen,
            setIsCartOpen,
            isYourRecipieOpen,
            setIsYourRecipieOpen
            }} >
            {children}
        </UserStore.Provider>
    )
}