import React, { useState } from 'react';
import { Store, Mail, Lock, Eye, EyeOff, ArrowRight } from 'lucide-react';
import { Link, Outlet } from 'react-router';
import Login from './Login';
import Register from './Register';

export default function Auth() {

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex font-sans">
      
      {/* ================= LEFT HALF: BRAND & HERO BANNER ================= */}
      <div className="hidden lg:flex lg:w-1/2 flex-col justify-between p-12 border-r border-slate-800/80 bg-slate-950 relative overflow-hidden">
        
        {/* Subtle Background Radial Grid Pattern (Indigo Dots) */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none" 
          style={{ 
            backgroundImage: 'radial-gradient(#818cf8 1px, transparent 1px)', 
            backgroundSize: '32px 32px' 
          }} 
        />

        {/* Brand Logo Header */}
        <div className="flex items-center space-x-2.5 z-10">
          <div className="p-2 bg-indigo-500/10 rounded-xl border border-indigo-500/20">
            <Store className="h-6 w-6 text-indigo-400" />
          </div>
          <span className="text-2xl font-bold tracking-wider text-white">
            SKY<span className="text-indigo-400">MART</span>
          </span>
        </div>

        {/* Hero Copy */}
        <div className="space-y-6 max-w-lg z-10 my-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-3.5 py-1.5 rounded-full inline-block">
            WELCOME BACK
          </span>
          <h1 className="text-5xl font-extrabold text-white tracking-tight leading-tight">
            Shop the future. <br />
            <span className="text-indigo-400">Today.</span>
          </h1>
          <p className="text-slate-400 text-base leading-relaxed">
            Thousands of products, lightning-fast delivery, and prices that make your wallet happy.
          </p>

          {/* Stats Bar Row */}
          <div className="grid grid-cols-3 gap-4 pt-6">
            <div className="bg-slate-900/80 border border-slate-800/80 rounded-2xl p-4 text-center">
              <div className="text-xl font-extrabold text-indigo-400 tracking-tight">20K+</div>
              <div className="text-[11px] text-slate-500 font-medium mt-0.5">Products</div>
            </div>

            <div className="bg-slate-900/80 border border-slate-800/80 rounded-2xl p-4 text-center">
              <div className="text-xl font-extrabold text-indigo-400 tracking-tight">50K+</div>
              <div className="text-[11px] text-slate-500 font-medium mt-0.5">Users</div>
            </div>

            <div className="bg-slate-900/80 border border-slate-800/80 rounded-2xl p-4 text-center">
              <div className="text-xl font-extrabold text-indigo-400 tracking-tight">4.9★</div>
              <div className="text-[11px] text-slate-500 font-medium mt-0.5">Rating</div>
            </div>
          </div>
        </div>

        {/* Footer info inside left banner */}
        <p className="text-xs text-slate-500 z-10">
          © {new Date().getFullYear()} SkyMart Inc. All rights reserved.
        </p>
      </div>


      {/* ================= RIGHT HALF: SIGN IN FORM ================= */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-6 sm:p-12 bg-slate-950">
        
        <Outlet/>

      </div>

    </div>
  );
}