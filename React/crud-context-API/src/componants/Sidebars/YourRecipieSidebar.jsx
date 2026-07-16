import React from 'react'

const YourRecipieSidebar = () => {
  // Analytical presentation metrics blueprint array
  const analyticsArray = [
    { label: 'Total Recipes Contributed', value: '4 Pillars' },
    { label: 'Community Saved Count', value: '1,420 Saves' },
    { label: 'Global Views Counter', value: '12.8k Reads' }
  ]

  return (
    <aside className='w-80 md:w-96 border-r border-gray-900 bg-gray-950/40 backdrop-blur-md h-full flex flex-col p-6 overflow-y-auto shrink-0 select-none'>
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
          <div key={i} className='p-4 bg-gray-900/20 border border-gray-900 rounded-2xl flex flex-col gap-1'>
            <span className='text-[10px] font-bold text-gray-500 uppercase tracking-widest'>{metric.label}</span>
            <span className='text-lg font-black text-gray-200 tracking-wide'>{metric.value}</span>
          </div>
        ))}

        {/* Developer Action Deck */}
        <div className='mt-auto p-4 border border-dashed border-gray-800 rounded-2xl bg-gray-900/10 text-center'>
          <p className='text-xs text-gray-400 font-medium leading-relaxed'>
            You qualify for the <span className='text-orange-400 font-bold'>Pro Culinary Badge</span> this month! Keep sharing guidelines.
          </p>
        </div>
      </div>
    </aside>
  )
}

export default YourRecipieSidebar