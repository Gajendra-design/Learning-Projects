import React from 'react'
import { ShieldCheck, Sparkles, Layers, Lock } from 'lucide-react'

const LeftSideAuth = () => {
  return (
    <div className="relative w-full h-full flex flex-col justify-between p-8 lg:p-12 overflow-hidden select-none">
      {/* Background Animated Glows */}
      <div className="absolute top-1/4 -left-10 w-72 h-72 bg-indigo-500/25 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000" />

      {/* Top Branding / Logo */}
      <div className="relative z-10 flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center font-bold text-white shadow-lg shadow-indigo-500/30">
          <Layers className="w-5 h-5 text-white" />
        </div>
        <span className="text-xl font-bold tracking-wide text-white">
          Acme<span className="text-indigo-400">Inc</span>
        </span>
      </div>

      {/* Central Animated Graphic */}
      <div className="relative z-10 my-auto py-12 flex flex-col items-center justify-center text-center">
        <div className="relative w-48 h-48 sm:w-64 sm:h-64 flex items-center justify-center">
          {/* Outer Rotating Ring */}
          <div className="absolute inset-0 rounded-full border-2 border-dashed border-indigo-500/40 animate-[spin_20s_linear_infinite]" />
          {/* Inner Reverse Rotating Ring */}
          <div className="absolute inset-4 rounded-full border-2 border-dashed border-purple-500/30 animate-[spin_15s_linear_infinite_reverse]" />
          
          {/* Floating Core Card */}
          <div className="w-32 h-32 bg-slate-900/80 backdrop-blur-md rounded-2xl border border-slate-700/60 shadow-2xl flex flex-col items-center justify-center gap-2 transform hover:scale-105 transition-transform duration-300">
            <div className="w-10 h-10 rounded-full bg-indigo-600/20 flex items-center justify-center text-indigo-400">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <span className="text-xs font-semibold text-slate-300 flex items-center gap-1">
              Protected <Sparkles className="w-3 h-3 text-indigo-400" />
            </span>
          </div>
        </div>

        <h2 className="mt-8 text-2xl lg:text-3xl font-bold text-white">
          Secure & Powerful Access
        </h2>
        <p className="mt-2 text-sm text-slate-400 max-w-sm">
          Manage your account, track workspace updates, and collaborate seamlessly in one place.
        </p>
      </div>

      {/* Footer Info */}
      <div className="relative z-10 border-t border-slate-800/80 pt-4 text-xs text-slate-500 flex justify-between items-center">
        <span>© 2026 Acme Inc.</span>
        <span className="hover:text-slate-400 cursor-pointer transition-colors">Privacy & Terms</span>
      </div>
    </div>
  )
}

export default LeftSideAuth