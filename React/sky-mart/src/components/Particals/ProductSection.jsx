import React, { useContext } from 'react';
import { Star, Zap, ShoppingBag, ArrowRight, ShieldCheck, Tag, Truck } from 'lucide-react';
import { MyStore } from '../../Context/MyStore';
import HomeProductCard from './HomeProductCard';
import { Link } from 'react-router';

export default function ProductSection() {

  const {products} = useContext(MyStore); 

  const topRatedProducts = products.filter((product)=>{
    return product.rating.rate > 4.5
  });

  const newArrivals = products.filter((product)=>{
    return product.id > 15
  });

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
              <Link to='/shop/all' className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1 transition-colors duration-200">
                See all <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* List of Products */}
            <div className="space-y-3">
              {topRatedProducts.map((product) => (
                <HomeProductCard key={product.id} product={product} />
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
              <Link to='/shop/all' className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1 transition-colors duration-200">
                See all <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* List of Products */}
            <div className="space-y-3">
              {newArrivals.map((product) => (
                <HomeProductCard key={product.id} product={product} />
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