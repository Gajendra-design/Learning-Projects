import React, { useContext } from 'react'
import Home from './Pages/Home'
import HomeSidebar from './Sidebars/HomeSidebar'
import { UserStore } from '../context/userStore'
import CartSidebar from './Sidebars/CartSidebar'
import Cart from './Pages/Cart'
import YourRecipie from './Pages/YourRecipie'
import YourRecipieSidebar from './Sidebars/YourRecipieSidebar'

const Layout = () => {
  const { isCartOpen, isYourRecipieOpen } = useContext(UserStore)

  return (
    <div className='flex-1 flex overflow-hidden bg-gray-950 text-white w-full'>
       {
        isCartOpen ? (
          <>
            <CartSidebar />
            <div className='flex-1 overflow-y-auto bg-gray-950 p-6'><Cart /></div>
          </>
        ) : isYourRecipieOpen ? (
          <>
            <YourRecipieSidebar />
            <div className='flex-1 overflow-y-auto bg-gray-950 p-6'><YourRecipie /></div>
          </>
        ) : (
          <>
            <HomeSidebar />
            <Home />
          </>
        )
       }
    </div>
  )
}

export default Layout