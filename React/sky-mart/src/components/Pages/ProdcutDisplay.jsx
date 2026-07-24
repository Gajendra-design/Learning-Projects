import React, { useContext, useEffect, useState } from 'react';
import { 
  Star, 
  ShoppingBag, 
  Heart, 
  Truck, 
  ShieldCheck, 
  RotateCcw, 
  ChevronLeft, 
  ChevronRight, 
  ArrowLeft 
} from 'lucide-react';
import { Link, useParams } from 'react-router';
import ProductCard from '../Particals/ProductCard';
import axios from 'axios';
import { MyStore } from '../../Context/MyStore';

export default function ProductDisplay() {

const {id} = useParams()
const nextId = Number(id)+1;
const previousId = Number(id)-1;
const [currentProduct,setCurrentProducts] = useState(null); 
const [reletedProducts,setReletedProducts] = useState(null);
const {products} = useContext(MyStore);



  const getData = async () =>{
    const data = await (await axios.get(`https://fakestoreapi.com//products/${id}`)).data
    const filterProducts = products.filter((product)=>{
      return product.category === data.category
    })
    setCurrentProducts(data);
    setReletedProducts(filterProducts)  
  }

  useEffect(()=>{getData()},[id])

  


  if(!currentProduct){
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        <p className="text-lg font-medium text-slate-400">Loading product details...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 px-4 py-6 md:px-12 font-sans space-y-10">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* ================= BREADCRUMBS ================= */}
        <nav className="flex items-center gap-2 text-xs md:text-sm text-slate-400">
          <Link to="/shop/all" className="hover:text-indigo-400 transition-colors flex items-center gap-1">
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Products</span>
          </Link>
          <span>/</span>
          <Link to={`/shop/${currentProduct.category}`} className="hover:text-indigo-400 transition-colors">
            {currentProduct.category}
          </Link>
          <span>/</span>
          <span className="text-white font-medium">{currentProduct.title}</span>
        </nav>

        {/* ================= MAIN PRODUCT HERO (SIDE-BY-SIDE ON LG) ================= */}
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-10 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            
            {/* Left: Product Image Container */}
            <div className="relative w-full h-80 sm:h-96 lg:h-[480px] bg-slate-950/80 border border-slate-800 rounded-2xl overflow-hidden flex items-center justify-center p-8">
              <img 
                src={currentProduct.image} 
                alt={currentProduct.title} 
                className="max-h-full max-w-full object-contain hover:scale-105 transition-transform duration-300"
              />
            </div>

            {/* Right: Product Details Section */}
            <div className="space-y-6">
              
              {/* Category Pill */}
              <div>
                <span className="inline-block text-xs font-semibold uppercase tracking-wider text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full">
                  {currentProduct.category}
                </span>
              </div>

              {/* Title & Rating */}
              <div className="space-y-2">
                <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
                  {currentProduct.title}
                </h1>

                {/* Rating Stars */}
                <div className="flex items-center gap-3 text-sm">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`w-4 h-4 ${i < Math.floor(currentProduct.rating.rate) ? 'fill-amber-400' : 'text-slate-600'}`} 
                      />
                    ))}
                    <span className="font-bold text-white ml-1">{currentProduct.rating.rate}</span>
                  </div>
                  <span className="text-slate-500 text-xs">({currentProduct.rating.count} reviews)</span>
                </div>
              </div>

              {/* Price Indicator */}
              <div className="pt-2 border-t border-slate-800/80">
                <span className="text-3xl md:text-4xl font-extrabold text-indigo-400 tracking-tight">
                  ${currentProduct.price.toFixed(2)}
                </span>
              </div>

              {/* Description */}
              <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                {currentProduct.description}
              </p>

              {/* Add To Cart & Favorite Actions */}
              <div className="flex items-center gap-4 pt-2">
                <button className="flex-1 flex items-center justify-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white font-bold px-8 py-4 rounded-2xl transition duration-200 shadow-lg shadow-indigo-500/20 active:scale-[0.98]">
                  <ShoppingBag className="w-5 h-5" />
                  <span>Add to Cart</span>
                </button>

                <button 
                  title="Save to favorites"
                  className="p-4 rounded-2xl bg-slate-950/80 hover:bg-slate-800 text-slate-300 hover:text-rose-400 border border-slate-800 transition duration-200"
                >
                  <Heart className="w-5 h-5" />
                </button>
              </div>

              {/* Features Row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-6 border-t border-slate-800/80">
                <div className="bg-slate-950/50 border border-slate-800/80 rounded-xl p-3 flex flex-col items-center justify-center text-center gap-1">
                  <Truck className="w-4 h-4 text-indigo-400" />
                  <span className="text-xs font-semibold text-white">Free Delivery</span>
                  <span className="text-[10px] text-slate-500">On orders $50+</span>
                </div>

                <div className="bg-slate-950/50 border border-slate-800/80 rounded-xl p-3 flex flex-col items-center justify-center text-center gap-1">
                  <ShieldCheck className="w-4 h-4 text-indigo-400" />
                  <span className="text-xs font-semibold text-white">Secure Pay</span>
                  <span className="text-[10px] text-slate-500">256-bit SSL</span>
                </div>

                <div className="bg-slate-950/50 border border-slate-800/80 rounded-xl p-3 flex flex-col items-center justify-center text-center gap-1">
                  <RotateCcw className="w-4 h-4 text-indigo-400" />
                  <span className="text-xs font-semibold text-white">Easy Returns</span>
                  <span className="text-[10px] text-slate-500">30-day policy</span>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* ================= PAGINATION BUTTONS ================= */}
        <div className="flex items-center justify-between gap-4">
          
          {
            (previousId === 0 ) ||
            <Link to={`/product/${previousId}`} className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-slate-300 px-6 py-3 rounded-xl border border-slate-800 transition duration-200 text-xs font-semibold">
            <ChevronLeft className="w-4 h-4" />
            <span>Previous</span>
          </Link>
          }

          {
            (nextId > products.length) || 
            <Link to={`/product/${Number(id)+1}`} className="flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-3 rounded-xl transition duration-200 text-xs font-semibold shadow-md">
            <span>Next</span>
            <ChevronRight className="w-4 h-4" />
          </Link>
          }
        </div>

        {/* ================= RELATED PRODUCTS ================= */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl font-bold text-white tracking-wide">
            Related Products
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {reletedProducts.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}