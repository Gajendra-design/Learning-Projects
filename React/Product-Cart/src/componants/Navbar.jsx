import React, { useContext } from 'react'
import { MyStore } from '../Context/MyStore'

const Navbar = () => {

    const {setIsCartOpen,cartItems} = useContext(MyStore)

    return (
        <nav className="bg-slate-900 border-b border-slate-800 px-6 py-4 flex items-center justify-between">
            <div className="flex items-center space-x-2">
                <svg className="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                </svg>
                <span className="text-xl font-bold tracking-tight text-white">BrandName</span>
            </div>

            <div className="flex items-center space-x-8">
                <a onClick={()=>{setIsCartOpen(false)}} href="#" className="text-sm font-medium text-slate-300 hover:text-indigo-400 transition-colors">
                    Home
                </a>

                <a onClick={()=>{setIsCartOpen(true)}} href="#" className="flex items-center space-x-1.5 text-sm font-medium text-slate-300 hover:text-indigo-400 transition-colors">
                    <span>Cart</span>
                    <span className="bg-indigo-950 text-indigo-300 text-xs font-semibold px-2 py-0.5 rounded-full border border-indigo-800">
                        {cartItems.length}
                    </span>
                </a>
            </div>

            <div>
                <button type="button" className="text-sm font-medium text-slate-300 hover:text-red-400 border border-slate-800 hover:border-red-900/50 px-4 py-2 rounded-lg bg-slate-950 hover:bg-red-950/30 transition-all">
                    Logout
                </button>
            </div>
        </nav>
    )
}

export default Navbar
