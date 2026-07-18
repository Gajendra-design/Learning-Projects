import React, { useContext } from 'react'
import { FunctionStore } from '../../context/FunctionalStore'
import { UserStore } from '../../context/userStore'

const InspectBluePrint = () => {
  const { toggleInspectBluePrintOpen, handelAddToCart, handelRemoveCart, handelIncreaseQuantity, handelDecreaseQuantity } = useContext(FunctionStore)
  const { editRecipeData, setEditRecipeData } = useContext(UserStore)
  
  // Explicit safety fallback parameters for structural mapping
  const quantity = editRecipeData.quantitiy ? editRecipeData.quantitiy : null; //conditional renderind for handeling when editeRecipieDAta has no quality
  

  return (
    <div className='fixed inset-0 min-h-screen w-full bg-gray-950/10 backdrop-blur-sm z-80 flex items-center justify-center p-4 overflow-y-auto no-scrollbar select-none animate-in fade-in duration-200'>
      
      {/* Blueprint Card Shell Wrapper */}
      <div className='relative w-full max-w-2xl bg-gray-900/95 border border-gray-800/60 rounded-3xl shadow-2xl shadow-black/80 overflow-hidden flex flex-col z-90 animate-in zoom-in-95 duration-200 my-8'>
        
        {/* Banner Media Engine Header Frame */}
        <div className='h-56 w-full overflow-hidden bg-gray-950 relative border-b border-gray-900/60'>
          <img 
            src={editRecipeData.imageLink} 
            alt={editRecipeData.recipeName} 
            className='w-full h-full object-cover brightness-90'
          />
          
          {/* Close Action Trigger Overlay */}
          <button 
            type='button' 
            onClick={()=>{
              setEditRecipeData(null)
              toggleInspectBluePrintOpen();
            }}
            className='absolute top-4 right-4 h-8 w-8 flex items-center justify-center text-sm font-bold bg-gray-950/80 backdrop-blur-md text-gray-400 hover:text-white border border-gray-850/60 rounded-xl transition-all cursor-pointer active:scale-95 outline-none'
          >
            ✕
          </button>

          {/* Absolute Meta Badges */}
          <div className='absolute bottom-4 left-4 flex items-center gap-2'>
            <span className='text-[11px] font-black bg-gradient-to-r from-red-600 to-red-700 px-3 py-1 rounded-lg shadow-md text-white border border-red-500/10'>
              ${parseFloat(editRecipeData.price).toFixed(2)}
            </span>
            <span className='text-[10px] font-bold bg-gray-950/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-gray-800 text-gray-300 tracking-wider'>
              ⏱ {editRecipeData.prepTime}
            </span>
            {editRecipeData.isCartItem && quantity > 0 && (
              <span className='text-[10px] font-black bg-red-500 text-white px-2.5 py-1 rounded-md shadow-md animate-in zoom-in-75 tracking-wide uppercase'>
                {quantity}x In Basket
              </span>
            )}
          </div>
        </div>

        {/* Core Recipe Specification Contents */}
        <div className='p-6 md:p-8 flex flex-col gap-5 overflow-y-auto no-scrollbar max-h-[calc(100vh-320px)]'>
          
          {/* Main Titles and Creator Information */}
          <div className='space-y-1'>
            <span className='text-[9px] font-black text-red-500 tracking-widest uppercase bg-red-500/10 px-2 py-0.5 border border-red-500/20 rounded-md'>
              Master Blueprint
            </span>
            <h2 className='text-2xl font-black tracking-wide text-gray-100 pt-1'>
              {editRecipeData.recipeName}
            </h2>
            
            <div className='flex flex-col gap-0.5 text-xs text-gray-500 font-medium'>
              <p>
                Designed & curated by <span className='text-gray-300 font-semibold'>{editRecipeData.chefName}</span>
              </p>
              {editRecipeData.userName && (
                <p className='text-[11px] text-gray-600 font-normal'>
                  Published by: <span className='text-gray-400 font-medium'>@{editRecipeData.userName}</span>
                </p>
              )}
            </div>
          </div>

          <hr className='border-gray-850/60' />

          {/* Required Ingredients Grid */}
          <div className='space-y-2'>
            <h4 className='text-[10px] font-bold text-gray-400 uppercase tracking-widest'>Required Ingredients</h4>
            <div className='flex flex-wrap gap-2'>
              {editRecipeData.ingredients.split(',').map((ingredient, i) => (
                <span 
                  key={i} 
                  className='text-xs font-medium tracking-wide bg-gray-950 text-gray-300 px-3 py-1.5 border border-gray-850 rounded-xl'
                >
                  {ingredient.trim()}
                </span>
              ))}
            </div>
          </div>

          {/* Preparation Sequence Guide */}
          <div className='space-y-2.5'>
            <h4 className='text-[10px] font-bold text-gray-400 uppercase tracking-widest'>Execution Instructions</h4>
            <div className='bg-gray-950/50 border border-gray-850 rounded-2xl p-4 md:p-5 space-y-3'>
              {editRecipeData.steps.split(/(?=\d\.)/).map((step, i) => (
                <p key={i} className='text-xs text-gray-400 leading-relaxed font-medium'>
                  {step.trim()}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Interactive Dashboard Ribbon Container */}
        <div className='p-5 bg-gray-950/40 border-t border-gray-900 flex flex-col sm:flex-row sm:items-center justify-between gap-4'>
          
          {/* Left Block: Status Readout & Quantity Increment Pill */}
          <div className='flex items-center gap-4 flex-wrap sm:flex-nowrap'>
            <div className='flex items-center gap-2.5'>
              <span className='text-[10px] font-bold text-gray-500 uppercase tracking-widest block'>
                Current Status:
              </span>
              <div className='px-3 py-1.5 bg-gray-950 border border-gray-850 rounded-xl text-xs font-bold text-gray-300 flex items-center gap-2 shadow-inner select-none'>
                <span className={`h-2 w-2 rounded-full ${editRecipeData.isCartItem ? 'bg-red-500 animate-pulse' : 'bg-gray-700'}`} />
                {editRecipeData.isCartItem ? `Allocated` : 'Not in Basket'}
              </div>
            </div>

            {/* INTEGRATED ACTIVE QUANTITY CONTROLLER PILL */}
            {editRecipeData.isCartItem && (
              <div className='flex items-center bg-gray-950 border border-gray-850 rounded-xl px-2 py-1 animate-in zoom-in-95 duration-200 select-none'>
                <button 
                  type='button' 
                  onClick={() => {
                    handelDecreaseQuantity(editRecipeData)
                  }}
                  className='px-2 py-0.5 text-gray-500 hover:text-white transition-colors text-xs font-bold cursor-pointer active:scale-90 outline-none'
                >
                  -
                </button>
                <span className='px-2.5 text-xs font-bold text-gray-300 min-w-[16px] text-center'>
                  {quantity}
                </span>
                <button 
                  type='button' 
                  onClick={() => {
                    handelIncreaseQuantity(editRecipeData)
                  }}
                  className='px-2 py-0.5 text-gray-500 hover:text-white transition-colors text-xs font-bold cursor-pointer active:scale-90 outline-none'
                >
                  +
                </button>
              </div>
            )}
          </div>

          {/* Right Action Trigger Buttons */}
          <div className='flex items-center gap-3 w-full sm:w-auto flex-1 sm:flex-none justify-end'>
            <button 
              type='button' 
              onClick={()=>{
                setEditRecipeData(null);
                toggleInspectBluePrintOpen()
              }}
              className='px-5 py-3 text-xs font-bold bg-gray-950 hover:bg-gray-850 text-gray-400 hover:text-white border border-gray-800 rounded-xl transition-all cursor-pointer text-center tracking-widest uppercase active:scale-[0.98]'
            >
              Dismiss
            </button>
            
            {editRecipeData.isCartItem ? (
              /* PREMIUM REDESIGNED REMOVE CONTROLLER BUTTON WITH SVGS */
              <button 
                onClick={()=>{
                  handelRemoveCart(editRecipeData, editRecipeData.userName, editRecipeData.email)
                  setEditRecipeData({...editRecipeData, isCartItem: false})
                }}
                type='button' 
                className='px-5 py-3 text-xs font-bold bg-red-500/10 hover:bg-red-600 border border-red-500 text-red-500 hover:text-white rounded-xl transition-all duration-300 cursor-pointer text-center tracking-widest uppercase active:scale-[0.98] shadow-lg shadow-red-950/20 flex items-center justify-center gap-2'
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-3.5 h-3.5 fill-current transition-colors">
                  <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z" />
                </svg>
                Remove From Cart
              </button> 
            ) : (
              /* PREMIUM REDESIGNED ADD CONTROLLER BUTTON WITH SVGS */
              <button 
                onClick={()=>{
                  handelAddToCart(editRecipeData, editRecipeData.userName, editRecipeData.email)
                  setEditRecipeData({...editRecipeData, isCartItem: true,quantitiy:1})
                }}
                type='button' 
                className='px-5 py-3 text-xs font-bold bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white rounded-xl transition-all cursor-pointer text-center tracking-widest uppercase active:scale-[0.98] shadow-lg shadow-red-950/30 flex items-center justify-center gap-2 border border-transparent'
              >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-3.5 h-3.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
                Add Kit to Cart
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  )
}

export default InspectBluePrint