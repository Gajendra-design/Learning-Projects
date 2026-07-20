import React from 'react'
import RecipieForm from '../Recipie/RecipieForm'

const HomeSidebar = () => {
  return (
    <aside className='w-80 md:w-96 border-r border-gray-900 bg-gray-950/40 backdrop-blur-md h-full flex flex-col p-6 overflow-y-auto shrink-0 select-none'>

      <div className='mb-6'>
        <div className='flex items-center gap-2'>
          <span className='h-2 w-2 rounded-full bg-red-500 animate-pulse' />
          <h2 className='text-xl font-black tracking-wide bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent'>
            CREATE RECIPE
          </h2>
        </div>
        <p className='text-xs text-gray-500 mt-1'>Draft your culinary masterpieces here.</p>
      </div>

      <RecipieForm/>
    </aside>
  )
}

export default HomeSidebar