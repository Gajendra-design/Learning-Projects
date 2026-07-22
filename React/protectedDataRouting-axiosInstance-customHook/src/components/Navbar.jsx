import React, { useContext } from 'react'
import { MyStore } from '../Context/MyStore'
import { useNavigate } from 'react-router'

const Navbar = () => {

  const {handelLogout} = useContext(MyStore)
  const navigate = useNavigate();

  return (
    <nav className="w-full bg-stone-900/60 backdrop-blur-xl border-b border-stone-800 px-6 py-4 shadow-xl shadow-orange-950/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        
        {/* Brand / Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-orange-500/20 to-amber-500/20 border border-orange-500/30 flex items-center justify-center text-orange-400">
            {/* Brand Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <span className="text-xl font-bold tracking-tight text-white">
            App<span className="text-orange-400">.</span>
          </span>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center gap-2 bg-stone-950/60 p-1.5 rounded-xl border border-stone-800">
          <span onClick={()=>{navigate('/home')}} className="px-4 py-2 text-sm font-medium text-stone-300 hover:text-white hover:bg-stone-800/60 rounded-lg transition-all duration-200">Users</span>
          <span onClick={()=>{navigate('/home/products')}} className="px-4 py-2 text-sm font-medium text-stone-300 hover:text-white hover:bg-stone-800/60 rounded-lg transition-all duration-200">Products</span>
        </div>

        {/* Logout Button */}
        <div>
          <button
          onClick={()=>{
            handelLogout();
            navigate('/')
          }}
            type="button"
            className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-orange-400 bg-orange-500/10 border border-orange-500/30 hover:bg-orange-500/20 active:bg-orange-500/30 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 focus:ring-offset-stone-900"
          >
            {/* Logout Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            Logout
          </button>
        </div>

      </div>
    </nav>
  )
}

export default Navbar