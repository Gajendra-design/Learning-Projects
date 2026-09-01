import React from 'react'
import { Outlet } from 'react-router'

const Auth = () => {
  return (
    <div className='h-screen w-full flex gap-6 justify-center p-6 items-center' >
      <h1>Auth page</h1>
      <Outlet/>
    </div>
  )
}

export default Auth
