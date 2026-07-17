import { createContext, useState } from "react";

export const UserStore =  createContext();

export const UserStoreProvider = ({children})=>{
    // localStorage.clear()
    
    const [isLoggedIn, setIsLoggedIn] = useState(JSON.parse(localStorage.getItem('loginStatus'))||false)
    const [isNewUser, setIsNewUser] = useState(true)
    const [users,setUsers] = useState(JSON.parse(localStorage.getItem('users')) || []);
    const [isCartOpen, setIsCartOpen] = useState(false);
    const [isYourRecipieOpen, setIsYourRecipieOpen] = useState(false);
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem('currentUser')) || null)
    const [isFullPageRecipieFormOpen,setIsFullPageRecipieFormOpen] = useState(false)
    const [isInspectBluePrintOpen,setIsInspectBluePrintOpen] = useState(false)
    const [editRecipeData,setEditRecipeData] = useState(null)
    const [isProfileOpen,setIsProfileOpen] = useState(false)


    console.log('login status',isLoggedIn);
    console.log('users',users);
    console.log('current user',currentUser);
    console.log('edit recipie data',editRecipeData);
    
    
    
    

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
            setIsYourRecipieOpen,
            currentUser,
            setCurrentUser,
            isFullPageRecipieFormOpen,
            setIsFullPageRecipieFormOpen,
            isInspectBluePrintOpen,
            setIsInspectBluePrintOpen,
            editRecipeData,
            setEditRecipeData,
            isProfileOpen,
            setIsProfileOpen
            }} >
            {children}
        </UserStore.Provider>
    )
}