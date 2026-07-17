import React, { useContext } from 'react'
import { UserStore } from '../context/userStore';
import { FunctionStore } from '../context/FunctionalStore';

const Navbar = () => {
  const { isLoggedIn,setIsCartOpen,setIsYourRecipieOpen,setIsProfileOpen } = useContext(UserStore);
  const { handelLogOut } = useContext(FunctionStore);

  return (
    <div className='sticky top-0 z-50 w-full bg-gray-950/70 backdrop-blur-md border-b border-red-500/20 text-white shadow-xl shadow-black/10 transition-all duration-300'>
      <div className='w-full flex px-6  py-4 justify-between items-center'>
        
        {/* Logo Section */}
        <div className='flex items-center gap-2'>
          <p className='font-black text-2xl tracking-widest text-transparent bg-clip-text bg-linear-to-r from-red-500 to-orange-500 cursor-pointer hover:opacity-90 transition-opacity select-none'>
            COOK-SHOOK
          </p>
        </div>

        {/* Navigation Links */}
        {isLoggedIn && (
          <nav className='hidden md:flex gap-8 items-center'>
            <span onClick={()=>{
              setIsCartOpen(false);
              setIsYourRecipieOpen(false);
              setIsProfileOpen(false);
            }} className='font-medium text-sm tracking-wide text-gray-400 hover:text-red-500 cursor-pointer transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-red-500 hover:after:w-full after:transition-all after:duration-300'>
              Home
            </span>
            <span onClick={()=>{
              setIsCartOpen(true);
              setIsYourRecipieOpen(false);
              setIsProfileOpen(false);

              }} className='font-medium text-sm tracking-wide text-gray-400 hover:text-red-500 cursor-pointer transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-red-500 hover:after:w-full after:transition-all after:duration-300'>
              Cart
            </span>
            <span onClick={()=>{
              setIsCartOpen(false);
              setIsYourRecipieOpen(true);
              setIsProfileOpen(false);
              }} className='font-medium text-sm tracking-wide text-gray-400 hover:text-red-500 cursor-pointer transition-colors relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-red-500 hover:after:w-full after:transition-all after:duration-300'>
              Your Recipes
            </span>
          </nav>
        )}

        {/* Action Buttons Section */}
        {isLoggedIn ? (
          <div className='flex items-center gap-4'>
            {/* Styled Profile Button */}
            <button onClick={() => {
              setIsProfileOpen(true)
              setIsCartOpen(false);
              setIsYourRecipieOpen(false);
              }} className='px-4 py-2 text-sm font-medium text-gray-300 hover:text-white border border-gray-800 hover:border-gray-700 bg-gray-900/50 hover:bg-gray-900 rounded-xl cursor-pointer transition-all active:scale-98 focus:outline-none focus:ring-2 focus:ring-gray-800'>
              Profile
            </button>
            
            {/* Logout Button */}
            <button 
              onClick={() => handelLogOut()} 
              className='px-4 py-2 text-sm font-semibold bg-linear-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white rounded-xl cursor-pointer transition-all shadow-md shadow-red-950/50 active:scale-98 focus:outline-none focus:ring-2 focus:ring-red-500/40'
            >
              Log Out
            </button>
          </div>
        ) : (
          /* Fallback spacer or Login button could go here when logged out */
          <div className='w-37.5 md:block hidden'></div>
        )}

      </div>
    </div>
  )
}

export default Navbar