import React, { useContext } from 'react'
import RecipieForm from '../Recipie/RecipieForm'
import { FunctionStore } from '../../context/FunctionalStore'
import { UserStore } from '../../context/userStore';

const FullPageRecipieForm = () => {
  const { toggleFullPageRecipieFormOpen } = useContext(FunctionStore);
  const { setEditRecipeData } = useContext(UserStore)

  return (
    /* 
      FIXED TRANSITIONS:
      1. Changed 'bg-gray-950/80' to 'bg-gray-950/75' for excellent background visibility.
      2. REMOVED 'opacity-80' completely so your input text and validation errors stay crisp.
    */
    <div className='fixed inset-0 min-h-screen w-full bg-gray-950/75 backdrop-blur-xl z-50 flex items-center justify-center p-4 overflow-y-auto no-scrollbar select-none animate-in fade-in duration-200'>
      
      {/* Centered Form Card Container - Remains 100% Solid Opacity */}
      <div className='relative w-full max-w-xl bg-gray-900 border border-gray-800/80 rounded-2xl shadow-2xl shadow-black/80 p-6 md:p-8 my-8 flex flex-col gap-4 animate-in zoom-in-95 duration-200'>
        
        {/* Top Header Row with Close Control */}
        <div className='flex justify-between items-center border-b border-gray-800 pb-4 mb-2 select-none'>
          <div>
            <div className='flex items-center gap-2'>
              <span className='h-2 w-2 rounded-full bg-red-500 animate-pulse' />
              <h2 className='text-xl font-black tracking-wide bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent uppercase'>
                Create New Recipe
              </h2>
            </div>
            <p className='text-xs text-gray-500 mt-1'>Fill out the parameters to submit your blueprint.</p>
          </div>

          {/* Elegant Close Trigger Action Button */}
          <button 
            type='button' 
            onClick={()=>{
              toggleFullPageRecipieFormOpen();
              setEditRecipeData(null);
            }}
            className='h-8 w-8 flex items-center justify-center text-sm font-bold bg-gray-950 hover:bg-gray-850 text-gray-400 hover:text-white border border-gray-800 rounded-xl transition-all cursor-pointer active:scale-95 focus:outline-none focus:ring-2 focus:ring-gray-800'
          >
            ✕
          </button>
        </div>

        {/* Embedded Recipe Form Component Engine */}
        <div className='w-full'>
          <RecipieForm />
        </div>

      </div>
    </div>
  )
}

export default FullPageRecipieForm