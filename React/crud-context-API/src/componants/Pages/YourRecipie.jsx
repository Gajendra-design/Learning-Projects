import React from 'react'

const YourRecipie = () => {
  const authorRecipes = [
    { id: 1, title: 'Classic Margherita Pizza', img: 'https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=600&q=80', status: 'Live', saves: 842 },
    { id: 2, title: 'Artisanal Double-Baked Croissant', img: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600&q=80', status: 'In Review', saves: 0 }
  ]

  return (
    <div className='w-full space-y-6'>
      {/* Feed Header */}
      <div className='flex justify-between items-center border-b border-gray-900 pb-5'>
        <div>
          <h1 className='text-2xl font-black tracking-wide text-gray-100'>Your Authored Recipes</h1>
          <p className='text-xs text-gray-500 mt-0.5'>Modify your catalog entries, readouts, or inspect publication statuses.</p>
        </div>
      </div>

      {/* Responsive Grid Architecture */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {authorRecipes.map((recipe) => (
          <div 
            key={recipe.id} 
            className='group bg-gray-900/20 border border-gray-900 rounded-2xl overflow-hidden flex flex-col hover:border-gray-800/80 transition-all duration-300 shadow-xl'
          >
            {/* Visual Media Container Block */}
            <div className='h-44 w-full overflow-hidden bg-gray-950 relative'>
              <img src={recipe.img} alt={recipe.title} className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500' />
              
              {/* Absolute Condition Badge Mapping */}
              <div className={`absolute top-3 right-3 text-[10px] font-extrabold px-2.5 py-1 rounded-md border tracking-wider uppercase backdrop-blur-md ${
                recipe.status === 'Live' 
                  ? 'bg-emerald-950/80 border-emerald-900/50 text-emerald-400' 
                  : 'bg-amber-950/80 border-amber-900/50 text-amber-400'
              }`}>
                {recipe.status}
              </div>
            </div>

            {/* Typography Content Elements */}
            <div className='p-5 flex flex-col flex-1 justify-between gap-4'>
              <div>
                <h3 className='font-bold text-md text-gray-200 tracking-wide line-clamp-1 group-hover:text-red-400 transition-colors'>
                  {recipe.title}
                </h3>
                <p className='text-xs text-gray-500 mt-1'>
                  Bookmarks gathered: <span className='text-gray-400 font-bold'>{recipe.saves} users</span>
                </p>
              </div>

              {/* Modify Matrix Trigger Rows */}
              <div className='flex items-center gap-2 pt-3 border-t border-gray-900'>
                <button type='button' className='flex-1 text-[11px] py-2.5 px-3 font-bold bg-gray-950 text-gray-400 border border-gray-900 hover:border-gray-800 rounded-xl hover:text-white transition-all cursor-pointer tracking-wider uppercase'>
                  Edit Blueprint
                </button>
                <button type='button' className='px-3 py-2.5 text-xs bg-red-950/20 border border-red-900/20 text-red-400 hover:bg-red-600 hover:text-white rounded-xl transition-all cursor-pointer'>
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

export default YourRecipie