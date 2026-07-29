import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <div className='flex gap-4 border-b border-b-white p-3'>
        <NavLink to='/'>App</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
    </div>
  )
}

export default Navbar