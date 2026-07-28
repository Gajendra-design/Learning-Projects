import axios from 'axios'
import React, { useEffect, useMemo, useState } from 'react'

const App = () => {

  const [products, setProducts] = useState(null);
  const [searchText, setSearchText] = useState('');   //isme one way binding se input ki value lenge  
  const [debounceText, setDebounceText] = useState('') //isme hum final text save karege jisse humko result lana hai

  //ye function api data layega
  const getProducts = async () => {
    try {
      const productData = (await axios.get('https://fakestoreapi.com/products')).data;
      setProducts(productData)
    } catch (err) {
      console.log(err);
    }
  }

  //ye useEffect humko infinite funciton callling se bachayega in getProducts
  useEffect(() => { getProducts() }, [])

  //ye user Effect sambhalega ki thode time baad hi set karo deBounce text jisse humko search karna hai
  useEffect(() => {

    // The Issue with if (!searchText):
    // When you type "men", debounceText updates to "men" after 1 second.
    // If you now backspace and delete everything (making searchText = ""), the guard clause if (!searchText) return triggers and exits early.
    // Because it exits early, setDebounceText("") is never called!
    // Result: debounceText remains stuck on "men", and clearing your input field won't clear the search results.

    //     if(!searchText || !products){
    //       return 
    //     }

    if(!products){
      return;
    }

    const timeOut = setTimeout(() => {
      setDebounceText(searchText)
    }, 700)

    return () => clearTimeout(timeOut)   //hamare useEffect funciton ki help se intervel clear karna na bhule so ye clear karega jab searchText change hoga and ye wlaa useEffect wapis chalega

  }, [searchText])


  //now hum useEffect ka use karege taki humko baar barr filter ka result calculate karne k need nahi pade ye first time cauculate hoga jab prosucts change hoga uani usme data aayega and ye re calculate hoga keval jab debouce text jo ki hamara fial text hai jab user 700ms tak type nahi karega tab aayega 
  const filterResult = useMemo(()=>{

    if(!debounceText){
      return products
    }

    const filterProducts = products.filter((product)=>{
      return product.title.toLowerCase().includes(debounceText.toLowerCase())
    })

    return filterProducts

    
  },[debounceText,products])

  return (
    <>
      <h1>Debouncing search see the console</h1>
      <input
        onChange={(e) => { setSearchText(e.target.value) }}
        type="text"
        placeholder='search here.....'
      />
      <div className='container'>
        {
          products === null ?
            <h1>Loading Products</h1> :
            filterResult.map((product) => {
              return <h1 key={product.id} >{product.title}</h1>
            })
        }
      </div>
    </>

  )
}

export default App