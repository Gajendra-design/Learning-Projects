import React from 'react'

const Cart = () => {
  const activeCartArray = [
    { id: 1, title: 'Smoked Garlic Ribeye Steak', img: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80', price: 24.99, qty: 1 },
    { id: 2, title: 'Zesty Avocado Citrus Salad', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80', price: 12.50, qty: 2 }
  ]

  return (
    <div className='w-full space-y-6'>
      {/* Feed Header */}
      <div className='flex justify-between items-center border-b border-gray-900 pb-5'>
        <div>
          <h1 className='text-2xl font-black tracking-wide text-gray-100'>Your Selection Basket</h1>
          <p className='text-xs text-gray-500 mt-0.5'>Manage selected items, quantities, and recipe materials.</p>
        </div>
      </div>

      {/* Row Architecture */}
      <div className='flex flex-col gap-4'>
        {activeCartArray.map((item) => (
          <div 
            key={item.id} 
            className='flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-gray-900/20 border border-gray-900 rounded-2xl group hover:border-gray-800/80 transition-all duration-300'
          >
            {/* Left Media Block */}
            <div className='flex items-center gap-4 w-full sm:w-auto'>
              <div className='h-16 w-16 rounded-xl overflow-hidden bg-gray-950 shrink-0 border border-gray-800'>
                <img src={item.img} alt={item.title} className='w-full h-full object-cover' />
              </div>
              <div>
                <h3 className='font-bold text-sm text-gray-200 group-hover:text-red-400 transition-colors tracking-wide line-clamp-1'>
                  {item.title}
                </h3>
                <p className='text-xs font-bold text-red-500/80 mt-0.5'>${item.price.toFixed(2)} each</p>
              </div>
            </div>

            {/* Right Interactive Controllers Row */}
            <div className='flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto border-t sm:border-t-0 border-gray-900 pt-3 sm:pt-0'>
              {/* Fake Selector Pill */}
              <div className='flex items-center bg-gray-950 border border-gray-800 rounded-xl px-2 py-1'>
                <button type='button' className='px-2 py-1 text-gray-500 hover:text-white transition-colors text-xs font-bold'>-</button>
                <span className='px-3 text-xs font-bold text-gray-300'>{item.qty}</span>
                <button type='button' className='px-2 py-1 text-gray-500 hover:text-white transition-colors text-xs font-bold'>+</button>
              </div>

              {/* Total Calculation Tag & Trash Shell */}
              <div className='flex items-center gap-4'>
                <span className='text-sm font-bold text-gray-200 min-w-[60px] text-right'>
                  ${(item.price * item.qty).toFixed(2)}
                </span>
                <button type='button' className='p-2.5 text-xs bg-red-950/20 border border-red-900/20 text-red-400 hover:bg-red-600 hover:text-white rounded-xl transition-all cursor-pointer'>
                  ✕
                </button>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  )
}

export default Cart