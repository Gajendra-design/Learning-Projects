import React from 'react'
import Navbar from '../Components/Navbar'
import { Outlet } from 'react-router'

const MainLayout = () => {
    return (
        <div className='h-screen w-full flex flex-col bg-black text-white gap-5'>
            <Navbar />
            <Outlet />
        </div>
    )
}

export default MainLayout