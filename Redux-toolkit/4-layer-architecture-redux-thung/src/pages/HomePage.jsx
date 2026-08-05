import React from 'react'
import { Sparkles, ArrowRight, Layers, ShieldCheck, Zap, TrendingUp } from 'lucide-react'

const HomePage = () => {
  return (
    <div className="min-h-[calc(100vh-65px)] bg-slate-950 text-slate-100 p-6 sm:p-10 font-sans">
      <div className="max-w-7xl mx-auto space-y-10">
        
        {/* Hero Banner */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-indigo-950 via-slate-900 to-slate-950 border border-slate-800 p-8 sm:p-12 shadow-2xl">
          <div className="absolute top-0 right-0 -mt-12 -mr-12 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="relative z-10 max-w-2xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold">
              <Sparkles className="w-3.5 h-3.5" /> Welcome to your workspace
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              Build and scale your ideas faster.
            </h1>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed">
              Everything you need to manage products, track performance metrics, and collaborate with your team seamlessly in one place.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <button type="button" className="flex items-center gap-2 px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-sm rounded-xl shadow-lg shadow-indigo-600/25 transition-all">
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Feature / Quick Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-slate-900/50 border border-slate-800/80 p-6 rounded-2xl space-y-3 backdrop-blur-sm">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-semibold text-white">High Performance</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Optimized for fast rendering and instantaneous responses across all dashboard views.
            </p>
          </div>

          <div className="bg-slate-900/50 border border-slate-800/80 p-6 rounded-2xl space-y-3 backdrop-blur-sm">
            <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-semibold text-white">Secure Encrypted</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Protected end-to-end with enterprise-grade authentication protocol layers.
            </p>
          </div>

          <div className="bg-slate-900/50 border border-slate-800/80 p-6 rounded-2xl sm:col-span-2 lg:col-span-1 space-y-3 backdrop-blur-sm">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center">
              <TrendingUp className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-semibold text-white">Live Analytics</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Track real-time growth indicators and receive automated weekly activity summaries.
            </p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default HomePage