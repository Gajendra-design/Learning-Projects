  //CRITIACL DATA HANDELING: although humre isse koi bug nahi aa raha hai but just for fine data handeling
//hamari userrecipie array me aage jake quantity,email,userName jud ja rahe hai wo koi kaam ke nahi hai so we have to prevent it 
//now i have fund where the issue lies it is in editRecipieData because we are passing it for in too many places we also pass it for some senariors where we are updating user and in that userRecipies so for that reson userRecipie update hoke mentioned fileds apne andar add kar le raha hai because of editRecipieData ke karan now isko handel karne ke liye bhout mathapacci hai so i am leaving it as it is

import { createContext, useContext } from "react";
import { UserStore } from "./userStore";

export const FunctionStore = createContext()

export const FunctionStoreProvider = ({ children }) => {

    const { users, setUsers, setIsLoggedIn, isLoggedIn, currentUser, setCurrentUser, setIsCartOpen, setIsYourRecipieOpen, setIsFullPageRecipieFormOpen, setIsInspectBluePrintOpen, editRecipeData, setEditRecipeData, isInspectBluePrintOpen } = useContext(UserStore)

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
        // console.log(data);

        let updateCurrentUser = null;
        let updatedUsers = null;


        //this is updating the existing card
        if (editRecipeData) {

            // update karna hai current user ke your recipies ko
            const updateUserRecipies = currentUser.userRecipies.map((recipie) => {
                return data.id === recipie.id ? data : recipie
            })

            //update user
            updatedUsers = users.map((user) => {
                if (user.email === currentUser.email) {
                    updateCurrentUser = { ...user, userRecipies: updateUserRecipies };
                    return updateCurrentUser
                }
                return user;
            })
        } else {  //this is for adding the card iin user recipie

            // update karo users data ko in locak and state array me kisi ek part ko update karna hai tho map ka use hoga
            updatedUsers = users.map((user) => {


                if (currentUser.email === user.email) {
                    //updating current user here
                    const updateValue = { ...user, userRecipies: [...user.userRecipies, { ...data, id: Date.now(), isCartItem: false }] };
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

    const handelDeleteRecipie = (data) => {

        //remember agar sidha setCurrentUser hum karge user koupdate karthe hue map ke though tho it will becomeinfinitecalling loop soo iss liye phale hi set karlo apne updated user
        let updateCurrentUser = null;

        //update current user ki userRecipies
        const updatedUserRecipies = currentUser.userRecipies.filter((recipie) => {
            return recipie.id !== data.id
        })

        //IMPORTANT: i have missed it that was the bug till now 
        //you have to update user's cart items also becaus what if that deleting product is in user's cart list too so for that reason update the cart too
        const updateUserCartItems = currentUser.cartItems.filter((item) => {
            return item.id !== data.id
        })

        //now update users
        const updatedUsers = users.map((user) => {
            if (user.email === currentUser.email) {
                //here we are updating current user
                updateCurrentUser = { ...user, userRecipies: updatedUserRecipies, cartItems: updateUserCartItems }
                return updateCurrentUser;
            }
            return user;
        })

        //now update useState and localStorage
        localStorage.setItem('users', JSON.stringify(updatedUsers))
        localStorage.setItem('currentUser', JSON.stringify(updateCurrentUser))
        setUsers(updatedUsers);
        setCurrentUser(updateCurrentUser)

    }

    const handelAddToCart = (data, userName, email) => {

        // const updatedData = { ...data, isCartItem: true, quantitiy: 1 }
        let updateCurrentUser = null;

        // tasks
        // 1)humko dikhana hai main homeui pe heart laal so uske liye users ko update karna hoga kyu ki wo hum conditional rendering ke through hi kar sakthe hai humne userREcipies me isCartITem ki field rakh rakhi hai

        //first update user regarding IsCartItem
        const updatedUsers = users.map((user) => {
            if (user.email === email) {
                const updateUserRecipies = user.userRecipies.map((recipie) => {
                    if (recipie.id === data.id) {
                        const updatedData = { ...data, isCartItem: true }

                        return updatedData;
                    }
                    return recipie
                })
                return { ...user, userRecipies: updateUserRecipies }
            }

            return user
        })

        //2) humk users ke cart Item me bhi wo add karni hogi recipie

        //secondly update the current user or uske liye bhi users update hoga kyuki logout ke baad bhi sav tho rehna chaiye na data kis user ki cart me kitne items hai
        const finalUpdatedUser = updatedUsers.map((user) => {

            if (user.email === currentUser.email) {
                //updateUser and updateUsers alag alag hai confuse mat hona
                const updatedData = { ...data,quantitiy: 1 }
                const updatedUser = { ...user, cartItems: [...user.cartItems, { ...updatedData, userName, email }] }


                //3) humko current user bhi update karna hai kyu ki hum cart section me current user ke through hi cart items dikhane hai
                //so yaha pe current user bhi update kar rahe hai hum
                updateCurrentUser = updatedUser;
                return updatedUser
            }

            return user
        })

        //now uaha pe localStorage and useState bhi update karo
        localStorage.setItem('users', JSON.stringify(finalUpdatedUser))
        localStorage.setItem('currentUser', JSON.stringify(updateCurrentUser));
        setCurrentUser(updateCurrentUser)
        setUsers(finalUpdatedUser);
        return

    }

    const handelRemoveCart = (data, userName, email) => {
        let updateCurrentUser = null;

        //now this is very very important isme hum data ko destructe kar rahe hai and hum chathe hai ki jab hum cart me se item remove kare tho phir hamare recipie data me se quantitiy key jo humne addCart ke time add kari thi who hat jaye iske liye phale data jo ki recipie ka hai kisme quantity key aa rahi hogi ko destucte karege and usme [hale quantity phir ...newData matlab ki quantity ke alawa jitni bhi keys hai ko include kar lo so newData me ab sab fiels hogi siwaye quantity ke]
        const { quantitiy, ...newData } = data

        //now update isCartItem status to false but remeber newData ko de-strucre karna hai kyuki humkoquantity nahi chaiye ab recipie data me
        const updatedData = { ...newData, isCartItem: false }



        //first update the user regardin which user recipie is clicked and set isCArtItem to false
        const updatedUsers = users.map((user) => {

            //checking which user recipie card is clicked
            if (user.email === email) {
                const updatedUserRecipies = user.userRecipies.map((recipie) => {

                    //update the particular recipie card
                    if (recipie.id === data.id) {
                        return updatedData
                    }
                    return recipie
                })

                return { ...user, userRecipies: updatedUserRecipies }
            }

            return user;
        })


        //now make a final update for the users in which we will update the cartItems and in that we will update the currentUSers
        const finalUpdatedUsers = updatedUsers.map((user) => {

            //fiest find which user to update so we can update his cart so ye hum current user se akr sakthe hai
            if (user.email === currentUser.email) {
                //update his cart we can wasily remove the cart item through filter
                const updateCartItems = user.cartItems.filter((item) => {
                    return item.id !== data.id
                })

                //now our updated user for this and isse current user bhi update kar denge
                const updateUser = { ...user, cartItems: updateCartItems }

                //updateing current user
                updateCurrentUser = updateUser;

                //returning the updateUser so users can be upfated to its final form
                return updateUser
            }

            return user;
        })

        localStorage.setItem('users', JSON.stringify(finalUpdatedUsers))
        localStorage.setItem('currentUser', JSON.stringify(updateCurrentUser));
        setCurrentUser(updateCurrentUser)
        setUsers(finalUpdatedUsers);
        return;

    }

    const handelIncreaseQuantity = (data) => {
        //sabse phale update karo data koquantity karo increse 1 se        
        const updatedData = { ...data, quantitiy: data.quantitiy + 1 }

        // now update user and declare updatedCurrentUser for updating crrent user too because remember the infinite calling error
        let updateCurrentUser = null;
        
        const updatedUsers = users.map((user) => {
            // find the user whos cart need to get updated ofcource he is current user
            if (user.email === currentUser.email) {
                //now update userCart
                const updateUserCart = user.cartItems.map((item) => {
                    //find karo konsa cart item item update hoga by recipie card id
                    if (item.id === data.id) {
                        return updatedData
                    }
                    return item
                })

                //now we have updated user
                const updateUser = { ...user, cartItems: updateUserCart };
                //now we have update current user
                updateCurrentUser = updateUser;

                return updateUser;
            }

            return user;
        })


        //now uaha pe localStorage and useState bhi update karo
        localStorage.setItem('users', JSON.stringify(updatedUsers))
        localStorage.setItem('currentUser', JSON.stringify(updateCurrentUser));
        setCurrentUser(updateCurrentUser)
        setUsers(updatedUsers);

        //agar hum blue print view me hai tho wha pe hum editRecipie data se data view karwa rahe hai now upar humne sab update karwa diya hai so ye home screen me tho update kar dega sab kuch but ye blueprint view me updated nahi dekega live now for live sunc we have so update editRecipie data too for that reason
        if(isInspectBluePrintOpen){
            setEditRecipeData(updatedData)
        }

        return;
    }

    const handelDecreaseQuantity = (data) => {

        //handling negative or 0 quantity
        if (data.quantitiy === 1) {
            handelRemoveCart(data, data.userName, data.email);

            //agar hum blue print view me hai tho wha pe hum editRecipie data se data view karwa rahe hai now upar humne sab update karwa diya hai so ye home screen me tho update kar dega sab kuch but ye blueprint view me updated nahi dekega live now for live sunc we have so update editRecipie data too for that reason
            //jab humare paas quantity me 1 hi product ho tho editRescipie me se quantity hatao and fir isCartItem false karo kyuki waha add to cart button ki rendering humne isCArtItem jo ki editRecipieData se kari hai
            const { quantitiy, ...updateEditRecipeData } = data;
            const finalUpdateEditRecipieData = { ...updateEditRecipeData, isCartItem: false }
            setEditRecipeData(finalUpdateEditRecipieData)


            return;
        }

        //sabse phale update karo data koquantity karo increse 1 se
        const updatedData = { ...data, quantitiy: data.quantitiy - 1 }

        // now update user and declare updatedCurrentUser for updating crrent user too because remember the infinite calling error
        let updateCurrentUser = null;

        const updatedUsers = users.map((user) => {
            // find the user whos cart need to get updated ofcource he is current user
            if (user.email === currentUser.email) {
                //now update userCart
                const updateUserCart = user.cartItems.map((item) => {
                    //find karo konsa cart item item update hoga by recipie card id
                    if (item.id === data.id) {
                        return updatedData
                    }
                    return item
                })

                //now we have updated user
                const updateUser = { ...user, cartItems: updateUserCart };
                //now we have update current user
                updateCurrentUser = updateUser;

                return updateUser;
            }

            return user;
        })


        //now uaha pe localStorage and useState bhi update karo
        localStorage.setItem('users', JSON.stringify(updatedUsers))
        localStorage.setItem('currentUser', JSON.stringify(updateCurrentUser));
        setCurrentUser(updateCurrentUser)
        setUsers(updatedUsers);

        //agar hum blue print view me hai tho wha pe hum editRecipie data se data view karwa rahe hai now upar humne sab update karwa diya hai so ye home screen me tho update kar dega sab kuch but ye blueprint view me updated nahi dekega live now for live sunc we have so update editRecipie data too for that reason
        if(isInspectBluePrintOpen){
            setEditRecipeData(updatedData)
        }

        return;

    }




    return (
        <FunctionStore.Provider value={{
            handelAuth,
            handelLogOut,
            recipieFormSubmit,
            toggleFullPageRecipieFormOpen,
            toggleInspectBluePrintOpen,
            handelDeleteRecipie,
            handelAddToCart,
            handelRemoveCart,
            handelIncreaseQuantity,
            handelDecreaseQuantity
        }}>
            {children}
        </FunctionStore.Provider>
    )
}