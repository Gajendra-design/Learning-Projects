import React from 'react';
import { Package, TrendingUp, Star, Tag, ArrowRight } from 'lucide-react';

export default function HeroSection() {
  const userName = "Gajendra"; // Dynamic user name variable

  return (
    <section className="bg-slate-950 text-slate-100 px-4 py-8 md:px-12 font-sans">
      <div className="max-w-7xl mx-auto space-y-6">
        
        {/* ================= HERO BANNER ================= */}
        <div className="relative overflow-hidden rounded-2xl bg-slate-900 border border-slate-800 p-8 md:p-12 shadow-md">
          
          {/* Subtle Background Grid */}
          <div 
            className="absolute inset-0 opacity-10 pointer-events-none" 
            style={{ 
              backgroundImage: 'radial-gradient(#818cf8 1px, transparent 1px)', 
              backgroundSize: '24px 24px' 
            }} 
          />

          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            
            {/* Left Copy */}
            <div className="max-w-2xl space-y-4">
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded-full border border-indigo-500/20">
                <span>GOOD EVENING</span>
                <span className="animate-bounce">👋</span>
              </div>
              
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Welcome back, <br />
                <span className="text-indigo-400">{userName}!</span>
              </h1>
              
              <p className="text-slate-300 text-base md:text-lg max-w-lg leading-relaxed">
                Discover today's picks — hand-curated products across electronics, fashion, and more.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <button className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white font-medium px-6 py-3 rounded-xl transition duration-200 shadow-md">
                  <span>Shop Now</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button className="bg-slate-800 hover:bg-slate-700 text-slate-200 font-medium px-6 py-3 rounded-xl border border-slate-700/50 transition duration-200">
                  View All Products
                </button>
              </div>
            </div>

            {/* Right Quick Badges */}
            <div className="flex flex-col gap-4 w-full md:w-auto sm:flex-row md:flex-col">
              <div className="bg-slate-800/60 border border-slate-700/50 rounded-2xl p-5 text-center min-w-[200px]">
                <div className="text-3xl font-black text-indigo-400 tracking-tight">20+</div>
                <div className="text-xs text-slate-300 font-medium mt-1">Products Available</div>
              </div>

              <div className="bg-slate-800/60 border border-slate-700/50 rounded-2xl p-5 text-center min-w-[200px]">
                <div className="text-2xl font-bold text-white tracking-tight">
                  Free
                </div>
                <div className="text-xs text-slate-300 font-medium mt-1">Delivery on ₹999+</div>
              </div>
            </div>

          </div>
        </div>

        {/* ================= STATS / METRICS CARDS ================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Cart Items */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 flex items-center gap-4 hover:border-slate-700 transition duration-200 shadow-sm">
            <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-xl border border-indigo-500/20">
              <Package className="w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl font-bold text-white leading-none">6</p>
              <p className="text-xs font-semibold text-slate-300 mt-1">Cart Items</p>
              <p className="text-[11px] text-slate-400">In your bag</p>
            </div>
          </div>

          {/* Cart Value */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 flex items-center gap-4 hover:border-slate-700 transition duration-200 shadow-sm">
            <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-xl border border-indigo-500/20">
              <TrendingUp className="w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl font-bold text-white leading-none">$1599.94</p>
              <p className="text-xs font-semibold text-slate-300 mt-1">Cart Value</p>
              <p className="text-[11px] text-slate-400">Ready to checkout</p>
            </div>
          </div>

          {/* Top Products */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 flex items-center gap-4 hover:border-slate-700 transition duration-200 shadow-sm">
            <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-xl border border-indigo-500/20">
              <Star className="w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl font-bold text-white leading-none">5</p>
              <p className="text-xs font-semibold text-slate-300 mt-1">Top Products</p>
              <p className="text-[11px] text-slate-400">Highly rated</p>
            </div>
          </div>

          {/* Categories */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 flex items-center gap-4 hover:border-slate-700 transition duration-200 shadow-sm">
            <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-xl border border-indigo-500/20">
              <Tag className="w-6 h-6" />
            </div>
            <div>
              <p className="text-2xl font-bold text-white leading-none">6</p>
              <p className="text-xs font-semibold text-slate-300 mt-1">Categories</p>
              <p className="text-[11px] text-slate-400">To explore</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}