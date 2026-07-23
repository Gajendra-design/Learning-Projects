import React, { createContext, useState } from "react";
import { useNavigate } from "react-router";

export const MyStore = createContext();

export const MyStoreProvider = ({ children }) => {

  // localStorage.clear()

  //yaha pe ye use nahi kar sakthe hai kyu ki ye wrap nahi ahi browserRouter me so useNaviagte ke liye jis component me use ho raha hai wo wrap hona chaiye BrowserRouter me
  // const navigate = useNavigate(); //this is for navigating user when he do regiter,login and logout bhai

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isProfileOpen,setIsProfileOpen] = useState(false);
  const [products,setProducts] = useState(JSON.parse(localStorage.getItem('products')) || [])
  const [users,setUsers] = useState(JSON.parse(localStorage.getItem('users')) || [])
  const [loggedInUser,setLoggedInUser] = useState(JSON.parse(localStorage.getItem('loggedInUser')))  //now yaha pe humne || operator iss liye use nahi kiya kyu ki yaha pe agar ye local storage me nahi hua tho null hii return karega and humko bhi tab null hi set karna hai
  
  // console.log('is cart open',isCartOpen);
  // console.log('is profile open',isProfileOpen);
  // console.log('products in ls',JSON.parse(localStorage.getItem('products')));
  // console.log('users',users);
  // console.log('Logged in user',loggedInUser);
  
  
  
  const handelRegister = (data)=>{

    //first check if user exists in our db or not
    const isUserExites = users.some((user)=>{return user.email === data.email})  ///yaha pe return lagana bhul gaye the tho logic e BB ko gaye
  
    if(isUserExites){
      alert('this Email already exists in our DB')
      return false
    }

    //we will make make a cartItems so we can can handel user's cartItems also with hit auth credentilsa bhai
    const updatedData = {...data,cartItems:[]} //loggedin user ki state ko update karege tho syncronouly phale apan loggedin user ka updated data bana lenge phale
    const updatedUsers = [...users,updatedData]; //users ki state ko update karege tho syncronouly phale apan uasers updated data bana lenge phale

    //now apan set karge updated data in local storage and useState also 
    localStorage.setItem('users',JSON.stringify(updatedUsers))  //data ko stringify karna mat bhul jana nahi tho error aayega 
    localStorage.setItem('loggedInUser',JSON.stringify(updatedData)) 
    setUsers(updatedUsers);
    setLoggedInUser(updatedData);

    return true;

  }

  const handelLogin = (data)=>{

    //hum chack karege ki user jo hai hamare DB me exists karta hai ki nahi
    const isUserExists = users.find((user)=>{return ((user.email === data.email) && (user.password === data.password))})  //now yaha pe hum some bhi use kar sakthe the but kyu ki wo data humko loggedin user me bhi se karna hai so iss liye find method use kiya hai

    //checking if user existe or not
    if(!isUserExists){
      alert("this user doesn't exits in our DB please check your credentials")
      return false;
    }


    //now apan set karge updated data in local storage and useState also 
    localStorage.setItem('loggedInUser',JSON.stringify(isUserExists)) 
    setLoggedInUser(isUserExists);
    return true
  }

  const handelLogout = ()=>{

    //logged in user ko karo null ya hata do usko local storage se wo useState me bhi apne aap null ho jayega
    localStorage.setItem('loggedInUser',JSON.stringify(null))
    setLoggedInUser(null) 

    
    //agar profile view open hai tho unko bhi false karo
    if(isProfileOpen){
      setIsProfileOpen(false)
    }

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
        handelLogout,
        loggedInUser,
        setLoggedInUser
      }}
    >
      {children}
    </MyStore.Provider>
  );
};