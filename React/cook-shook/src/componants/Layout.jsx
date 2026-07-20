import React, { useContext } from 'react'
import Home from './Pages/Home'
import HomeSidebar from './Sidebars/HomeSidebar'
import { UserStore } from '../context/userStore'
import CartSidebar from './Sidebars/CartSidebar'
import Cart from './Pages/Cart'
import YourRecipie from './Pages/YourRecipie'
import YourRecipieSidebar from './Sidebars/YourRecipieSidebar'
import FullPageRecipieForm from './Pages/FullPageRecipieForm'
import InspectBluePrint from './Pages/InspectBluePrint'
import Profile from './Pages/Profile'

const Layout = () => {
  const {
    isCartOpen,
    isYourRecipieOpen,
    isFullPageRecipieFormOpen,
    isInspectBluePrintOpen,
    isProfileOpen
  } = useContext(UserStore)

  return (
    <div className='flex-1 flex overflow-hidden bg-gray-950 text-white w-full relative'>
      {/* Primary Background Navigation Switch Grid */}
      {
        isCartOpen ? (
          <>
            <CartSidebar />
            <div className='flex-1 overflow-y-auto bg-gray-950 p-6 no-scrollbar'><Cart /></div>
          </>
        ) : isYourRecipieOpen ? (
          <>
            <YourRecipieSidebar />
            <div className='flex-1 overflow-y-auto bg-gray-950 p-6 no-scrollbar'><YourRecipie /></div>
          </>
        ) : (
          <>
            <HomeSidebar />
            <div className='flex-1 overflow-y-auto bg-gray-950 p-6 no-scrollbar'><Home /></div>
          </>
        )
      }

      {/* 
         ======================================================================
         INDEPENDENT FLOATING PORTAL OVERLAYS
         ======================================================================
         Renders cleanly on top, ensuring animations and backdrops are perfect.
       */}

      {/* 1. Full Screen Form Composer Modal */}
      {isFullPageRecipieFormOpen && <FullPageRecipieForm />}

      {/* 2. Master Blueprint Inspection View Overlay */}
      {isInspectBluePrintOpen && <InspectBluePrint />}

      {/* 3. Account Settings Right-Side Sliding Drawer Menu */}
      {/* Layout.jsx Layer Stack */}
      {(isProfileOpen || localStorage.getItem('profileRenderActive') === 'true') && <Profile />}
    </div>
  )
}

export default Layout