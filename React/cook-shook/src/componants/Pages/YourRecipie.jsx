import React, { useContext } from 'react'
import { UserStore } from '../../context/UserStore';
import { FunctionStore } from '../../context/FunctionalStore';
import YourRecipieCard from '../Recipie/YourRecipieCard';

const YourRecipie = () => {

  const { currentUser, setIsCartOpen, setIsYourRecipieOpen } = useContext(UserStore)
  const userRecipies = currentUser.userRecipies;

  const { toggleFullPageRecipieFormOpen } = useContext(FunctionStore)

  return (
    <div className='w-full space-y-6 bg-gray-950 min-h-full'>
      {/* Feed Header */}
      <div className='flex justify-between items-center border-b border-gray-900 pb-5'>
        <div>
          <h1 className='text-2xl font-black tracking-wide text-gray-100'>Your Authored Recipes</h1>
          <p className='text-xs text-gray-500 mt-0.5'>Modify your catalog entries, readouts, or inspect publication statuses.</p>
        </div>

        {/* Total Contributed Items Pill */}
        <span className='text-xs bg-red-500/10 text-red-400 px-3 py-1.5 border border-red-500/20 rounded-full font-medium'>
          {userRecipies.length} Contributions
        </span>
      </div>

      {/* Conditional Layer: Check if user has zero recipes */}
      {userRecipies.length === 0 ? (
        <div className='flex flex-col items-center justify-center border border-dashed border-gray-900 rounded-2xl py-16 px-6 text-center bg-gray-950 max-w-xl mx-auto my-12 space-y-5'>
          <div className='h-14 w-14 rounded-2xl bg-gradient-to-br from-red-500/10 to-orange-500/10 border border-red-500/20 flex items-center justify-center text-2xl text-red-400 select-none shadow-md shadow-red-950/20 animate-pulse'>
            🍽️
          </div>
          <div className='space-y-1.5'>
            <h3 className='text-base font-bold text-gray-200 tracking-wide'>No Created Recipes Found</h3>
            <p className='text-xs text-gray-500 max-w-sm mx-auto leading-relaxed'>
              Your personal kitchen studio is currently empty. Start drafting your very first culinary masterpiece right now!
            </p>
          </div>
          
          {/* Visual Trigger Button to launch creation form flow */}
          <button
            type='button'
            onClick={toggleFullPageRecipieFormOpen}
            className='px-5 py-2.5 text-xs font-bold bg-gradient-to-r from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 text-white rounded-xl transition-all active:scale-[0.98] shadow-lg shadow-red-950/40 tracking-wider uppercase cursor-pointer focus:outline-none focus:ring-2 focus:ring-red-500/40'
          >
            + Create A Recipe
          </button>
        </div>
      ) : (
        /* Responsive Grid Architecture */
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          
          {/* Inline Action Card Button Trigger */}
          <button
            type="button"
            onClick={toggleFullPageRecipieFormOpen}
            className='group min-h-[350px] border-2 border-dashed border-gray-900 rounded-2xl flex flex-col items-center justify-center gap-3 p-6 text-center hover:border-red-500/40 bg-gray-900/5 hover:bg-red-500/[0.01] transition-all duration-300 cursor-pointer focus:outline-none'
          >
            <div className='h-12 w-12 rounded-xl bg-gray-900 border border-gray-800 flex items-center justify-center text-lg text-gray-400 group-hover:text-red-400 group-hover:border-red-500/20 group-hover:bg-red-950/20 transition-all duration-300 group-hover:scale-105 shadow-md shadow-black/40'>
              ➕
            </div>
            <div className='space-y-1'>
              <span className='text-sm font-bold text-gray-300 group-hover:text-red-400 transition-colors tracking-wide'>
                Add Another Blueprint
              </span>
              <p className='text-[11px] text-gray-500 max-w-[200px] leading-relaxed mx-auto'>
                Expand your collection by launching the composition matrix tool.
              </p>
            </div>
          </button>

          {/* Active Recipes Map Stream */}
          {userRecipies.map((recipe) => {
            return (
              <YourRecipieCard key={currentUser.userName.concat(recipe.price, recipe.recipeName)} recipe={recipe} />
            )
          })}
        </div>
      )}
    </div>
  )
}

export default YourRecipie