import { createContext, useState } from "react";

export const MyStore = createContext();

export const MyStoreProvider = ({children}) => {

 const [users,setUsers] = useState(JSON.parse(localStorage.getItem('users')) || []);
 const [loggedInUser,setLoggedInUser] = useState(JSON.parse(localStorage.getItem('loggedInUser')));

 console.log(users);
 console.log(loggedInUser);
//  localStorage.clear()
 

 const handelRegister = (data)=>{

    const isUserExists = users.some(user => user.email === data.email);

    if(isUserExists){
        alert('this user already exists in our db');
        return false;
    }

     const updatedUses = [...users,data];
    localStorage.setItem('users',JSON.stringify(updatedUses));
    localStorage.setItem('loggedInUser',JSON.stringify(data))
    setUsers(updatedUses);
    setLoggedInUser(data);
    return true;
 }

 const handelLogin = (data)=>{

    const isUserRegisterd = users.find(user => ((user.email===data.email)&&user.password===data.password))

    if(!isUserRegisterd){
        alert('user is not registerd in our db');
        return false;
    }

    localStorage.setItem('loggedInUser',JSON.stringify(isUserRegisterd))
    setLoggedInUser(isUserRegisterd)
    return true
 }

 const handelLogout = () => {
   localStorage.removeItem('loggedInUser')
 }
    
   return (
         <MyStore.Provider value={{
            users,
            setUsers,
            loggedInUser,
            setLoggedInUser,
            handelRegister,
            handelLogin,
            handelLogout
         }}>
            {children}
        </MyStore.Provider>
    );
}