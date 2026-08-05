import React, { useState } from 'react'
import { Search, Filter } from 'lucide-react'
import { useGetProductsCatagory } from '../../hooks/productsHook'
import { isPending } from '@reduxjs/toolkit'


const SearchAndFilter = ({catagory,setCatagory}) => {


  const { data: categories, isPending: isCatagoryPending } = useGetProductsCatagory()

  return (
    <div className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-900/40 p-4 rounded-2xl border border-slate-800/80 backdrop-blur-sm">

      {/* Search Input Bar */}
      <div className="relative w-full sm:w-80">
        <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" />
        <input
          type="text"
          placeholder="Search products..."
          className="w-full pl-10 pr-4 py-2 bg-slate-900 border border-slate-800 rounded-xl text-sm text-slate-100 placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
        />
      </div>

      {/* Category Select Dropdown */}
      <div className="relative w-full sm:w-56">
        <Filter className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none z-10" />

        <select
          value={catagory}
          onChange={(e)=>setCatagory(e.target.value)}
          className="w-full pl-10 pr-8 py-2 bg-slate-900 border border-slate-800 rounded-xl text-sm text-slate-100 font-medium capitalize appearance-none cursor-pointer focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
        >
          <option value={'all'} >ALL</option>

          {
            categories?.map((cat) => (
              <option
                key={cat.url}
                value={cat.slug}
                className="bg-slate-900 text-slate-100 capitalize py-2"
              >
                {cat.name}
              </option>
            ))

          }
        </select>

        {/* Custom Chevron Arrow */}
        <div className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-slate-500 text-xs">
          ▼
        </div>
      </div>

    </div>
  )
}

export default SearchAndFilter