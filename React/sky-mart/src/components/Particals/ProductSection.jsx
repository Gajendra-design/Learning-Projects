import React from 'react';
import { Star, Zap, ShoppingBag, ArrowRight, ShieldCheck, Tag, Truck } from 'lucide-react';

export default function ProductSection() {
  // Sample Product Data (Top Rated)
  const topRatedProducts = [
    { id: 1, price: "$599.99", image: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=100&auto=format&fit=crop&q=80" },
    { id: 2, price: "$199.99", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&auto=format&fit=crop&q=80" },
    { id: 3, price: "$349.99", image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=100&auto=format&fit=crop&q=80" },
    { id: 4, price: "$49.99", image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=100&auto=format&fit=crop&q=80" },
    { id: 5, price: "$149.99", image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=100&auto=format&fit=crop&q=80" },
  ];

  // Sample Product Data (New Arrivals)
  const newArrivals = [
    { id: 6, price: "$99.99", image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=100&auto=format&fit=crop&q=80" },
    { id: 7, price: "$299.99", image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=100&auto=format&fit=crop&q=80" },
    { id: 8, price: "$24.99", image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?w=100&auto=format&fit=crop&q=80" },
    { id: 9, price: "$199.99", image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&auto=format&fit=crop&q=80" },
    { id: 10, price: "$34.99", image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=100&auto=format&fit=crop&q=80" },
  ];

  return (
    <section className="bg-slate-950 text-slate-100 px-4 py-8 md:px-12 font-sans">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* ================= PRODUCT CARDS GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Top Rated Card Container */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-md">
            {/* Card Header */}
            <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-800/80">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-indigo-400 fill-indigo-400" />
                <h2 className="text-xl font-bold text-white tracking-wide">Top Rated</h2>
              </div>
              <button className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1 transition-colors duration-200">
                See all <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* List of Products */}
            <div className="space-y-3">
              {topRatedProducts.map((product) => (
                <div 
                  key={product.id} 
                  className="bg-slate-950/60 border border-slate-800/80 hover:border-slate-700/80 rounded-xl p-3 flex items-center justify-between transition duration-200 group"
                >
                  <div className="flex items-center gap-4">
                    <img 
                      src={product.image} 
                      alt="Product" 
                      className="w-12 h-12 rounded-lg object-cover bg-slate-800 border border-slate-700/50" 
                    />
                    <span className="text-indigo-400 font-bold tracking-tight text-base">
                      {product.price}
                    </span>
                  </div>

                  <button 
                    title="Add to cart"
                    className="p-2.5 rounded-lg bg-indigo-500/10 text-indigo-400 hover:bg-indigo-500 hover:text-white border border-indigo-500/20 transition-all duration-200"
                  >
                    <ShoppingBag className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* New Arrivals Card Container */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-md">
            {/* Card Header */}
            <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-800/80">
              <div className="flex items-center gap-2">
                <Zap className="w-5 h-5 text-indigo-400 fill-indigo-400" />
                <h2 className="text-xl font-bold text-white tracking-wide">New Arrivals</h2>
              </div>
              <button className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1 transition-colors duration-200">
                See all <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* List of Products */}
            <div className="space-y-3">
              {newArrivals.map((product) => (
                <div 
                  key={product.id} 
                  className="bg-slate-950/60 border border-slate-800/80 hover:border-slate-700/80 rounded-xl p-3 flex items-center justify-between transition duration-200 group"
                >
                  <div className="flex items-center gap-4">
                    <img 
                      src={product.image} 
                      alt="Product" 
                      className="w-12 h-12 rounded-lg object-cover bg-slate-800 border border-slate-700/50" 
                    />
                    <span className="text-indigo-400 font-bold tracking-tight text-base">
                      {product.price}
                    </span>
                  </div>

                  <button 
                    title="Add to cart"
                    className="p-2.5 rounded-lg bg-indigo-500/10 text-indigo-400 hover:bg-indigo-500 hover:text-white border border-indigo-500/20 transition-all duration-200"
                  >
                    <ShoppingBag className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* ================= PERKS / FEATURES FOOTER BANNER ================= */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
          
          {/* Perk 1 */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 flex items-center gap-4 shadow-sm hover:border-slate-700 transition duration-200">
            <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-xl border border-indigo-500/20">
              <Truck className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-bold text-white">Fast Delivery</p>
              <p className="text-xs text-slate-400 mt-0.5">Same-day on select items</p>
            </div>
          </div>

          {/* Perk 2 */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 flex items-center gap-4 shadow-sm hover:border-slate-700 transition duration-200">
            <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-xl border border-indigo-500/20">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-bold text-white">Secure Payments</p>
              <p className="text-xs text-slate-400 mt-0.5">100% encrypted checkout</p>
            </div>
          </div>

          {/* Perk 3 */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 flex items-center gap-4 shadow-sm hover:border-slate-700 transition duration-200">
            <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-xl border border-indigo-500/20">
              <Tag className="w-6 h-6" />
            </div>
            <div>
              <p className="text-sm font-bold text-white">Best Prices</p>
              <p className="text-xs text-slate-400 mt-0.5">Price-match guarantee</p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}