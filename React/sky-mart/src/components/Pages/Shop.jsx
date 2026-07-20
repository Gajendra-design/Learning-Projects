import React from 'react';
import { Search, ChevronDown} from 'lucide-react';
import ProductCard from '../Particals/ProductCard';
import { Link } from 'react-router';

export default function Shop() {
  // Static Dummy Products Data
  const products = [
    {
      id: 1,
      title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
      price: 109.95,
      description: "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
      rating: { rate: 3.9, count: 120 }
    },
    {
      id: 2,
      title: "Mens Casual Premium Slim Fit T-Shirts",
      price: 22.3,
      description: "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing.",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
      rating: { rate: 4.1, count: 259 }
    },
    {
      id: 3,
      title: "Mens Cotton Jacket",
      price: 55.99,
      description: "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling.",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
      rating: { rate: 4.7, count: 500 }
    },
    {
      id: 4,
      title: "Mens Casual Slim Fit",
      price: 15.99,
      description: "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person.",
      category: "men's clothing",
      image: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_t.png",
      rating: { rate: 2.1, count: 430 }
    },
    {
      id: 5,
      title: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
      price: 695,
      description: "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl.",
      category: "jewelery",
      image: "https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_t.png",
      rating: { rate: 4.6, count: 400 }
    },
    {
      id: 6,
      title: "Solid Gold Petite Micropave",
      price: 168,
      description: "Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States.",
      category: "jewelery",
      image: "https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_t.png",
      rating: { rate: 3.9, count: 70 }
    },
    {
      id: 7,
      title: "White Gold Plated Princess",
      price: 9.99,
      description: "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement.",
      category: "jewelery",
      image: "https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_t.png",
      rating: { rate: 3, count: 400 }
    },
    {
      id: 8,
      title: "Pierced Owl Rose Gold Plated Stainless Steel Double",
      price: 10.99,
      description: "Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel",
      category: "jewelery",
      image: "https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_t.png",
      rating: { rate: 1.9, count: 100 }
    }
  ];

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
          <Link to='/product-display/7'>
          <ProductCard key={item.id} product={item} />
          </Link>
        ))}
      </div>

    </div>
  );
}