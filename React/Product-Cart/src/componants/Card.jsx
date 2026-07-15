import React, { useContext } from 'react'
import { MyStore } from '../Context/MyStore'

const Card = ({ product, quantity}) => {

    const { handelAddToCart,incrementItemQuantity,decrementItemQuantity } = useContext(MyStore);

    return (
        <div className="max-w-xs bg-slate-900 border border-slate-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col group">
            <div className="relative bg-white p-6 flex items-center justify-center aspect-square overflow-hidden">
                <img src={product.image} alt={product.title} className="h-48 object-contain group-hover:scale-105 transition-transform duration-300" />
                <span className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur-sm text-slate-300 text-xs font-medium px-2.5 py-1 rounded-md uppercase tracking-wider border border-slate-800">
                    {product.category}
                </span>
            </div>

            <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                    <div className="flex items-center space-x-2 mb-2">
                        <div className="flex items-center text-amber-400">
                            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                            </svg>
                            <span className="text-sm font-semibold text-slate-200 ml-1">{product.rating?.rate}</span>
                        </div>
                        <span className="text-xs text-slate-500">({product.rating?.count} reviews)</span>
                    </div>

                    <h3 className="text-base font-bold text-white line-clamp-2 hover:text-indigo-400 transition-colors mb-2">
                        {product.title}
                    </h3>

                    <p className="text-sm text-slate-400 line-clamp-2 mb-4">
                        {product.description}
                    </p>
                </div>

                <div className="flex items-center justify-between mt-auto pt-2 w-full">
                    <span className="text-xl font-black text-white">${product.price}</span>

                    {quantity === 0 ? (
                        <button
                            onClick={() => handelAddToCart(product)}
                            type="button"
                            className="bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors flex items-center space-x-1.5 shadow-md shadow-indigo-950"
                        >
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
                            </svg>
                            <span>Add to Cart</span>
                        </button>
                    ) : (
                        <div className="flex items-center bg-slate-800 border border-slate-700 rounded-lg overflow-hidden shadow-md">
                            <button
                                onClick={()=>{decrementItemQuantity(product)}}
                                type="button"
                                className="px-3 py-2.5 text-slate-400 hover:text-white hover:bg-slate-700/50 transition-colors flex items-center justify-center"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M20 12H4"></path>
                                </svg>
                            </button>

                            <span className="px-3 text-sm font-bold text-white min-w-10 text-center bg-slate-900/40 select-none">
                                {quantity}
                            </span>

                            <button
                                onClick={()=>{incrementItemQuantity(product)}}
                                type="button"
                                className="px-3 py-2.5 text-slate-400 hover:text-white hover:bg-slate-700/50 transition-colors flex items-center justify-center"
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M12 4v16m8-8H4"></path>
                                </svg>
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Card