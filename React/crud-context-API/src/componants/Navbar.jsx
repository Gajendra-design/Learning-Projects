import React, { useContext } from 'react'
import { UserStore } from '../context/userStore';
import { FunctionStore } from '../context/FunctionalStore';

const Navbar = () => {
  const {isLoggedIn,setIsLoggedIn} = useContext(UserStore);
  const {handelLogOut} = useContext(FunctionStore);

  return (
    <div className='sticky top-0 z-50 flex p-4 px-6 bg-gray-950/80 backdrop-blur-md border-b border-red-500/30 justify-between items-center text-white shadow-lg shadow-black/20'>
  {/* Logo / Brand */}
  <div className='flex items-center gap-2'>
    <p className='font-black text-xl tracking-wider text-transparent bg-clip-text bg-linear-to-r from-red-500 to-red-400 cursor-pointer hover:opacity-90 transition-opacity'>
      LOGO
    </p>
  </div>

  {/* Navigation Links */}
  <nav className='flex gap-6 items-center'>
      <span className='font-medium text-sm text-gray-300 hover:text-red-500 cursor-pointer transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-red-500 hover:after:w-full after:transition-all'>
        Home
      </span>
    <span className='font-medium text-sm text-gray-300 hover:text-red-500 cursor-pointer transition-colors relative after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-red-500 hover:after:w-full after:transition-all'>
      Users
    </span>
  </nav>

  {/* Actions */}
  {isLoggedIn && 
  <div>
    <button onClick={()=>{handelLogOut()}} className='px-5 py-2 text-sm font-semibold bg-red-600 hover:bg-red-500 text-white rounded-lg cursor-pointer transition-all shadow-md shadow-red-900/20 active:scale-95 outline-none focus:ring-2 focus:ring-red-500/40'>
      Log Out
    </button>
  </div>}
</div>
  )
}

export default Navbar
