import React, { createContext, useState } from "react";

export const MyStore = createContext();

export const MyStoreProvider = ({ children }) => {

  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isProfileOpen,setIsProfileOpen] = useState(false);
  console.log(isCartOpen);
  

  return (
    <MyStore.Provider
      value={{
        isCartOpen,
        setIsCartOpen,
        isProfileOpen,
        setIsProfileOpen
      }}
    >
      {children}
    </MyStore.Provider>
  );
};