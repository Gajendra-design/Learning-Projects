import React, { useContext } from 'react'
import Navbar from './componants/Navbar'
import Auth from './componants/auth/Auth'
import { UserStore } from './context/userStore'
import Layout from './componants/Layout'

export const App = () => {

  const {isLoggedIn} = useContext(UserStore)

  return (
    <div className='h-screen w-full bg-gray-800 flex flex-col'>
      <Navbar/>
      { isLoggedIn ? <Layout/> : <Auth/>}
    </div>
  )
}
