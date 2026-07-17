import { createContext, useContext } from "react";
import { UserStore } from "./userStore";

export const FunctionStore = createContext()

export const FunctionStoreProvider = ({ children }) => {

    const { users, setUsers, setIsLoggedIn, isLoggedIn, currentUser, setCurrentUser, setIsCartOpen, setIsYourRecipieOpen, setIsFullPageRecipieFormOpen, setIsInspectBluePrintOpen,editRecipeData, setEditRecipeData } = useContext(UserStore)

    const handelAuth = (data, servise) => {

        if (servise === 'register') {
            const check = register(data);
            if (!check)
                return;
        }

        if (servise === "login") {
            const check = login(data);
            if (!check)
                return;
        }

        const loginStatus = !isLoggedIn;
        localStorage.setItem('loginStatus', JSON.stringify(loginStatus))
        setIsLoggedIn(loginStatus);

    }

    const register = (data) => {
        const isUserExists = users.find((user) => { return data.email === user.email })

        if (isUserExists) {
            alert('This Email already exists in our DB');
            return false;
        }

        const updatedData = { ...data, cartItems: [], userRecipies: [] }
        const updatedUsers = [...users, updatedData];
        localStorage.setItem('users', JSON.stringify(updatedUsers));
        localStorage.setItem('currentUser', JSON.stringify(updatedData))
        setUsers(updatedUsers);
        setCurrentUser(updatedData)
        return true;
    }

    const login = (data) => {
        const isUserExists = users.find((user) => { return ((data.email === user.email) && (data.password === user.password)) })

        if (!isUserExists) {
            alert("your Login credentials are wrong, please check them before Login")
            return false;
        }

        localStorage.setItem('currentUser', JSON.stringify(isUserExists))
        setCurrentUser(isUserExists)

        return true;
    }

    const handelLogOut = () => {
        const loginStatus = !isLoggedIn;
        localStorage.setItem('loginStatus', JSON.stringify(loginStatus))
        localStorage.removeItem('currentUser')
        setCurrentUser(null)
        setIsLoggedIn(loginStatus);
        setIsCartOpen(false);
        setIsYourRecipieOpen(false);
    }

    const recipieFormSubmit = (data) => {

        let updateCurrentUser = null;
        let updatedUsers = null;


        //this is updating the existing card
        if(editRecipeData){

            // update karna hai current user ke your recipies ko
            const updateUserRecipies = currentUser.userRecipies.map((recipie)=>{
                return data.id === recipie.id ? data : recipie
            }) 

            //update user
            updatedUsers = users.map((user)=>{
                if(user.email === currentUser.email){
                    updateCurrentUser = {...user,userRecipies:updateUserRecipies};
                    return updateCurrentUser
                }
                return user;
            })
        }else{  //this is for adding the card iin user recipie

            // update karo users data ko in locak and state array me kisi ek part ko update karna hai tho map ka use hoga
        updatedUsers = users.map((user) => {


            if (currentUser.email === user.email) {
                //updating current user here
                const updateValue = { ...user, userRecipies: [...user.userRecipies, { ...data, id: Date.now() }] };
                updateCurrentUser = updateValue

                //important ERROR: jab hum yaha pe hi current user ki state ko update kar rahe the by using setCurrentUser then it was becaming an infinite loop and it is casusing applicaion crash if not AI i woudn't have found it
                // setCurrentUser(updateValue)

                return updateValue
            }

            return user;
        })
        }


        //updating users here
        localStorage.setItem('users', JSON.stringify(updatedUsers))
        localStorage.setItem('currentUser', JSON.stringify(updateCurrentUser));
        setCurrentUser(updateCurrentUser)
        setUsers(updatedUsers);
        setIsFullPageRecipieFormOpen(false);
        setEditRecipeData(null)
        

        return;
    }

    const toggleFullPageRecipieFormOpen = () => {
        setIsFullPageRecipieFormOpen(pre => !pre)
    }

    const toggleInspectBluePrintOpen = () => {
        setIsInspectBluePrintOpen(pre => !pre)
    }

    const handelDeleteRecipie = (data)=>{

        //remember agar sidha setCurrentUser hum karge user koupdate karthe hue map ke though tho it will becomeinfinitecalling loop soo iss liye phale hi set karlo apne updated user
        let updateCurrentUser = null;
        
        //update current user ki userRecipies
        const updatedUserRecipies = currentUser.userRecipies.filter((recipie)=>{
            return recipie.id !== data.id
        })

        //now update users
        const updatedUsers = users.map((user)=>{
            if(user.email === currentUser.email){
                //here we are updating current user
                updateCurrentUser = {...user,userRecipies:updatedUserRecipies}
                return updateCurrentUser;
            }
            return user;
        }) 

        //now update useState and localStorage
        localStorage.setItem('users',JSON.stringify(updatedUsers))
        localStorage.setItem('currentUser',JSON.stringify(updateCurrentUser))
        setUsers(updatedUsers);
        setCurrentUser(updateCurrentUser)
        
    }




    return (
        <FunctionStore.Provider value={{
            handelAuth,
            handelLogOut,
            recipieFormSubmit,
            toggleFullPageRecipieFormOpen,
            toggleInspectBluePrintOpen,
            handelDeleteRecipie,
        }}>
            {children}
        </FunctionStore.Provider>
    )
}