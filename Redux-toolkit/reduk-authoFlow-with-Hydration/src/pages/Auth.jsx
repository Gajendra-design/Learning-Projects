import React from 'react'
import { Outlet } from 'react-router'

const Auth = () => {
  return (
    <div className="min-h-screen flex text-slate-800 bg-slate-50 antialiased">
      
      {/* LEFT SIDE: Visual Showcase (Static across Login & Register) */}
      <div className="hidden lg:flex lg:w-1/2 bg-slate-950 relative overflow-hidden flex-col justify-between p-12">
        
        {/* Background Blur Accents */}
        <div className="absolute -top-24 -left-24 w-96 h-96 bg-indigo-600/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none" />
        
        {/* Mesh Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f293712_1px,transparent_1px),linear-gradient(to_bottom,#1f293712_1px,transparent_1px)] bg-[size:24px_24px]" />

        {/* Branding Header */}
        <div className="relative z-10 flex items-center gap-3">
          <div className="h-10 w-10 bg-indigo-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-500/30">
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </div>
          <span className="text-white text-xl font-bold tracking-wide">Nexus<span className="text-indigo-500">App</span></span>
        </div>

        {/* Glass Card Showcase */}
        <div className="relative z-10 my-auto max-w-md">
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 shadow-2xl relative">
            
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-mono px-3 py-1 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded-full flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                System Operational
              </span>
              <svg className="w-5 h-5 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>

            <h2 className="text-2xl font-bold text-white mb-2 leading-tight">
              Build, Deploy, & Scale Faster Than Ever.
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Access your unified workspace dashboard, manage active workflows, and monitor system analytics in real time.
            </p>

            <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/10">
              <div>
                <p className="text-xs text-slate-400">Uptime</p>
                <p className="text-base font-bold text-white">99.99%</p>
              </div>
              <div>
                <p className="text-xs text-slate-400">Latency</p>
                <p className="text-base font-bold text-white">&lt; 12ms</p>
              </div>
              <div>
                <p className="text-xs text-slate-400">Security</p>
                <p className="text-base font-bold text-emerald-400">E2E Encr.</p>
              </div>
            </div>

          </div>
        </div>

        {/* Footer */}
        <div className="relative z-10 text-xs text-slate-500 flex justify-between items-center">
          <p>&copy; 2026 Nexus Inc. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms</a>
          </div>
        </div>

      </div>

      {/* RIGHT SIDE: Dynamic Outlet Container */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 bg-white">
        <div className="w-full max-w-md space-y-8">
          
          {/* Mobile Logo Header */}
          <div className="lg:hidden flex items-center gap-3">
            <div className="h-9 w-9 bg-indigo-600 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
            <span className="text-slate-900 font-bold text-lg">NexusApp</span>
          </div>

          {/* Form Content Renders Here */}
          <Outlet />

        </div>
      </div>

    </div>
  )
}

export default Auth