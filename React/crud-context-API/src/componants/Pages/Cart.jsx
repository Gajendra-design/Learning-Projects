import React, { useContext } from 'react'
import { UserStore } from '../../context/userStore'
import CartRecipiecard from '../Recipie/CartRecipiecard'

const Cart = () => {
  const { currentUser, setIsCartOpen } = useContext(UserStore)
  const cartItems = currentUser?.cartItems || [];

  return (
    <div className='w-full space-y-6'>
      {/* Feed Header */}
      <div className='flex justify-between items-center border-b border-gray-900 pb-5'>
        <div>
          <h1 className='text-2xl font-black tracking-wide text-gray-100'>Your Selection Basket</h1>
          <p className='text-xs text-gray-500 mt-0.5'>Manage selected items, quantities, and recipe materials.</p>
        </div>

        {/* Total Selection Items Count Pill */}
        {cartItems.length > 0 && (
          <span className='text-xs bg-orange-500/10 text-orange-400 px-3 py-1.5 border border-orange-500/20 rounded-full font-medium'>
            {cartItems.length} Selected {cartItems.length === 1 ? 'Item' : 'Items'}
          </span>
        )}
      </div>

      {/* Conditional Layer: Check if user has zero items inside the selection basket */}
      {cartItems.length === 0 ? (
        <div className='flex flex-col items-center justify-center border border-dashed border-gray-900 rounded-2xl py-16 px-6 text-center bg-gray-950 max-w-xl mx-auto my-12 space-y-5 animate-in fade-in duration-200'>
          <div className='h-14 w-14 rounded-2xl bg-gradient-to-br from-orange-500/10 to-red-500/10 border border-orange-500/20 flex items-center justify-center text-2xl text-orange-400 select-none shadow-md shadow-orange-950/20 animate-pulse'>
            🛒
          </div>
          <div className='space-y-1.5'>
            <h3 className='text-base font-bold text-gray-200 tracking-wide'>Your Selection Basket is Empty</h3>
            <p className='text-xs text-gray-500 max-w-sm mx-auto leading-relaxed'>
              You haven't added any culinary blueprints to your setup catalog yet. Explore the feed to bookmark blueprints!
            </p>
          </div>
          
          {/* Action Trigger Button to return to exploration feed */}
          <button
            type='button'
            onClick={() => setIsCartOpen(false)}
            className='px-5 py-2.5 text-xs font-bold bg-gradient-to-r from-orange-600 to-orange-700 hover:from-orange-500 hover:to-orange-600 text-white rounded-xl transition-all active:scale-[0.98] shadow-lg shadow-orange-950/40 tracking-wider uppercase cursor-pointer focus:outline-none focus:ring-2 focus:ring-orange-500/40'
          >
            Explore Recipe Feed
          </button>
        </div>
      ) : (
        /* Row Architecture for active items stream */
        <div className='flex flex-col gap-4 animate-in fade-in duration-200'>
          {cartItems.map((item) => {
             return <CartRecipiecard key={`${item.id}-${item.userName}`} item={item} />
          })}
        </div>
      )}
    </div>
  )
}

export default Cart