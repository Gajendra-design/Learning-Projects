import React, { useContext, useEffect, useState } from 'react'
import { MyStore } from '../Context/MyStore'
import axios from 'axios';
import ProductCard from '../components/ProductCard';

const Products = () => {

const {products, setProducts} = useContext(MyStore);
const [isLoading,setIsLoading] = useState(true);

const getProductData = async ()=>{

  const res = await axios.get('https://fakestoreapi.com/products')
  const data = res.data
  setProducts(data);
  setIsLoading(false);
}

useEffect(()=>{getProductData()},[])

if(isLoading) return <h1>Loading....</h1>

  return (
    <div className='grid grid-cols-4 p-8 gap-4'>
      {products.map(product => <ProductCard product={product} />)}
    </div>
  )
}

export default Products