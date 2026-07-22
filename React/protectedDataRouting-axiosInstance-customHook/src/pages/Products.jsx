import React, { useContext, useEffect, useState } from 'react'
import { MyStore } from '../Context/MyStore'
import ProductCard from '../components/ProductCard';
import { axiosInstance } from '../config/axiosInstance';
import { useApi } from '../hooks/useApi';

const Products = () => {

  const {isLoading,data} = useApi('/products')
  

if(isLoading) return <h1>Loading....</h1>

  return (
    <div className='grid grid-cols-4 p-8 gap-4'>
      {data.map(product => <ProductCard key={product.id} product={product} />)}
    </div>
  )
}

export default Products