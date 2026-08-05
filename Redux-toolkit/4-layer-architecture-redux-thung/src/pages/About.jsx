import React from 'react'
import { Info, Users, Target, Shield, Layers } from 'lucide-react'

const About = () => {
  return (
    <div className="min-h-[calc(100vh-65px)] bg-slate-950 text-slate-100 p-6 sm:p-10 font-sans">
      <div className="max-w-5xl mx-auto space-y-12">
        
        {/* Header */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 text-indigo-400 text-xs font-semibold">
            <Info className="w-3.5 h-3.5" /> About Acme Inc
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            We build simple tools for modern web applications
          </h1>
          <p className="text-sm text-slate-400">
            Learn more about our mission, core values, and the architecture powering this platform.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-6 bg-slate-900/40 border border-slate-800/80 rounded-2xl text-center">
          <div className="space-y-1">
            <h2 className="text-2xl sm:text-3xl font-bold text-indigo-400">99.9%</h2>
            <p className="text-xs text-slate-400">Uptime</p>
          </div>
          <div className="space-y-1">
            <h2 className="text-2xl sm:text-3xl font-bold text-indigo-400">10k+</h2>
            <p className="text-xs text-slate-400">Users</p>
          </div>
          <div className="space-y-1">
            <h2 className="text-2xl sm:text-3xl font-bold text-indigo-400">24/7</h2>
            <p className="text-xs text-slate-400">Support</p>
          </div>
          <div className="space-y-1">
            <h2 className="text-2xl sm:text-3xl font-bold text-indigo-400">100%</h2>
            <p className="text-xs text-slate-400">Secure</p>
          </div>
        </div>

        {/* Values Section */}
        <div className="space-y-6">
          <h2 className="text-xl font-bold text-white">Our Core Pillars</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex gap-4 p-5 bg-slate-900/30 border border-slate-800/80 rounded-2xl">
              <div className="w-10 h-10 rounded-xl bg-indigo-500/10 text-indigo-400 flex items-center justify-center shrink-0">
                <Target className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-semibold text-white">Simplicity First</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  We strip away unnecessary complexity to deliver sleek, responsive, and intuitive interfaces.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-5 bg-slate-900/30 border border-slate-800/80 rounded-2xl">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-400 flex items-center justify-center shrink-0">
                <Users className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <h3 className="text-base font-semibold text-white">User-Centric Design</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Every button, layout, and component is tuned specifically for an optimal user experience.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tech Stack Footer Badge List */}
        <div className="pt-6 border-t border-slate-800/80 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-500">
          <span>Powered by React, Tailwind CSS & Lucide Icons</span>
          <div className="flex gap-2">
            <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800">React</span>
            <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800">Tailwind</span>
            <span className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800">Vite</span>
          </div>
        </div>

      </div>
    </div>
  )
}

export default About