import React, { createContext, useState } from "react";

export const MyStore = createContext();

export const MyStoreProvider = ({ children }) => {

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isProfileOpen,setIsProfileOpen] = useState(false);
  const [products,setProducts] = useState(JSON.parse(localStorage.getItem('products')) || [])
  
  console.log('is cart open',isCartOpen);
  console.log('is profile open',isProfileOpen);
  console.log('products in ls',JSON.parse(localStorage.getItem('products')));
  
  
  

  return (
    <MyStore.Provider
      value={{
        isCartOpen,
        setIsCartOpen,
        isProfileOpen,
        setIsProfileOpen,
        products,
        setProducts
      }}
    >
      {children}
    </MyStore.Provider>
  );
};