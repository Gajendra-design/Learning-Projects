import React, { useContext } from 'react'
import HomeRecipieCard from '../Recipie/HomeRecipieCard'
import { UserStore } from '../../context/userStore'

const Home = () => {
  const { users } = useContext(UserStore)
  
  // Directly reduce based on the guaranteed array structure
  const totalFeed = users.reduce((acc, cur) => acc + cur.userRecipies.length, 0)

  return (
    <main className='flex-1 p-6 overflow-y-auto h-full space-y-6 bg-gray-950 no-scrollbar'>
      
      {/* Top Interactive Dashboard Ribbon */}
      <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-900 pb-5'>
        <div>
          <h1 className='text-2xl font-black tracking-wide text-gray-100'>Global Recipe Feed</h1>
          <p className='text-xs text-gray-500 mt-0.5'>Browse through the finest culinary creations on the platform.</p>
        </div>
        
        {/* Inline Stats Counter UI element */}
        <div className='flex items-center gap-2 self-start sm:self-auto bg-gray-900/40 border border-gray-900 px-4 py-2 rounded-xl'>
          <span className={`flex h-2 w-2 rounded-full ${totalFeed > 0 ? 'bg-emerald-500 animate-pulse' : 'bg-amber-500'}`} />
          <span className='text-xs font-semibold text-gray-400 tracking-wider'>{totalFeed} Feeds active</span>
        </div>
      </div>

      {/* Conditional Rendering Layer */}
      {totalFeed === 0 ? (
        /* Empty State UI Display Dashboard Window */
        <div className='flex flex-col items-center justify-center border border-dashed border-gray-900 rounded-2xl py-20 px-4 text-center bg-gray-950 max-w-2xl mx-auto my-8 space-y-4'>
          <div className='h-12 w-12 rounded-2xl bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/20 flex items-center justify-center text-xl text-red-400 select-none shadow-md shadow-red-950/20'>
            🍽️
          </div>
          <div className='space-y-1'>
            <h3 className='text-base font-bold text-gray-200 tracking-wide'>No Active Recipes</h3>
            <p className='text-xs text-gray-500 max-w-xs mx-auto leading-relaxed'>
              The global timeline is currently clear. Be the first contributor to share a culinary layout blueprint!
            </p>
          </div>
        </div>
      ) : (
        /* Grid Architecture for Rendering Cards */
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {
            users.map((user) => {
              // Direct array length check as requested
              if (user.userRecipies.length === 0) {
                return null
              }

              return user.userRecipies.map((recipie, idx) => {
                return (
                  <HomeRecipieCard 
                    key={`${user.email}-${recipie.recipeName}-${idx}`} 
                    recipie={recipie} 
                    userName = {user.userName}
                  />
                )
              })
            })
          }
        </div>
      )}
    </main>
  )
}

export default Home