import React from 'react';
import { Link } from 'react-router';
import CatagoryCard from './CatagoryCard';
import { Shirt, Gem, Tv, ShoppingBag, ArrowRight, Grid } from 'lucide-react';


//iska reduce fucniton se solution karna hai

// Static categories array
const categories = [
    { name: "Men's Clothing", count: 4, icon: Shirt },
    { name: "Women's Clothing", count: 6, icon: ShoppingBag },
    { name: "Jewelery", count: 4, icon: Gem },
    { name: "Electronics", count: 6, icon: Tv },
];


export default function CategorySection() {
    return (
        <section className="bg-slate-950 text-slate-100 px-4 py-8 md:px-12 font-sans">
            <div className="max-w-7xl mx-auto space-y-6">

                {/* ================= CATEGORIES CONTAINER ================= */}
                <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 shadow-md">

                    {/* Section Header */}
                    <div className="flex items-center justify-between pb-6 mb-6 border-b border-slate-800/80">
                        <div className="flex items-center gap-2">
                            <Grid className="w-5 h-5 text-indigo-400" />
                            <h2 className="text-xl font-bold text-white tracking-wide">
                                Shop by Category
                            </h2>
                        </div>
                        <Link
                            to="/shop/all"
                            className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 flex items-center gap-1 transition-colors duration-200"
                        >
                            See all <ArrowRight className="w-3.5 h-3.5" />
                        </Link>
                    </div>

                    {/* Category Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                        {categories.map((cat) => {
                            const IconComponent = cat.icon;
                            return (
                                <CatagoryCard key={cat.name.concat(cat.icon)} cat={cat}/>
                                // <Link
                                //     to="/shop"
                                //     state={{ category: cat.name.toLowerCase() }}
                                //     className="group bg-slate-950/60 border border-slate-800/80 hover:border-slate-700/80 rounded-xl p-4 flex items-center gap-4 transition duration-200"
                                // >
                                //     {/* Category Icon */}
                                //     <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-xl border border-indigo-500/20 group-hover:bg-indigo-500 group-hover:text-white transition-colors duration-200 shrink-0">
                                //         <IconComponent className="w-5 h-5" />
                                //     </div>

                                //     {/* Title & Count */}
                                //     <div className="min-w-0 flex-1">
                                //         <h3 className="text-sm font-bold text-white capitalize truncate group-hover:text-indigo-400 transition-colors duration-200">
                                //             {cat.name}
                                //         </h3>
                                //         <p className="text-xs text-slate-400 mt-0.5">
                                //             {cat.count} items
                                //         </p>
                                //     </div>
                                // </Link>
                            );
                        })}
                    </div>

                </div>

            </div>
        </section>
    );
}