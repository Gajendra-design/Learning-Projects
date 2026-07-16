import React from 'react'

const CartSidebar = () => {
  // Visual placeholder data array for calculation design
  const cartSummaryItems = [
    { id: 1, name: 'Smoked Garlic Ribeye Steak', price: 24.99 },
    { id: 2, name: 'Zesty Avocado Citrus Salad', price: 12.50 }
  ]

  return (
    <aside className='w-80 md:w-96 border-r border-gray-900 bg-gray-950/40 backdrop-blur-md h-full flex flex-col p-6 overflow-y-auto shrink-0 select-none'>
      {/* Header */}
      <div className='mb-6 border-b border-gray-900 pb-4'>
        <div className='flex items-center gap-2'>
          <span className='h-2 w-2 rounded-full bg-red-500' />
          <h2 className='text-xl font-black tracking-wide bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent'>
            ORDER SUMMARY
          </h2>
        </div>
        <p className='text-xs text-gray-500 mt-1'>Review ingredients & kits before processing.</p>
      </div>

      {/* Itemized Stack Dynamic Display from Array */}
      <div className='flex flex-col gap-3 mb-6'>
        {cartSummaryItems.map(item => (
          <div key={item.id} className='flex justify-between items-center bg-gray-900/30 border border-gray-900 p-3 rounded-xl'>
            <span className='text-xs font-medium text-gray-400 truncate max-w-[180px]'>{item.name}</span>
            <span className='text-xs font-bold text-gray-200'>${item.price.toFixed(2)}</span>
          </div>
        ))}
      </div>

      {/* Financial Ledger Section */}
      <div className='mt-auto space-y-4 border-t border-gray-900 pt-4'>
        <div className='space-y-2'>
          <div className='flex justify-between text-xs text-gray-500'>
            <span>Subtotal</span>
            <span className='text-gray-300'>$37.49</span>
          </div>
          <div className='flex justify-between text-xs text-gray-500'>
            <span>Estimated Delivery</span>
            <span className='text-emerald-500 font-medium'>FREE</span>
          </div>
          <div className='flex justify-between text-sm font-bold border-t border-gray-900/50 pt-2 text-gray-200'>
            <span>Total Amount</span>
            <span className='text-red-400'>$37.49</span>
          </div>
        </div>

        {/* Action button */}
        <button 
          type="button" 
          className='w-full py-3.5 text-xs font-bold bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white rounded-xl transition-all active:scale-[0.98] shadow-lg shadow-red-950/40 tracking-widest uppercase cursor-pointer'
        >
          Secure Checkout
        </button>
      </div>
    </aside>
  )
}

export default CartSidebar