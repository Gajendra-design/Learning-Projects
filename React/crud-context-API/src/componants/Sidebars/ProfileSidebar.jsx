import React, { useContext } from 'react'
import { UserStore } from '../../context/userStore'

const ProfileSidebar = () => {
  const { currentUser, setIsProfileOpen } = useContext(UserStore)

  const accountName = currentUser?.userName || 'Chef';

  return (
    <aside className='w-80 md:w-96 border-r border-gray-900 bg-gray-950/40 backdrop-blur-md h-full flex flex-col p-6 overflow-y-auto shrink-0 select-none no-scrollbar justify-between'>
      
      {/* Upper Branding Section */}
      <div className='space-y-6'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center gap-2'>
            <span className='h-2 w-2 rounded-full bg-red-500 animate-pulse' />
            <h2 className='text-xl font-black tracking-wide bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent uppercase'>
              Chef Control
            </h2>
          </div>
          
          {/* Back to Home Button */}
          <button 
            type='button'
            onClick={() => setIsProfileOpen(false)}
            className='text-[10px] font-bold tracking-widest bg-gray-900 hover:bg-gray-850 border border-gray-800 text-gray-400 hover:text-white px-3 py-1.5 rounded-xl transition-all cursor-pointer'
          >
            ← BACK
          </button>
        </div>
        
        <p className='text-xs text-gray-500 mt-1 leading-relaxed'>
          Manage system accessibility parameters, authentication structures, and catalog statistics for your account interface.
        </p>

        {/* Identity Badge */}
        <div className='flex items-center gap-3 p-4 bg-gray-900/10 border border-gray-900 rounded-2xl'>
          <div className='h-10 w-10 rounded-xl bg-gradient-to-br from-red-600 to-orange-600 flex items-center justify-center text-md font-black text-white shadow-md'>
            {accountName.charAt(0).toUpperCase()}
          </div>
          <div>
            <span className='text-[10px] font-bold text-gray-500 tracking-wider uppercase block'>Verified Identity</span>
            <span className='text-sm font-black text-gray-200'>@{accountName}</span>
          </div>
        </div>
      </div>

      {/* Dynamic Welcome Insight Block */}
      <div className='p-4 border border-dashed border-gray-800 rounded-2xl bg-gray-900/5 text-center'>
        <p className='text-xs text-gray-400 font-medium leading-relaxed'>
          Welcome back to the matrix interface, <span className='text-red-400 font-bold'>{accountName}</span>. Your active session parameters are secure.
        </p>
      </div>

    </aside>
  )
}

export default ProfileSidebar