import React, { useContext } from 'react';
import { X, ShoppingBag, Trash2, Plus, Minus, ArrowRight } from 'lucide-react';
import { MyStore } from '../../../Context/MyStore';

export default function CartSidebar() {
  const { isCartOpen, setIsCartOpen } = useContext(MyStore);

  return (
    /* Outer Fixed Wrapper:
       Increased duration to 500ms and set delay-500 for the closing cycle
       so the parent DOM doesn't clip the exit animation. */
    <div
      className={`fixed inset-0 z-50 overflow-hidden transition-all duration-500 ${
        isCartOpen 
          ? 'visible opacity-100 ease-out' 
          : 'invisible opacity-0 pointer-events-none ease-in delay-500'
      }`}
    >
      {/* ================= BACKDROP OVERLAY (Luxurious Fade) ================= */}
      <div
        onClick={() => setIsCartOpen(false)}
        className={`absolute inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity duration-500 cursor-pointer ${
          isCartOpen ? 'opacity-100 ease-out' : 'opacity-0 ease-in'
        }`}
      />

      {/* ================= SLIDING DRAWER (Premium Smooth Curve) ================= */}
      <div
        className={`absolute top-0 right-0 h-full w-full max-w-md bg-slate-950 border-l border-slate-800 shadow-2xl flex flex-col justify-between transition-transform duration-500 ${
          isCartOpen 
            ? 'translate-x-0 cubic-bezier(0.16,1,0.3,1)' // Smooth deceleration spring curve
            : 'translate-x-full cubic-bezier(0.7,0,0.84,0)'
        }`}
        style={{
          // Adding a custom high-end ease curve directly via inline styles for native precision
          transitionTimingFunction: isCartOpen 
            ? 'cubic-bezier(0.25, 1, 0.5, 1)'  // Exits quickly, settles slowly
            : 'cubic-bezier(0.32, 0, 0.67, 0)' // Accelerates outward cleanly
        }}
      >
        {/* ================= HEADER ================= */}
        <div className="p-5 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <ShoppingBag className="w-5 h-5 text-indigo-400" />
            <h2 className="text-lg font-bold text-white tracking-wide">
              Cart
            </h2>
            <span className="text-xs font-semibold text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-0.5 rounded-full ml-1">
              2 items
            </span>
          </div>

          <button
            onClick={() => setIsCartOpen(false)}
            title="Close cart"
            className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-400 hover:text-white transition duration-200 border border-slate-700/50"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* ================= CART ITEMS LIST ================= */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {/* Static Item 1 */}
          <div className="bg-slate-900 border border-slate-800/80 rounded-2xl p-4 flex items-center gap-4 hover:border-slate-700 transition duration-200 shadow-sm">
            <div className="w-16 h-16 rounded-xl bg-slate-950/80 border border-slate-800 p-2 shrink-0 flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1580481072645-022f9a6d1270?w=200&auto=format&fit=crop&q=80"
                alt="Ergonomic Office Chair"
                className="max-h-full max-w-full object-contain"
              />
            </div>

            <div className="flex-1 min-w-0 space-y-1">
              <h3 className="text-sm font-bold text-white truncate">
                Ergonomic Office Chair
              </h3>
              <div className="text-xs text-indigo-400 font-extrabold">
                $999.95
                <span className="text-[10px] text-slate-500 font-normal ml-1">
                  ($199.99 each)
                </span>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <div className="flex items-center bg-slate-950/80 border border-slate-800 rounded-lg p-1">
                  <button className="p-1 hover:bg-slate-800 text-slate-400 hover:text-white rounded transition">
                    <Minus className="w-3 h-3" />
                  </button>
                  <span className="text-xs font-bold text-white px-2.5">
                    5
                  </span>
                  <button className="p-1 hover:bg-slate-800 text-slate-400 hover:text-white rounded transition">
                    <Plus className="w-3 h-3" />
                  </button>
                </div>

                <button
                  title="Remove item"
                  className="p-1.5 text-slate-500 hover:text-rose-400 transition"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Static Item 2 */}
          <div className="bg-slate-900 border border-slate-800/80 rounded-2xl p-4 flex items-center gap-4 hover:border-slate-700 transition duration-200 shadow-sm">
            <div className="w-16 h-16 rounded-xl bg-slate-950/80 border border-slate-800 p-2 shrink-0 flex items-center justify-center">
              <img
                src="https://images.unsplash.com/photo-1617005082133-548c4dd27f35?w=200&auto=format&fit=crop&q=80"
                alt="Professional Camera Lens"
                className="max-h-full max-w-full object-contain"
              />
            </div>

            <div className="flex-1 min-w-0 space-y-1">
              <h3 className="text-sm font-bold text-white truncate">
                Professional Camera Lens
              </h3>
              <div className="text-xs text-indigo-400 font-extrabold">
                $599.99
                <span className="text-[10px] text-slate-500 font-normal ml-1">
                  ($599.99 each)
                </span>
              </div>

              <div className="flex items-center gap-2 pt-1">
                <div className="flex items-center bg-slate-950/80 border border-slate-800 rounded-lg p-1">
                  <button className="p-1 hover:bg-slate-800 text-slate-400 hover:text-white rounded transition">
                    <Minus className="w-3 h-3" />
                  </button>
                  <span className="text-xs font-bold text-white px-2.5">
                    1
                  </span>
                  <button className="p-1 hover:bg-slate-800 text-slate-400 hover:text-white rounded transition">
                    <Plus className="w-3 h-3" />
                  </button>
                </div>

                <button
                  title="Remove item"
                  className="p-1.5 text-slate-500 hover:text-rose-400 transition"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ================= FOOTER / CHECKOUT ================= */}
        <div className="p-5 bg-slate-900 border-t border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">
              Total
            </span>
            <span className="text-2xl font-black text-white tracking-tight">
              $1599.94
            </span>
          </div>

          <button className="w-full flex items-center justify-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3.5 rounded-xl transition duration-200 shadow-lg shadow-indigo-500/20 active:scale-[0.98]">
            <span>Checkout</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={() => setIsCartOpen(false)}
            className="w-full text-center text-xs font-semibold text-slate-500 hover:text-slate-300 transition"
          >
            Clear cart
          </button>
        </div>

      </div>
    </div>
  );
}