import React, { useContext } from 'react'
import { UserStore } from '../../context/userStore'

const YourRecipieSidebar = () => {
  const { currentUser } = useContext(UserStore)

  // 1. Extract values or default them safely if array properties are absent
  const recipes = currentUser?.userRecipies || [];
  const accountName = currentUser?.userName || "Guest Chef";

  // 2. Mathematically compute the cumulative total valuation price of all recipes
  const totalValuation = recipes.reduce((sum, item) => {
    const itemPrice = parseFloat(item.price) || 0;
    return sum + itemPrice;
  }, 0);

  // 3. Assemble the dynamic presentation metrics array mapping
  const analyticsArray = [
    {
      label: "Creator Alias",
      value: `@${accountName}`,
    },
    {
      label: "Total Published",
      value: `${recipes.length} ${recipes.length === 1 ? 'Blueprint' : 'Blueprints'}`,
    },
    {
      label: "Gross Catalog Value",
      value: `$${totalValuation.toFixed(2)}`,
    }
  ];

  return (
    <aside className='w-80 md:w-96 border-r border-gray-900 bg-gray-950/40 backdrop-blur-md h-full flex flex-col p-6 overflow-y-auto shrink-0 select-none no-scrollbar'>
      {/* Header */}
      <div className='mb-6'>
        <div className='flex items-center gap-2'>
          <span className='h-2 w-2 rounded-full bg-orange-500 animate-pulse' />
          <h2 className='text-xl font-black tracking-wide bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent'>
            CREATOR CORE
          </h2>
        </div>
        <p className='text-xs text-gray-500 mt-1'>Monitor your contribution metrics real-time.</p>
      </div>

      {/* Analytics Stack Box Components Array mapping */}
      <div className='flex flex-col gap-4 flex-1'>
        {analyticsArray.map((metric, i) => (
          <div key={i} className='p-4 bg-gray-900/20 border border-gray-900 rounded-2xl flex flex-col gap-1 hover:border-gray-800/60 transition-colors duration-200'>
            <span className='text-[10px] font-bold text-gray-500 uppercase tracking-widest'>{metric.label}</span>
            <span className='text-lg font-black text-gray-200 tracking-wide'>{metric.value}</span>
          </div>
        ))}

        {/* Developer Action Deck Conditional UI Ribbon */}
        <div className='mt-auto p-4 border border-dashed border-gray-800 rounded-2xl bg-gray-900/10 text-center'>
          <p className='text-xs text-gray-400 font-medium leading-relaxed'>
            {recipes.length > 0 ? (
              <>
                You qualify for the <span className='text-orange-400 font-bold'>Pro Culinary Badge</span> this month! Keep sharing guidelines.
              </>
            ) : (
              <>
                Publish your first recipe blueprint setup to unlock the <span className='text-gray-500 font-bold'>Creator Badge</span> tier!
              </>
            )}
          </p>
        </div>
      </div>
    </aside>
  )
}

export default YourRecipieSidebar