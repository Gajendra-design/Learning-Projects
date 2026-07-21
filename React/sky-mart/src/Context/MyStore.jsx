import React, { createContext, useState } from "react";

export const MyStore = createContext();

export const MyStoreProvider = ({ children }) => {

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isProfileOpen,setIsProfileOpen] = useState(false);
  const [products,setProducts] = useState(JSON.parse(localStorage.getItem('products')) || [])
  const [users,setUsers] = useState(JSON.parse(localStorage.getItem('users')) || [])
  const [loggedInUser,setLoggedInUser] = useState(JSON.parse(localStorage.getItem('loggedInUser')))  //now yaha pe humne || operator iss liye use nahi kiya kyu ki yaha pe agar ye local storage me nahi hua tho null hii return karega and humko bhi tab null hi set karna hai
  
  console.log('is cart open',isCartOpen);
  console.log('is profile open',isProfileOpen);
  console.log('products in ls',JSON.parse(localStorage.getItem('products')));
  
  const handelRegister = (data)=>{
    console.log('register data',data);
  }

  const handelLogin = (data)=>{
    console.log('login data',data);
  }

  const handelLogout = ()=>{

  }
  

  return (
    <MyStore.Provider
      value={{
        isCartOpen,
        setIsCartOpen,
        isProfileOpen,
        setIsProfileOpen,
        products,
        setProducts,
        handelRegister,
        handelLogin,
        users,
        setUsers,
        handelLogin,
        loggedInUser,
        setLoggedInUser
      }}
    >
      {children}
    </MyStore.Provider>
  );
};