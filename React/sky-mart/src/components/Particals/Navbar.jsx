import React from 'react';
import { ShoppingCart, User, LogOut, Store } from 'lucide-react';
import { NavLink } from 'react-router';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/40 backdrop-blur-xl border-b border-slate-800/60 text-slate-100 px-6 py-4 flex items-center justify-between shadow-2xl shadow-slate-950/50 transition-all duration-300">
      
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
        <NavLink to="/about" className="text-slate-300 hover:text-white transition-colors duration-200 font-medium">
          Shop
        </NavLink>
        <NavLink to="/cart" className="text-slate-300 hover:text-white transition-colors duration-200 font-medium">
          Cart
        </NavLink>
      </div>

      {/* Action Buttons */}
      <div className="flex items-center space-x-3">
        {/* Profile Button */}
        <button
          title="profile"
          aria-label="Profile"
          className="p-2.5 rounded-full bg-slate-900/60 hover:bg-slate-800 text-slate-200 hover:text-white transition-all duration-200 border border-slate-700/50 shadow-sm backdrop-blur-sm"
        >
          <User className="h-5 w-5" />
        </button>

        {/* Cart Button */}
        <button
          title="cart"
          aria-label="Cart"
          className="p-2.5 rounded-full bg-slate-900/60 hover:bg-slate-800 text-slate-200 hover:text-white transition-all duration-200 border border-slate-700/50 shadow-sm relative backdrop-blur-sm"
        >
          <ShoppingCart className="h-5 w-5" />
        </button>

        {/* Logout Button */}
        <button
          title="logout"
          aria-label="Logout"
          className="p-2.5 rounded-full bg-slate-900/60 hover:bg-red-500/20 hover:border-red-500/50 text-slate-200 hover:text-red-400 transition-all duration-200 border border-slate-700/50 shadow-sm backdrop-blur-sm"
        >
          <LogOut className="h-5 w-5" />
        </button>
      </div>

    </nav>
  );
}