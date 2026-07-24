import { ShoppingBag } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router'

const HomeProductCard = ({ product }) => {
    return (
        <div className="bg-slate-950/60 border border-slate-800/80 hover:border-slate-700/80 rounded-xl p-3 flex items-center justify-between gap-3 transition duration-200 group">

            {/* Link expands to fill all available space (flex-1) */}
            <Link to={`/product/${product.id}`} className="flex-1 min-w-0">
                <div className="flex items-center gap-4">
                    <img
                        src={product.image}
                        alt={product.title || "Product"}
                        className="w-12 h-12 rounded-lg object-cover bg-slate-800 border border-slate-700/50 shrink-0"
                    />
                    <span className="text-indigo-400 font-bold tracking-tight text-base truncate">
                        ${product.price}
                    </span>
                </div>
            </Link>

            {/* Button takes only its natural content width (shrink-0) */}
            <button
                title="Add to cart"
                className="shrink-0 p-2.5 rounded-lg bg-indigo-500/10 text-indigo-400 hover:bg-indigo-500 hover:text-white border border-indigo-500/20 transition-all duration-200 cursor-pointer"
            >
                <ShoppingBag className="w-4 h-4" />
            </button>

        </div>
    )
}

export default HomeProductCard