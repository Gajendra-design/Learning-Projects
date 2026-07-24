import { Link } from 'react-router'
import React from 'react'
import { Shirt, Gem, Tv, ShoppingBag, ArrowRight, Grid } from 'lucide-react';


const CatagoryCard = ({ cat}) => {
    const IconComponent = cat.icon;
    
    return (
        <Link
            to={`/shop/${cat.name}`}
            state={{ category: cat.name.toLowerCase() }}
            className="group bg-slate-950/60 border border-slate-800/80 hover:border-slate-700/80 rounded-xl p-4 flex items-center gap-4 transition duration-200"
        >
            {/* Category Icon */}
            <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-xl border border-indigo-500/20 group-hover:bg-indigo-500 group-hover:text-white transition-colors duration-200 shrink-0">
                <IconComponent className="w-5 h-5" />
            </div>

            {/* Title & Count */}
            <div className="min-w-0 flex-1">
                <h3 className="text-sm font-bold text-white capitalize truncate group-hover:text-indigo-400 transition-colors duration-200">
                    {cat.name}
                </h3>
                <p className="text-xs text-slate-400 mt-0.5">
                    {cat.count} items
                </p>
            </div>
        </Link>
    )
}

export default CatagoryCard