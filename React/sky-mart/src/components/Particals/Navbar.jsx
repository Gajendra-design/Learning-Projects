import React, { useContext } from 'react';
import { ShoppingCart, User, LogOut, Store } from 'lucide-react';
import { Link, NavLink, useNavigate } from 'react-router';
import { MyStore } from '../../Context/MyStore';

export default function Navbar() {

  // const navigate = useNavigate(); //we are not usingthis because by changing link we can't apply moving animation for the slidebar of cart insted we will use useState for toggling the view

  const { setIsCartOpen, setIsProfileOpen, handelLogout, loggedInUser } = useContext(MyStore);
  const navigate = useNavigate();  //we are using it for loguout button

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-3 py-4 flex items-center justify-between">
      {/* Brand / Logo */}
      <div className="flex items-center space-x-2">
        <Store className="h-7 w-7 text-indigo-400" />
        <span className="text-xl font-bold tracking-wider text-white">
          SKY<span className="text-indigo-400">MART</span>
        </span>
      </div>

      {/* Navigation Links */}
      <div className="hidden md:flex items-center space-x-8">
        <NavLink to="/" className="text-slate-300 hover:text-white transition-colors duration-200 font-medium">
          Home
        </NavLink>
        <NavLink to="/shop/all" className="text-slate-300 hover:text-white transition-colors duration-200 font-medium">
          Shop
        </NavLink>
        <NavLink to="/about" className="text-slate-300 hover:text-white transition-colors duration-200 font-medium">
          About
        </NavLink>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center space-x-3">
        {/* Profile Button */}
        <button
          title={loggedInUser?.fullName || 'Profile'}
          onClick={() => setIsProfileOpen(true)}
          aria-label="Profile"
          className="w-10 h-10 rounded-full bg-indigo-500/10 hover:bg-indigo-500 border border-indigo-500/30 hover:border-indigo-500/50 text-indigo-400 hover:text-white font-bold text-sm flex items-center justify-center shrink-0 uppercase transition-all duration-200 cursor-pointer shadow-sm active:scale-95"
        >
          {loggedInUser?.fullName ? loggedInUser.fullName.charAt(0) : <User className="w-5 h-5" />}
        </button>

        {/* Cart Button */}
        <button
          title="cart"
          // onClick={() => navigate('/cart')}  //we are not usingthis because by changing link we can't apply moving animation for the slidebar of cart insted we will use useState for toggling the view
          onClick={() => { setIsCartOpen(true) }}
          aria-label="Cart"
          className="p-2.5 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-200 hover:text-white transition-all duration-200 border border-slate-700/50 shadow-sm relative"
        >
          <ShoppingCart className="h-5 w-5" />
        </button>

        {/* Logout Button */}
        <button
          onClick={() => {
            navigate('/auth')
            handelLogout()
          }}
          title="logout"
          aria-label="Logout"
          className="p-2.5 rounded-full bg-slate-800/80 hover:bg-red-500/20 hover:border-red-500/50 text-slate-200 hover:text-red-400 transition-all duration-200 border border-slate-700/50 shadow-sm"
        >
          <LogOut className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}