import React from 'react'

const Home = () => {
  // Pre-configured elegant mock content layout placeholders
  const displayItems = [
    { id: 1, title: 'Smoked Garlic Ribeye Steak', img: 'https://images.unsplash.com/photo-1544025162-d76694265947?w=600&q=80', user: 'Chef Ramirez', time: '35m' },
    { id: 2, title: 'Artisanal Matcha Macarons', img: 'https://images.unsplash.com/photo-1569864358642-9d1684040f43?w=600&q=80', user: 'Yuki Tanaka', time: '50m' },
    { id: 3, title: 'Zesty Avocado Citrus Salad', img: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&q=80', user: 'Elena Rostova', time: '15m' },
    { id: 4, title: 'Truffle Mushroom Risotto', img: 'https://images.unsplash.com/photo-1476124369491-e7addf5db371?w=600&q=80', user: 'Marcus Vance', time: '30m' },
    { id: 5, title: 'Thai Spicy Basil Noodles', img: 'https://images.unsplash.com/photo-1559314809-0d155014e29e?w=600&q=80', user: 'Jane Doe', time: '20m' },
    { id: 6, title: 'Berry Infused Belgian Waffles', img: 'https://images.unsplash.com/photo-1562376502-6f769499c886?w=600&q=80', user: 'Alex Mercer', time: '25m' }
  ]

  return (
    <main className='flex-1 p-6 overflow-y-auto h-full space-y-6 bg-gray-950'>
      
      {/* Top Interactive Dashboard Ribbon */}
      <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-gray-900 pb-5'>
        <div>
          <h1 className='text-2xl font-black tracking-wide text-gray-100'>Global Recipe Feed</h1>
          <p className='text-xs text-gray-500 mt-0.5'>Browse through the finest culinary creations on the platform.</p>
        </div>
        
        {/* Inline Stats Counter UI element */}
        <div className='flex items-center gap-2 self-start sm:self-auto bg-gray-900/40 border border-gray-850 px-4 py-2 rounded-xl'>
          <span className='flex h-2 w-2 rounded-full bg-emerald-500' />
          <span className='text-xs font-semibold text-gray-400 tracking-wider'>{displayItems.length} Feeds active</span>
        </div>
      </div>

      {/* Grid Architecture */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
        {displayItems.map((item) => (
          <div 
            key={item.id} 
            className='group bg-gray-900/20 border border-gray-900 rounded-2xl overflow-hidden flex flex-col hover:border-gray-800/80 transition-all duration-300 shadow-xl'
          >
            
            {/* Visual Media Engine Container */}
            <div className='h-48 w-full overflow-hidden bg-gray-950 relative'>
              <img 
                src={item.img} 
                alt={item.title} 
                className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-95 group-hover:brightness-100'
              />
              {/* Absolute Duration Badge */}
              <div className='absolute bottom-3 right-3 text-[10px] font-bold bg-gray-950/80 backdrop-blur-md px-2.5 py-1 rounded-md border border-gray-800 tracking-wider text-gray-300'>
                ⏱ {item.time}
              </div>
            </div>

            {/* Information Interface Elements */}
            <div className='p-5 flex flex-col flex-1 justify-between gap-5'>
              <div className='space-y-1'>
                <h3 className='font-bold text-md text-gray-200 group-hover:text-red-400 transition-colors line-clamp-1 tracking-wide'>
                  {item.title}
                </h3>
                <p className='text-[11px] text-gray-500 font-medium'>
                  Formulated by <span className='text-gray-400 font-semibold'>{item.user}</span>
                </p>
              </div>

              {/* Functional Decorative Row UI */}
              <div className='flex items-center gap-2 pt-3 border-t border-gray-900'>
                <button type='button' className='flex-1 text-[11px] py-2.5 px-3 font-bold bg-gray-950 text-gray-400 border border-gray-900 hover:border-gray-800 rounded-xl hover:text-white transition-all cursor-pointer text-center tracking-wider uppercase'>
                  Inspect Blueprint
                </button>
                <button type='button' className='px-3.5 py-2.5 text-xs bg-red-950/20 border border-red-900/30 text-red-400 hover:bg-red-600 hover:text-white rounded-xl transition-all cursor-pointer'>
                  ♥
                </button>
              </div>
            </div>

          </div>
        ))}
      </div>
    </main>
  )
}

export default Home