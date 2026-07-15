import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const MyStore = createContext();

export const MyStoreProvider = ({ children }) => {

    const [isCartOpen, setIsCartOpen] = useState(false);
    const [products, setProducts] = useState([]);
    const [cartItems, setCartItems] = useState([]);
    console.log(cartItems);



    //here we are getting data form the fakeStore api
    const getProducts = async (apiUrl) => {
        try {
            const productData = (await axios.get('https://fakestoreapi.com/products')).data
            setProducts(pre => productData)
        } catch (err) {
            console.log("Error in api", err);
        }
    }

    useEffect(() => { getProducts('https://fakestoreapi.com/products') }, [])

    const handelAddToCart = (data) => {
        const updateData = { ...data, quantity: 1 }
        setCartItems(pre => [...pre, updateData])
    }

    const incrementItemQuantity = (data) => {

        //ye mera code hai breakdown kara hua

        // const update = cartItems.map((item) => {
        //     return data.id === item.id ? { ...item, quantity: item.quantity + 1 } : item
        // })
        // setCartItems(update)

        //ye thoda advance hai upper wale ke likhe hue ka and jab useStste me prev pe devended hoke value change kkarniho tho hamesha direct prv ko hi change karo na direct
        setCartItems((pre)=>{
            return pre.map((item) => {
            return data.id === item.id ? { ...item, quantity: item.quantity + 1 } : item
        })
        })
    }

    const decrementItemQuantity = (data) => {

        //ye mera logic hai
        // const updateCartItems = cartItems.map((item)=>{
        //     return item.id === data.id ? {...item,quantity:item.quantity-1} : item
        // })  

        // const finalUpdateCartItem = updateCartItems.filter((item)=>{
        //     return item.quantity !== 0
        // })
        
        // setCartItems(finalUpdateCartItem)

        //ye bas usi ko short karke likha hua hai and remember prev pe depend kar rahi hai value so direct update karo setState me
        setCartItems((pre)=>{
           return pre.map((item)=>{
                return item.id === data.id ? {...item,quantity:item.quantity-1} : item
            }).filter((item)=>{
                return item.quantity !== 0;
            })
        })
        
    }




    return (<MyStore.Provider value={{
        isCartOpen,
        setIsCartOpen,
        products,
        setProducts,
        cartItems,
        setCartItems,
        handelAddToCart,
        incrementItemQuantity,
        decrementItemQuantity
    }}>
        {children}
    </MyStore.Provider>)
}