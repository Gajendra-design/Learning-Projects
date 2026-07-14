import React from 'react'
import Navbar from './componants/Navbar'
import Auth from './componants/auth/Auth'

export const App = () => {
  return (
    <div className='h-screen w-full bg-gray-800 flex flex-col'>
      <Navbar/>
      <Auth/>
    </div>
  )
}
