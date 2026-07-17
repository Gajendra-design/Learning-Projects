import React, { useContext } from 'react'
import { FunctionStore } from '../../context/FunctionalStore';
import { UserStore } from '../../context/userStore';

const HomeRecipieCard = ({ recipie, userName }) => {
  // Convert price string to number safely for display formatting
  const displayPrice = recipie.price ? parseFloat(recipie.price).toFixed(2) : "0.00";
  const { toggleInspectBluePrintOpen } = useContext(FunctionStore)
  const { setEditRecipeData } = useContext(UserStore)

  return (
    <div className='group bg-gray-900/20 border border-gray-900 rounded-2xl overflow-hidden flex flex-col hover:border-gray-800/80 transition-all duration-300 shadow-xl'>
      
      {/* Visual Media Container */}
      <div className='h-48 w-full overflow-hidden bg-gray-950 relative border-b border-gray-900/40'>
        <img 
          src={recipie.imageLink} 
          alt={recipie.recipeName} 
          className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95 group-hover:brightness-100'
        />
        
        {/* Absolute Price Badge (Top Left) */}
        <div className='absolute top-3 left-3 text-[11px] font-black bg-gradient-to-r from-red-600 to-red-700 px-3 py-1 rounded-lg shadow-md tracking-wide text-white border border-red-500/20 shadow-red-950/50'>
          ${displayPrice}
        </div>

        {/* Absolute Duration Badge (Bottom Right) */}
        <div className='absolute bottom-3 right-3 text-[10px] font-bold bg-gray-950/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-gray-850 tracking-wider text-gray-300'>
          ⏱ {recipie.prepTime}
        </div>
      </div>

      {/* Information Content Elements */}
      <div className='p-5 flex flex-col flex-1 justify-between gap-4'>
        <div className='space-y-2.5'>
          
          {/* Title & Creator Block */}
          <div className='space-y-1.5'>
            <h3 className='font-bold text-md text-gray-200 group-hover:text-red-400 transition-colors line-clamp-1 tracking-wide'>
              {recipie.recipeName} {/* ✅ Fixed typo: changed recipieName to recipeName */}
            </h3>
            
            {/* Split Metadata: Displays both structural parameters independently */}
            <div className='flex flex-col gap-0.5 text-[11px] text-gray-500 font-medium'>
              <p>
                Formulated by <span className='text-gray-400 font-semibold'>{recipie.chefName}</span>
              </p>
              {userName && (
                <p className='text-[10px] text-gray-600 font-normal'>
                  Posted by account: <span className='text-gray-500 font-medium'>@{userName}</span>
                </p>
              )}
            </div>
          </div>

          {/* Visual Ingredients Summary Cloud */}
          {recipie.ingredients && (
            <div className='flex flex-wrap gap-1.5 pt-1'>
              {recipie.ingredients.split(/[;,]/).slice(0, 3).map((ing, index) => (
                <span 
                  key={index} 
                  className='text-[9px] font-medium tracking-wide bg-gray-900/60 text-gray-400 px-2 py-0.5 rounded-md border border-gray-850/60 truncate max-w-[95px]'
                >
                  {ing.trim()}
                </span>
              ))}
              {recipie.ingredients.split(/[;,]/).length > 3 && (
                <span className='text-[9px] font-bold text-red-400/80 px-1 py-0.5'>
                  +{recipie.ingredients.split(/[;,]/).length - 3} more
                </span>
              )}
            </div>
          )}
        </div>

        {/* Action Button Controls Row */}
        <div className='flex items-center gap-2 pt-3 border-t border-gray-900'>
          <button 
            type='button'
            onClick={() => {
              setEditRecipeData({...recipie,userName:userName})
              toggleInspectBluePrintOpen()
            }} 
            className='flex-1 text-[11px] py-2.5 px-3 font-bold bg-gray-950 text-gray-400 border border-gray-900 hover:border-gray-800 rounded-xl hover:text-white transition-all cursor-pointer text-center tracking-wider uppercase active:scale-[0.98]'
          >
            Inspect Blueprint
          </button>
          
          <button 
            type='button' 
            className='px-3.5 py-2.5 text-xs bg-red-950/20 border border-red-900/30 text-red-400 hover:bg-red-600 hover:text-white rounded-xl transition-all cursor-pointer active:scale-[0.95]'
          >
            ♥
          </button>
        </div>
      </div>

    </div>
  )
}

export default HomeRecipieCard