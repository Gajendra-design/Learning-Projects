import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../features/auth/authSlice'

const Navbar = () => {

  const dispatch = useDispatch()

  return (
    <div>Navbar <button
    onClick={()=>{dispatch(logout())}}
    className='bg-red-600 p-2 border border-transparent rounded cursor-pointer'>
      Logout
      </button>
      </div>
  )
}

export default Navbar