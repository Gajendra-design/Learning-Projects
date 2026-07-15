import React, { useContext } from 'react'
import { MyStore } from '../Context/MyStore'
import Card from './Card'

const Cart = () => {

  const {cartItems,setIsCartOpen} = useContext(MyStore)

  if (cartItems.length === 0) {
    return (
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 flex flex-col items-center justify-center text-center">
        <div className="bg-slate-900 border border-slate-800 p-6 rounded-full text-slate-500 mb-6 shadow-xl shadow-slate-950/50">
          <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
          </svg>
        </div>

        <h1 className="text-2xl font-bold text-white tracking-tight mb-2">Your Cart is Empty</h1>
        <p className="text-sm text-slate-400 max-w-sm mb-8 leading-relaxed">
          Looks like you haven't added anything to your cart yet. Head back to the store to find something you love.
        </p>

        <button onClick={()=>{setIsCartOpen(false)}} type="button" className="bg-indigo-600 hover:bg-indigo-500 text-white text-sm font-semibold px-6 py-3 rounded-xl transition-all shadow-md shadow-indigo-950/50 hover:scale-[1.02] active:scale-[0.98]">
          Continue Shopping
        </button>
      </main>
    )
  }

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 flex flex-col gap-8">
      <div className="flex flex-col gap-1">
        <h1 className="text-2xl font-bold text-white tracking-tight">Your Cart</h1>
        <p className="text-sm text-slate-400">Review your selected items before checkout.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
        {cartItems.map((item) => (
          <Card key={item.id} product={item} quantity={item.quantity} />
        ))}
      </div>
    </main>
  )
}

export default Cart