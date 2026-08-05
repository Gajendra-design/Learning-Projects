import React from 'react'
import LeftSideAuth from '../components/LeftSideAuth'
import LoginForm from '../components/LoginForm'
import RegisterForm from '../components/RegisterForm'
import { Outlet } from 'react-router'

const AuthPage = () => {
  return (
    <div className="min-h-screen w-full bg-slate-950 text-slate-100 flex flex-col lg:flex-row overflow-hidden font-sans">
      
      {/* Left Animated Branding Half */}
      <div className="lg:w-1/2 w-full min-h-[340px] lg:min-h-screen bg-gradient-to-br from-indigo-950 via-slate-950 to-black p-6 sm:p-10 flex items-center justify-center relative border-b lg:border-b-0 lg:border-r border-slate-800/80">
        <LeftSideAuth />
      </div>

      {/* Right Form Container Half */}
      <div className="lg:w-1/2 w-full min-h-screen flex flex-col justify-center items-center p-6 sm:p-12 relative bg-slate-950/95">
        
        {/* Glassmorphism Card Wrapper */}
        <div className="w-full max-w-md bg-slate-900/40 backdrop-blur-xl p-8 rounded-3xl border border-slate-800/80 shadow-2xl space-y-8">
          <Outlet/>
        </div>

      </div>
    </div>
  )
}

export default AuthPage