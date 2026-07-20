import React, { useContext } from 'react'
import { UserStore } from '../../context/UserStore'

const CartSidebar = () => {
  const { currentUser } = useContext(UserStore)
  
  // Guarantee basket data defaults to an empty array to prevent rendering faults
  const currentCartItems = currentUser?.cartItems || [];

  // 🛠️ DYNAMIC FINANCIAL LEDGER ENGINE
  const subtotal = currentCartItems.reduce((sum, item) => {
    const unitPrice = parseFloat(item.price) || 0;
    const quantity = parseInt(item.quantitiy, 10) || 1;
    return sum + (unitPrice * quantity);
  }, 0);

  return (
    <aside className='w-80 md:w-96 border-r border-gray-900 bg-gray-950/40 backdrop-blur-md h-full flex flex-col p-6 overflow-y-auto shrink-0 select-none no-scrollbar'>
      
      {/* Header */}
      <div className='mb-6 border-b border-gray-900 pb-4'>
        <div className='flex items-center gap-2'>
          <span className={`h-2 w-2 rounded-full ${currentCartItems.length > 0 ? 'bg-red-500 animate-pulse' : 'bg-gray-700'}`} />
          <h2 className='text-xl font-black tracking-wide bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent'>
            ORDER SUMMARY
          </h2>
        </div>
        <p className='text-xs text-gray-500 mt-1'>Review ingredients & kits before processing.</p>
      </div>

      {/* Itemized Stack Dynamic Display from Current User Cart Array */}
      <div className='flex flex-col gap-3 mb-6 flex-1 overflow-y-auto no-scrollbar'>
        {currentCartItems.length === 0 ? (
          <div className='py-8 text-center text-xs text-gray-600 font-medium'>
            No items inside order workspace pipeline.
          </div>
        ) : (
          currentCartItems.map((item, idx) => {
            const unitPrice = parseFloat(item.price) || 0;
            const quantity = parseInt(item.quantitiy, 10) || 1;
            const combinedPrice = unitPrice * quantity;

            return (
              <div 
                key={`${item.id}-${idx}`} 
                className='flex justify-between items-center bg-gray-900/30 border border-gray-900 p-3 rounded-xl gap-2 group hover:border-gray-800 transition-colors'
              >
                <div className='flex flex-col min-w-0'>
                  <span className='text-xs font-bold text-gray-400 truncate max-w-[180px] group-hover:text-gray-200 transition-colors'>
                    {item.recipeName}
                  </span>
                  <span className='text-[10px] font-semibold text-gray-600 mt-0.5'>
                    ${unitPrice.toFixed(2)} × {quantity}
                  </span>
                </div>
                <span className='text-xs font-bold text-gray-200 shrink-0 font-mono'>
                  ${combinedPrice.toFixed(2)}
                </span>
              </div>
            )
          })
        )}
      </div>

      {/* Financial Ledger Section */}
      <div className='mt-auto space-y-4 border-t border-gray-900 pt-4 bg-gray-950/20'>
        <div className='space-y-2'>
          <div className='flex justify-between text-xs text-gray-500'>
            <span>Subtotal</span>
            <span className='text-gray-300 font-mono'>${subtotal.toFixed(2)}</span>
          </div>
          <div className='flex justify-between text-xs text-gray-500'>
            <span>Estimated Delivery</span>
            <span className='text-emerald-500 font-medium'>FREE</span>
          </div>
          <div className='flex justify-between text-sm font-bold border-t border-gray-900/50 pt-2 text-gray-200'>
            <span>Total Amount</span>
            <span className='text-red-400 font-mono'>${subtotal.toFixed(2)}</span>
          </div>
        </div>

        {/* Action Button Activation Rule Matrices */}
        <button 
          type="button" 
          disabled={currentCartItems.length === 0}
          className={`w-full py-3.5 text-xs font-bold rounded-xl transition-all shadow-lg tracking-widest uppercase outline-none ${
            currentCartItems.length === 0
              ? 'bg-gray-900 text-gray-600 border border-gray-850 cursor-not-allowed shadow-none opacity-50'
              : 'bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white shadow-red-950/40 cursor-pointer active:scale-[0.98]'
          }`}
        >
          Secure Checkout
        </button>
      </div>
    </aside>
  )
}

export default CartSidebar