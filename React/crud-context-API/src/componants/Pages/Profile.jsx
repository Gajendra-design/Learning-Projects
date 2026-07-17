import React, { useContext, useEffect, useState } from 'react'
import { UserStore } from '../../context/userStore'
import { FunctionStore } from '../../context/FunctionalStore'

const Profile = () => {
  const { currentUser, isProfileOpen, setIsProfileOpen } = useContext(UserStore)
  const { handelLogOut } = useContext(FunctionStore)

  // Track rendering progress phase: 'hidden' | 'sliding-in' | 'visible' | 'sliding-out'
  const [animationPhase, setAnimationPhase] = useState('hidden')

  // Listen to the global context state to trigger matching local animation sequences
  useEffect(() => {
    let timer;
    if (isProfileOpen) {
      // Step 1: Tell layout memory to hold this element active
      localStorage.setItem('profileRenderActive', 'true')
      setAnimationPhase('hidden')
      
      // Step 2: Allow browser layout frame to render hidden state before sliding
      timer = setTimeout(() => {
        setAnimationPhase('sliding-in')
      }, 30)
    } else {
      // Step 3: Global state became false -> kick off smooth slide-out transition
      setAnimationPhase('sliding-out')
      
      // Step 4: Keep element in DOM for 850ms until it slides off-screen, then clean up
      timer = setTimeout(() => {
        setAnimationPhase('hidden')
        localStorage.removeItem('profileRenderActive')
      }, 850)
    }

    return () => clearTimeout(timer)
  }, [isProfileOpen])

  // Guard clause: If fully hidden, don't allocate DOM resources
  if (animationPhase === 'hidden' && !isProfileOpen) return null;

  const accountName = currentUser?.userName || 'Guest Chef';
  const accountEmail = currentUser?.email || 'unregistered@database.com';
  const recipesCount = currentUser?.userRecipies?.length || 0;
  const cartCount = currentUser?.cartItems?.length || 0;

  // Determine exactly how far along the timeline our wrapper transitions are
  const isPanelVisible = animationPhase === 'sliding-in' || animationPhase === 'visible';

  return (
    <div 
      className={`fixed inset-0 h-screen w-full bg-black/40 backdrop-blur-sm z-100 flex justify-end transition-opacity duration-[700ms] ease-in-out ${
        isPanelVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
      onClick={() => setIsProfileOpen(false)}
    >
      <div 
        className={`w-80 md:w-96 h-full bg-gray-900 border-l border-gray-850 flex flex-col justify-between p-6 shadow-2xl shadow-black select-none transform transition-transform duration-[850ms] ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isPanelVisible ? 'translate-x-0' : 'translate-x-full'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Upper Dashboard Meta Matrix */}
        <div className='space-y-6'>
          <div className='flex justify-between items-center border-b border-gray-850 pb-4'>
            <div className='flex items-center gap-2'>
              <span className='h-1.5 w-1.5 rounded-full bg-gradient-to-r from-red-500 to-orange-500 animate-pulse' />
              <h2 className='text-[10px] font-bold tracking-widest text-gray-500 uppercase'>
                Account Configuration
              </h2>
            </div>
            
            <button 
              type='button' 
              onClick={() => setIsProfileOpen(false)}
              className='h-7 w-7 flex items-center justify-center text-[10px] font-bold bg-gray-950 hover:bg-gray-850 border border-gray-850 text-gray-400 hover:text-white rounded-xl transition-all cursor-pointer active:scale-95 outline-none'
            >
              ✕
            </button>
          </div>

          <div className='flex items-center gap-3.5 p-4 bg-gray-950/40 border border-gray-850/60 rounded-2xl'>
            <div className='h-12 w-12 rounded-xl bg-gradient-to-br from-red-600 to-orange-600 flex items-center justify-center text-xl font-black text-white shadow-md shrink-0'>
              {accountName.charAt(0).toUpperCase()}
            </div>
            <div className='overflow-hidden space-y-0.5'>
              <span className='text-[9px] font-black text-red-500 tracking-wider uppercase block'>Verified Host</span>
              <h3 className='text-sm font-bold text-gray-200 tracking-wide truncate'>
                @{accountName}
              </h3>
              <p className='text-[11px] text-gray-500 truncate'>
                {accountEmail}
              </p>
            </div>
          </div>

          <div className='grid grid-cols-2 gap-3'>
            <div className='p-3.5 bg-gray-950/20 border border-gray-850 rounded-xl flex flex-col gap-0.5'>
              <span className='text-[9px] font-bold text-gray-500 uppercase tracking-widest'>Authored</span>
              <span className='text-xs font-black text-gray-300'>{recipesCount} Recipes</span>
            </div>
            <div className='p-3.5 bg-gray-950/20 border border-gray-850 rounded-xl flex flex-col gap-0.5'>
              <span className='text-[9px] font-bold text-gray-500 uppercase tracking-widest'>Saved Kits</span>
              <span className='text-xs font-black text-gray-300'>{cartCount} Items</span>
            </div>
          </div>
        </div>

        {/* Operational Trigger Action Group */}
        <div className='space-y-3 pt-4 border-t border-gray-850'>
          <button 
            type='button' 
            onClick={() => setIsProfileOpen(false)}
            className='w-full py-2.5 text-[11px] font-bold bg-gray-950 hover:bg-gray-850 text-gray-400 hover:text-white border border-gray-850 rounded-xl transition-all cursor-pointer text-center tracking-wider uppercase active:scale-[0.98]'
          >
            Return to Space
          </button>

          <button 
            type='button' 
            onClick={() => {
              setIsProfileOpen(false); 
              // Give the panel a tiny moment to initiate slide-out before firing context cleanup
              setTimeout(() => handelLogOut(), 150);
            }}
            className='w-full py-2.5 text-[11px] font-bold bg-red-950/20 hover:bg-red-600 border border-red-900/20 text-red-400 hover:text-white rounded-xl transition-all cursor-pointer text-center tracking-wider uppercase active:scale-[0.98] shadow-lg shadow-red-950/10'
          >
            Terminate Session
          </button>
        </div>

      </div>
    </div>
  )
}

export default Profile