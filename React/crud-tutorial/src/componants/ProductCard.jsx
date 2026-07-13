import React from 'react'

export const ProductCard = ({product,deleteProduct}) => {
  
  return (
<div id="project-card" className="relative w-96 overflow-hidden rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:shadow-md flex flex-col gap-4">
  
  <div className="relative w-full">
    <div id="card-image" className="h-52 w-full overflow-hidden rounded-xl bg-slate-100">
      <img className="h-full w-full object-cover object-center" src={product.images[0]} alt={product.title} />
    </div>

    <button 
      onClick={()=>{
        deleteProduct(product.id)
      }}
      type="button"
      id="delete-btn"
      className="absolute top-3 right-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm text-slate-600 hover:bg-red-50 hover:text-red-600 shadow-sm transition-all duration-200 active:scale-95 cursor-pointer"
      title="Delete Product"
    >
      <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
      </svg>
    </button>
  </div>

  <div id="card-header" className="flex flex-col gap-1">
    <span id="project-category" className="w-fit rounded-md bg-pink-50 px-2 py-0.5 text-xs font-semibold tracking-wide text-pink-600 uppercase">
      {product.category}
    </span>
    <h2 id="project-title" className="text-xl font-bold tracking-tight text-slate-800 line-clamp-1">
      {product.title}
    </h2>
  </div>

  <div id="card-body">
    <p id="project-description" className="text-sm leading-relaxed text-slate-500 line-clamp-3">
      {product.description}
    </p>
  </div>

  <div id="card-footer" className="mt-2 flex items-center justify-between border-t border-slate-100 pt-4">
    <div id="price-section" className="flex items-baseline gap-2">
      <span id="current-price" className="text-2xl font-extrabold text-slate-900">
        ${product.price}
      </span>
      <span id="discount-percentage" className="text-xs font-medium text-emerald-600">
        {product.discountPercentage}% OFF
      </span>
    </div>
    
    <div id="rating-section" className="flex items-center gap-1 rounded-full bg-amber-50 px-2.5 py-1 text-xs font-semibold text-amber-700">
      <svg className="h-3.5 w-3.5 fill-amber-500 text-amber-500" viewBox="0 0 20 20">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
      <span id="project-rating">{product.rating}</span>
    </div>
  </div>
  
</div>
  )
}
