import React from 'react'

const HomeSidebar = () => {
  return (
    <aside className='w-80 md:w-96 border-r border-gray-900 bg-gray-950/40 backdrop-blur-md h-full flex flex-col p-6 overflow-y-auto shrink-0 select-none'>
      {/* Sidebar Header Section */}
      <div className='mb-6'>
        <div className='flex items-center gap-2'>
          <span className='h-2 w-2 rounded-full bg-red-500 animate-pulse' />
          <h2 className='text-xl font-black tracking-wide bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent'>
            CREATE RECIPE
          </h2>
        </div>
        <p className='text-xs text-gray-500 mt-1'>Draft your culinary masterpieces here.</p>
      </div>

      {/* Styled Visual Form Fields */}
      <form onSubmit={(e) => e.preventDefault()} className='flex flex-col gap-4 flex-1'>
        
        {/* Input Block: Title */}
        <div className='flex flex-col gap-1.5'>
          <label className='text-[10px] font-bold text-gray-400 uppercase tracking-widest'>Recipe Name</label>
          <input 
            type="text" 
            placeholder="e.g., Woodfired Neapolitan Pizza"
            className='w-full px-4 py-3 text-sm bg-gray-900/50 border border-gray-800/80 focus:border-red-500/40 rounded-xl outline-none text-gray-200 placeholder-gray-600 transition-all focus:ring-4 focus:ring-red-500/5'
          />
        </div>

        {/* Input Block: Media */}
        <div className='flex flex-col gap-1.5'>
          <label className='text-[10px] font-bold text-gray-400 uppercase tracking-widest'>Banner Image Link</label>
          <input 
            type="url" 
            placeholder="https://images.unsplash.com/your-dish"
            className='w-full px-4 py-3 text-sm bg-gray-900/50 border border-gray-800/80 focus:border-red-500/40 rounded-xl outline-none text-gray-200 placeholder-gray-600 transition-all focus:ring-4 focus:ring-red-500/5'
          />
        </div>

        {/* Input Block: Ingredients */}
        <div className='flex flex-col gap-1.5'>
          <label className='text-[10px] font-bold text-gray-400 uppercase tracking-widest'>Ingredients Inventory</label>
          <textarea 
            rows="3"
            placeholder="Flour, active yeast, san marzano tomatoes, fresh basil..."
            className='w-full px-4 py-3 text-sm bg-gray-900/50 border border-gray-800/80 focus:border-red-500/40 rounded-xl outline-none text-gray-200 placeholder-gray-600 resize-none transition-all focus:ring-4 focus:ring-red-500/5'
          />
        </div>

        {/* Input Block: Steps */}
        <div className='flex flex-col gap-1.5'>
          <label className='text-[10px] font-bold text-gray-400 uppercase tracking-widest'>Preparation Guide</label>
          <textarea 
            rows="4"
            placeholder="1. Proof dough for 24 hours.&#10;2. Crush tomatoes by hand.&#10;3. Bake at 450°C..."
            className='w-full px-4 py-3 text-sm bg-gray-900/50 border border-gray-800/80 focus:border-red-500/40 rounded-xl outline-none text-gray-200 placeholder-gray-600 resize-none transition-all focus:ring-4 focus:ring-red-500/5'
          />
        </div>

        {/* Glowing Action Button Wrapper */}
        <button 
          type="button" 
          className='mt-auto w-full py-3.5 text-xs font-bold bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white rounded-xl transition-all active:scale-[0.98] shadow-lg shadow-red-950/40 tracking-widest uppercase cursor-pointer'
        >
          Publish to Community
        </button>
      </form>
    </aside>
  )
}

export default HomeSidebar