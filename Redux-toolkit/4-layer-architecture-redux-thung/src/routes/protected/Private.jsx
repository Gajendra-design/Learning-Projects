import React from 'react'
import { Navigate, Outlet } from 'react-router'
import Navbar from '../../shared/ui/components/Navbar'
import { useSelector } from 'react-redux'

const Private = () => {


const {isAuthorized, isLoading} = useSelector((state)=>state.auth)

if(!isAuthorized){
  return <Navigate to={'/'} />
}

  return (
    <div className="min-h-screen w-full bg-slate-950 text-slate-100 flex flex-col font-sans antialiased">
      {/* Sticky Top Navigation */}
      <Navbar />

      {/* Dynamic Page Content Wrapper */}
      <main className="flex-1 w-full flex flex-col">
        <Outlet />
      </main>
    </div>
  )
}

export default Private