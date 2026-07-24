import React, { useContext, useEffect, useState } from 'react';
import { Search, ChevronDown, X } from 'lucide-react';
import ProductCard from '../Particals/ProductCard';
import axios from 'axios';
import { MyStore } from '../../Context/MyStore';
import { Outlet, useParams } from 'react-router';

export default function Shop() {

  const {productCatagory} = useParams() 
  const { products, setProducts, loggedInUser } = useContext(MyStore)
  const [searchText, setSearchText] = useState('')
  const [catagory, setCatagory] = useState(productCatagory === "all" ? "" : productCatagory.toLowerCase());
  const [priceRange, setPriceRange] = useState('')  


  const getProducts = async (url) => {
    const response = await axios.get(url);
    const products = response.data
    localStorage.setItem('products', JSON.stringify(products))
    setProducts(products)
  }

  //i am using useEffect for handeling infinite calling of getProduct funciton because of setProduct rerender and the call as we studied
  useEffect(() => { getProducts('https://fakestoreapi.com/products') }, [])

  const getResults = () => {

    const filterProducts = products.filter((item) => {

      //sabse phale searh ke according filter karege agar usme kuch hai tho
      //so iske liye condition set kaege agar search bar empty hai to true rakege parameter and nah tho uske according kya filter condition honi chaiye
      const searchCondition = searchText === '' || ((item.title.toLowerCase().includes(searchText.toLowerCase())) || (item.description.toLowerCase().includes(searchText.toLowerCase())))

      //phir catagroy ke according filter karege agar usme kuch hai tho
      //so iske liye bhi condition set karege ki catagry me kuch hai tho uske according filter condition set karege nahi tho phir true assign karwa dege
      const catagoryCondition = catagory === "" || item.category.toLowerCase() === catagory.toLowerCase()

      //now humne search ke and catagory ke accordin filter condition ready kar li hai ki agar unme kuch nahi hai tho true nahi tho filter condition unki
      // so ab return condition ready karge jisme agar done me kuch hai bhi nahi tho bhi pure product kyuki donen me true hai return ho nahoi tho filter ho donen me jo condition hai uske according

      return searchCondition && catagoryCondition;

    }).sort((a, b) => { //phir price range ke according sort karege agar usme kuch hai tho isko direct chain karo thaki alag se variable na banan pade

      // a-b assemding ke liye b-a decending ke liye
      if (priceRange === "Price: Low to High") {
        return a.price - b.price;
      } else if (priceRange === "Price: High to Low") {
        return b.price - a.price
      }

      //price me kuch nahi hai tho jo order hai usko mainain karo
      return 0
    })

    return filterProducts; 4231

  }

  const clearAllFilters = ()=>{
    setSearchText('');
    setCatagory('');
    setPriceRange('');
  }

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
              onChange={(e) => {
                setSearchText(e.target.value)
              }}
              value={searchText}
              type="text"
              placeholder="Search products..."
              className="w-full bg-slate-950/80 border border-slate-800 focus:border-indigo-500 rounded-xl pl-10 pr-4 py-2.5 text-xs md:text-sm text-white placeholder-slate-500 focus:outline-none transition-all duration-200"
            />
          </div>

          {/* Category Dropdown UI */}
          <div className="relative w-full sm:w-auto">
            <select
            value={catagory}
              onChange={(e) => {
                setCatagory(e.target.value)
              }}
              className="w-full sm:w-48 appearance-none bg-slate-950/80 border border-slate-800 hover:border-slate-700 text-slate-200 text-xs md:text-sm font-medium rounded-xl px-4 py-2.5 pr-10 cursor-pointer focus:outline-none focus:border-indigo-500 transition-all capitalize"
            >
              <option className="bg-slate-900 text-slate-200" value=''>Catagory</option>
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
            value={priceRange}
              onChange={(e) => { setPriceRange(e.target.value) }}
              defaultValue="Featured"
              className="w-full sm:w-44 appearance-none bg-slate-950/80 border border-slate-800 hover:border-slate-700 text-slate-200 text-xs md:text-sm font-medium rounded-xl px-4 py-2.5 pr-10 cursor-pointer focus:outline-none focus:border-indigo-500 transition-all"
            >
              <option value="" selected className="bg-slate-900 text-slate-200">Price</option>
              <option value="Price: Low to High" className="bg-slate-900 text-slate-200">Price: Low to High</option>
              <option value="Price: High to Low" className="bg-slate-900 text-slate-200">Price: High to Low</option>
            </select>
            <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
          </div>

          {/* adding clear button for clearing everthing in search and filter */}
            {(searchText || catagory || priceRange) && (
              <button
                onClick={clearAllFilters}
                className="flex items-center gap-1.5 px-3 py-2.5 text-xs md:text-sm font-medium text-slate-400 hover:text-white bg-slate-950/80 hover:bg-slate-800 border border-slate-800 hover:border-slate-700 rounded-xl transition-all duration-200 cursor-pointer shrink-0"
              >
                <X className="w-3.5 h-3.5" />
                <span>Clear</span>
              </button>
            )}

        </div>
      </div>

      {/* ================= PRODUCTS GRID ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center pt-2">
        {
          //now humne hamare getResults ko aise design kiya hai ki agar hamare search and fiter me kuch value nahi hai tho hit filter products will simply be all the products in the product array spo humko extra conditional rendering nahi karni hogi
          getResults().map((item) => {

            const isCartItem = loggedInUser.cartItems.some(userCartitem => userCartitem.id === item.id)
    
              return (<ProductCard key={item.title.concat(item.id, item.category)} product={item} isCartItem={isCartItem} />)
          })
        }
      </div>


    </div>

  );
}