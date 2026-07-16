import React from 'react'
import { NavLink } from 'react-router'
import AppRoutes from './AppRoutes'

const Navbar = () => {
  return (
    <nav className="bg-slate-900 text-white shadow-md">
  <div className="max-w-6xl mx-auto px-4">
    <div className="flex justify-between items-center h-16">
      
      <div className="flex-shrink-0">
                  MySite

      </div>

      <div className="hidden md:flex space-x-8 font-medium">
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
      </div>
      </div>
      </div>      
</nav>
  )
}

export default Navbar
