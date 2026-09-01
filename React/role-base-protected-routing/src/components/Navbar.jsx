import React from 'react'
import { NavLink } from 'react-router'

const Navbar = () => {
  return (
    <div className='border-b border-b-white p-4 flex items-center justify-between'>
      <div className='flex gap-4'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/about'>About</NavLink>
        <NavLink to='/contact'>Contact</NavLink>
      </div>

      <div className='flex gap-4'>
        <NavLink to='/auth'>Login</NavLink>
        <NavLink to='/auth/register'>register</NavLink>
      </div>
    </div>
  )
}

export default Navbar
