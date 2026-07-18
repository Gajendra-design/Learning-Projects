import React, { useContext } from 'react'
import { FunctionStore } from '../../context/FunctionalStore';

const CartRecipiecard = ({ item }) => {

    const {handelRemoveCart,handelIncreaseQuantity,handelDecreaseQuantity} = useContext(FunctionStore)

  // Convert the string price to a float and safely capture the custom 'quantitiy' key spelling
  const unitPrice = parseFloat(item?.price) || 0;
  const quantity = parseInt(item?.quantitiy, 10) || 1;
  const totalPrice = unitPrice * quantity;

  return (
    <div className='flex flex-col sm:flex-row items-center justify-between gap-4 p-4 bg-gray-900/20 border border-gray-900 rounded-2xl group hover:border-gray-800/80 transition-all duration-300 shadow-md select-none'>
      
      {/* Left Media Block */}
      <div className='flex items-center gap-4 w-full sm:w-auto'>
        {/* Thumbnail Image Display */}
        <div className='h-16 w-16 rounded-xl overflow-hidden bg-gray-950 shrink-0 border border-gray-800'>
          <img 
            src={item?.imageLink} 
            alt={item?.recipeName} 
            className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500' 
          />
        </div>
        
        {/* Title & Unit Pricing Column */}
        <div className='overflow-hidden'>
          <h3 className='font-bold text-sm text-gray-200 group-hover:text-red-400 transition-colors tracking-wide line-clamp-1'>
            {item?.recipeName}
          </h3>
          <div className='flex flex-col gap-0.5 mt-0.5'>
            <p className='text-xs font-bold text-red-500/80'>${unitPrice.toFixed(2)} each</p>
            <p className='text-[10px] text-gray-500 font-medium'>
              By <span className='text-gray-400'>{item?.chefName}</span>
            </p>
          </div>
        </div>
      </div>

      {/* Right Interactive Controllers Row */}
      <div className='flex items-center justify-between sm:justify-end gap-6 w-full sm:w-auto border-t sm:border-t-0 border-gray-900/60 pt-3 sm:pt-0'>
        
        {/* Quantity Increment/Decrement Controls */}
        <div className='flex items-center bg-gray-950 border border-gray-800 rounded-xl px-2 py-1'>
          <button 
            onClick={()=>{handelDecreaseQuantity(item)}}
            type='button' 
            className='px-2 py-1 text-gray-500 hover:text-white transition-colors text-xs font-bold cursor-pointer active:scale-90 outline-none select-none'
          >
            -
          </button>
          <span className='px-3 text-xs font-bold text-gray-300 min-w-[20px] text-center'>
            {quantity}
          </span>
          <button 
            onClick={()=>{handelIncreaseQuantity(item)}}
            type='button' 
            className='px-2 py-1 text-gray-500 hover:text-white transition-colors text-xs font-bold cursor-pointer active:scale-90 outline-none select-none'
          >
            +
          </button>
        </div>

        {/* Total Price Metric Display & Remove Control Item */}
        <div className='flex items-center gap-4'>
          <span className='text-sm font-bold text-gray-200 min-w-[65px] text-right tracking-wide'>
            ${totalPrice.toFixed(2)}
          </span>
          <button 
            onClick={()=>{
                handelRemoveCart(item,item.userName,item.email)
            }}
            type='button' 
            className='p-2.5 text-xs bg-red-950/20 border border-red-900/20 text-red-400 hover:bg-red-600 hover:text-white rounded-xl transition-all cursor-pointer active:scale-95 outline-none'
          >
            ✕
          </button>
        </div>
      </div>

    </div>
  )
}

export default CartRecipiecard