import React, { useContext } from 'react'
import { FunctionStore } from '../../context/FunctionalStore'
import { UserStore } from '../../context/userStore'

const InspectBluePrint = () => {
  
  const { toggleInspectBluePrintOpen } = useContext(FunctionStore)
  const { editRecipeData, setEditRecipeData } = useContext(UserStore)

  return (
    /* 
      FIXED TRANSITIONS: 
      1. Changed 'bg-gray-950/80' to 'bg-gray-950/40' to let the background app show through more cleanly.
      2. Completely REMOVED 'opacity-60' so your text and card content remain perfectly sharp.
    */
    <div className='fixed inset-0 min-h-screen w-full bg-gray-950/10 backdrop-blur-sm z-80 flex items-center justify-center p-4 overflow-y-auto no-scrollbar select-none animate-in fade-in duration-200'>
      
      {/* Blueprint Card Shell Wrapper - Remains 100% Solid Opacity */}
      <div className='relative w-full max-w-2xl bg-gray-900/95 border border-gray-800/60 rounded-3xl shadow-2xl shadow-black/80 overflow-hidden flex flex-col z-90 animate-in zoom-in-95 duration-200 my-8'>
        
        {/* Banner Media Engine Header Frame */}
        <div className='h-56 w-full overflow-hidden bg-gray-950 relative border-b border-gray-900/60'>
          <img 
            src={editRecipeData.imageLink} 
            alt={editRecipeData.recipeName} 
            className='w-full h-full object-cover brightness-90'
          />
          
          {/* Close Action Trigger Overlay (Top Right) */}
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
          <div className='absolute bottom-4 left-4 flex gap-2'>
            <span className='text-[11px] font-black bg-gradient-to-r from-red-600 to-red-700 px-3 py-1 rounded-lg shadow-md text-white border border-red-500/10'>
              ${parseFloat(editRecipeData.price).toFixed(2)}
            </span>
            <span className='text-[10px] font-bold bg-gray-950/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-gray-800 text-gray-300 tracking-wider'>
              ⏱ {editRecipeData.prepTime}
            </span>
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
            
            {/* Expanded UI Block: Shows both Chef Name and System Account handle */}
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

          {/* Section Block: Ingredients Grid Pillbox */}
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

          {/* Section Block: Preparation Sequence Guide */}
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
        <div className='p-5 bg-gray-950/40 border-t border-gray-900 flex items-center gap-3'>
          <button 
            type='button' 
            onClick={()=>{
              setEditRecipeData(null);
              toggleInspectBluePrintOpen()
            }}
            className='flex-1 py-3 text-xs font-bold bg-gray-950 hover:bg-gray-850 text-gray-400 hover:text-white border border-gray-800 rounded-xl transition-all cursor-pointer text-center tracking-widest uppercase active:scale-[0.98]'
          >
            Dismiss View
          </button>
          <button 
            type='button' 
            className='px-6 py-3 text-xs font-bold bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white rounded-xl transition-all cursor-pointer text-center tracking-widest uppercase active:scale-[0.98] shadow-lg shadow-red-950/30'
          >
            Add Kit to Cart
          </button>
        </div>

      </div>
    </div>
  )
}

export default InspectBluePrint