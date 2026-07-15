import React, { useContext } from 'react'
import Card from './Card'
import { MyStore } from '../Context/MyStore'

const Home = () => {
    const { products, cartItems } = useContext(MyStore)


    if (products.length === 0) {
        return (
            <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col items-center justify-center min-h-[50vh]">
                <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-indigo-500"></div>
                <p className="text-slate-400 text-sm mt-4 tracking-wide">Loading items...</p>
            </main>
        )
    }

    return (
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col gap-8">

            <div className="flex flex-col gap-1">
                <h1 className="text-2xl font-bold text-white tracking-tight">Explore Products</h1>
                <p className="text-sm text-slate-400 mt-1">Discover trending items curated just for you.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
                {
                    
                    products.map((product) => {
                        const isProductInCart = cartItems.find((item) => { return product.id === item.id })                        
                        const quantity = isProductInCart ? isProductInCart.quantity : 0;
                        return <Card key={product.id} product={product}  quantity={quantity}/>
                    })
                }
            </div>
        </main>
    )
}

export default Home