import React, { useState } from 'react'
import SearchAndFilter from '../components/SearchAndFilter'
import ProductCard from '../components/ProductCard'
import { getProductCatagoryApi, getProductsApi } from '../../api/productApi'
import { useGetProductByCatagory, useGetProducts } from '../../hooks/productsHook'

const ProductPage = () => {

  const [catagory, setCatagory] = useState('all')

  const { data: products, isPending: isProductPending } = useGetProducts()
  const { data: productsByCatagory, isPending: isProductByCatagoryPending } = useGetProductByCatagory(catagory)
  console.log(productsByCatagory);




  return (
    <div className="min-h-[calc(100vh-65px)] bg-slate-950 text-slate-100 p-6 sm:p-10 font-sans">
      <div className="max-w-7xl mx-auto space-y-8">

        {/* Page Header */}
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">Explore Products</h1>
          <p className="text-xs sm:text-sm text-slate-400 mt-1">Browse our latest collection and special offers.</p>
        </div>

        {/* Filter Bar */}
        <SearchAndFilter
          catagory={catagory}
          setCatagory={setCatagory}
        />

        {/* Product Grid */}
        {!isProductPending ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-slate-900/30 border border-slate-800/80 rounded-2xl">
            <p className="text-slate-400 text-sm">Loading Products.....</p>
          </div>
        )}

      </div>
    </div>
  )
}

export default ProductPage