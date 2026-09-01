import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'

const GuestLayout = () => {
  return (
    <div className='h-screen w-full bg-black text-white'>
        <Navbar/>
        <Outlet/>
    </div>
  )
}

export default GuestLayout