import React from 'react';

const ProductCard = ({ product }) => {
  // Destructure product properties with fallback defaults
  const { title, price, description, category, image, rating } = product || {};

  return (
    <div className="w-full max-w-xs bg-stone-900/60 backdrop-blur-xl border border-stone-800 rounded-2xl p-5 shadow-xl shadow-orange-950/10 hover:border-orange-500/40 transition-all duration-300 flex flex-col justify-between group">
      
      {/* Top Section: Category & Image */}
      <div>
        {/* Category Badge & Price */}
        <div className="flex items-center justify-between mb-4">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-orange-400 bg-orange-500/10 border border-orange-500/20 px-2.5 py-1 rounded-md">
            {category}
          </span>
          <span className="text-lg font-bold text-amber-400">
            ${price?.toFixed(2)}
          </span>
        </div>

        {/* Product Image Container */}
        <div className="w-full h-48 bg-stone-950/60 rounded-xl border border-stone-800/80 p-4 mb-4 flex items-center justify-center overflow-hidden group-hover:border-stone-700 transition-colors">
          <img
            src={image}
            alt={title}
            className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Title */}
        <h3 className="text-base font-semibold text-stone-100 line-clamp-1 mb-1 group-hover:text-orange-400 transition-colors" title={title}>
          {title}
        </h3>

        {/* Description */}
        <p className="text-xs text-stone-400 line-clamp-2 mb-4 leading-relaxed">
          {description}
        </p>
      </div>

      {/* Bottom Section: Rating & Action */}
      <div className="pt-4 border-t border-stone-800/80 flex items-center justify-between">
        {/* Rating */}
        <div className="flex items-center gap-1.5">
          <div className="flex items-center text-amber-400">
            {/* Star Icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          </div>
          <span className="text-xs font-semibold text-stone-200">{rating?.rate}</span>
          <span className="text-[10px] text-stone-500">({rating?.count})</span>
        </div>

        {/* Add Button */}
        <button
          type="button"
          className="px-3 py-1.5 text-xs font-semibold text-stone-950 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 rounded-lg shadow-md shadow-orange-500/10 transition-all duration-200"
        >
          Add to Cart
        </button>
      </div>

    </div>
  );
};

export default ProductCard;