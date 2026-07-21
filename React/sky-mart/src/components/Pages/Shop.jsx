import React, { useContext, useEffect } from 'react';
import { Search, ChevronDown } from 'lucide-react';
import { Link } from 'react-router';
import ProductCard from '../Particals/ProductCard';
import axios from 'axios';
import { MyStore } from '../../Context/MyStore';

export default function Shop() {

  const { products, setProducts } = useContext(MyStore)

  const getProducts = async (url) => {
    const response = await axios.get(url);
    const products = response.data
    localStorage.setItem('products', JSON.stringify(products))
    setProducts(products)
  }

  //i am using useEffect for handeling infinite calling of getProduct funciton because of setProduct rerender and the call as we studied
  useEffect(() => { getProducts('https://fakestoreapi.com/products') }, [])


  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6 font-sans text-slate-100">

      {/* ================= SHOP HEADER ================= */}
      <div className="space-y-1">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight text-white">
          All Products
        </h1>
        <p className="text-xs md:text-sm text-slate-400 font-medium">
          {products.length} products found
        </p>
      </div>

      {/* ================= SEARCH & FILTER BAR ================= */}
      <div className="bg-slate-900 border border-slate-800 rounded-2xl p-2.5 sm:p-3 shadow-md">
        <div className="flex flex-col sm:flex-row items-center gap-3">

          {/* Search Input UI */}
          <div className="relative flex-1 w-full">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search products..."
              className="w-full bg-slate-950/80 border border-slate-800 focus:border-indigo-500 rounded-xl pl-10 pr-4 py-2.5 text-xs md:text-sm text-white placeholder-slate-500 focus:outline-none transition-all duration-200"
            />
          </div>

          {/* Category Dropdown UI */}
          <div className="relative w-full sm:w-auto">
            <select
              defaultValue="All Categories"
              className="w-full sm:w-48 appearance-none bg-slate-950/80 border border-slate-800 hover:border-slate-700 text-slate-200 text-xs md:text-sm font-medium rounded-xl px-4 py-2.5 pr-10 cursor-pointer focus:outline-none focus:border-indigo-500 transition-all capitalize"
            >
              <option value="All Categories" className="bg-slate-900 text-slate-200">All Categories</option>
              <option value="men's clothing" className="bg-slate-900 text-slate-200">Men's Clothing</option>
              <option value="women's clothing" className="bg-slate-900 text-slate-200">Women's Clothing</option>
              <option value="jewelery" className="bg-slate-900 text-slate-200">Jewelery</option>
              <option value="electronics" className="bg-slate-900 text-slate-200">Electronics</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
          </div>

          {/* Sort Dropdown UI */}
          <div className="relative w-full sm:w-auto">
            <select
              defaultValue="Featured"
              className="w-full sm:w-44 appearance-none bg-slate-950/80 border border-slate-800 hover:border-slate-700 text-slate-200 text-xs md:text-sm font-medium rounded-xl px-4 py-2.5 pr-10 cursor-pointer focus:outline-none focus:border-indigo-500 transition-all"
            >
              <option value="Featured" className="bg-slate-900 text-slate-200">Featured</option>
              <option value="Price: Low to High" className="bg-slate-900 text-slate-200">Price: Low to High</option>
              <option value="Price: High to Low" className="bg-slate-900 text-slate-200">Price: High to Low</option>
              <option value="Top Rated" className="bg-slate-900 text-slate-200">Top Rated</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
          </div>

        </div>
      </div>

      {/* ================= PRODUCTS GRID ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center pt-2">
        {products.map((item) => (
          <Link key={item.title.concat(item.id,item.category)} to='/product-display/7'>
            <ProductCard product={item} />
          </Link>
        ))}
      </div>

    </div>
  );
}