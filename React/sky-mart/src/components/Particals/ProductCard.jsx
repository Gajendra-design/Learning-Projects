import React from 'react';
import { Star, ShoppingBag, Eye } from 'lucide-react';

export default function ProductCard({ product }) {
  return (
    <div className="group relative bg-slate-900 border border-slate-800 hover:border-slate-700/80 rounded-2xl p-4 flex flex-col justify-between transition-all duration-300 shadow-lg hover:shadow-slate-950/50 w-full max-w-sm">
      
      {/* ================= CARD HEADER / IMAGE ================= */}
      <div className="relative w-full h-52 rounded-xl bg-slate-950/80 border border-slate-800/80 p-4 flex items-center justify-center overflow-hidden">
        {/* Category Badge */}
        <span className="absolute top-3 left-3 text-[11px] font-semibold uppercase tracking-wider text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-1 rounded-full backdrop-blur-md z-10">
          {product.category}
        </span>

        {/* Product Image */}
        <img
          src={product.image}
          alt={product.title}
          className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
        />

        {/* Hover Quick Action Overlay */}
        <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-2">
          <button 
            title="Quick view"
            aria-label="Quick view"
            className="p-2.5 rounded-full bg-slate-900/90 text-slate-200 hover:text-white hover:bg-slate-800 border border-slate-700/60 shadow-md transition-transform duration-200 hover:scale-110"
          >
            <Eye className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* ================= CARD BODY ================= */}
      <div className="mt-4 flex-1 flex flex-col justify-between space-y-3">
        <div>
          {/* Title */}
          <h3 className="text-base font-bold text-white line-clamp-1 group-hover:text-indigo-400 transition-colors duration-200" title={product.title}>
            {product.title}
          </h3>

          {/* Description */}
          <p className="text-xs text-slate-400 line-clamp-2 mt-1 leading-relaxed">
            {product.description}
          </p>
        </div>

        {/* Rating Row */}
        <div className="flex items-center gap-2 text-xs">
          <div className="flex items-center gap-1 bg-amber-400/10 border border-amber-400/20 text-amber-400 px-2 py-0.5 rounded-md font-semibold">
            <Star className="w-3.5 h-3.5 fill-amber-400" />
            <span>{product.rating?.rate || 0}</span>
          </div>
          <span className="text-slate-500 text-[11px]">
            ({product.rating?.count || 0} reviews)
          </span>
        </div>

        {/* ================= CARD FOOTER / PRICE & CTA ================= */}
        <div className="pt-3 border-t border-slate-800/80 flex items-center justify-between">
          <div>
            <span className="text-[10px] uppercase tracking-wider text-slate-500 block font-medium">Price</span>
            <span className="text-xl font-extrabold text-white tracking-tight">
              ${product.price?.toFixed(2)}
            </span>
          </div>

          <button 
            title="Add to Cart"
            className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white text-xs font-semibold px-4 py-2.5 rounded-xl transition-all duration-200 shadow-md shadow-indigo-500/10 active:scale-95"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>Add</span>
          </button>
        </div>
      </div>

    </div>
  );
}