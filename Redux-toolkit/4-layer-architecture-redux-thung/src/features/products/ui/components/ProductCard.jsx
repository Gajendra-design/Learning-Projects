import React from 'react'
import { Star, ShoppingCart, Tag } from 'lucide-react'

const ProductCard = ({ product }) => {
  const {
    title,
    category,
    price,
    discountPercentage,
    rating,
    stock,
    brand,
    thumbnail
  } = product

  return (
    <div className="bg-slate-900/60 border border-slate-800/80 rounded-2xl p-4 flex flex-col justify-between hover:border-slate-700/80 transition-all duration-300 hover:shadow-xl group">
      <div>
        {/* Thumbnail & Badges Container */}
        <div className="relative w-full h-48 rounded-xl bg-slate-950 overflow-hidden flex items-center justify-center p-2">
          <img
            src={thumbnail}
            alt={title}
            className="h-full object-contain group-hover:scale-105 transition-transform duration-300"
          />
          
          {/* Category Badge */}
          <span className="absolute top-2.5 left-2.5 px-2.5 py-1 rounded-lg bg-slate-900/80 backdrop-blur-md border border-slate-800 text-[10px] font-semibold uppercase tracking-wider text-indigo-400">
            {category}
          </span>

          {/* Discount Badge */}
          {discountPercentage > 0 && (
            <span className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded-lg bg-rose-500/20 border border-rose-500/30 text-rose-400 text-xs font-semibold flex items-center gap-1">
              <Tag className="w-3 h-3" />
              {discountPercentage}% OFF
            </span>
          )}
        </div>

        {/* Product Details */}
        <div className="mt-4 space-y-1.5">
          <div className="flex justify-between items-center text-xs text-slate-400">
            <span className="font-medium text-slate-500">{brand}</span>
            
            {/* Rating Stars */}
            <div className="flex items-center gap-1 text-amber-400">
              <Star className="w-3.5 h-3.5 fill-amber-400" />
              <span className="font-semibold text-slate-300">{rating}</span>
            </div>
          </div>

          <h3 className="text-base font-semibold text-slate-100 line-clamp-1 group-hover:text-indigo-400 transition-colors">
            {title}
          </h3>
        </div>
      </div>

      {/* Footer: Price & Add Button */}
      <div className="mt-4 pt-3 border-t border-slate-800/80 flex items-center justify-between">
        <div>
          <span className="text-xs text-slate-500 block">Price</span>
          <div className="flex items-baseline gap-1.5">
            <span className="text-lg font-bold text-white">${price}</span>
            {stock < 20 && (
              <span className="text-[10px] text-amber-400 font-medium">Only {stock} left</span>
            )}
          </div>
        </div>

        <button
          type="button"
          className="p-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl shadow-md shadow-indigo-600/20 active:scale-95 transition-all"
        >
          <ShoppingCart className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}

export default ProductCard