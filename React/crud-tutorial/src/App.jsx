import React, { useState } from 'react'
import { ProductCard } from './componants/ProductCard'
import {productsData} from './Data/data'

const App = () => {
  
  
  const [products,setProducts] = useState(productsData)

  function deleteProduct(id){
    const updatedProducts = products.filter((product)=>{
      return product.id !== id;
    })

    setProducts(updatedProducts)
  }
 
  return (
    <div className='flex flex-wrap p-4 w-full h-full justify-center gap-4'>
        {
          products.map((product)=>{
            return <ProductCard key = {product.id} product = {product} deleteProduct = {deleteProduct}/>
          })
        }
    </div>
  )
}

export default App
