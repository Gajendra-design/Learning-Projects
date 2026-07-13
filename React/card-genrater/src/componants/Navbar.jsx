import React from 'react'

export const Navbar = ({currentUser, isLoggedIn, setIsLoggedIn, setShowCardForm, setCards }) => {
  return (
    <nav className='w-full bg-black flex justify-between items-center p-4 border-b-2 border-b-gray-400 text-white'>
      <div>Logo</div>
      <div className='flex gap-4'>
        <span className='font-semibold hover:text-blue-800 cursor-pointer'>Home</span>
        <span className='font-semibold hover:text-blue-800 cursor-pointer'>About</span>
        <span className='font-semibold hover:text-blue-800 cursor-pointer'>Contact us</span>
      </div>
      {isLoggedIn && <div className='flex gap-3 items-center'>
        <p>{currentUser.name}</p>
        <button onClick={() => { setShowCardForm(pre => !pre) }} className='bg-blue-500 p-3 border border-transparent rounded cursor-pointer hover:bg-blue-700'>Create Card</button>
        <button onClick={() => {
          localStorage.setItem('isLoggedIn', JSON.stringify(false))
          setIsLoggedIn(JSON.parse(localStorage.getItem('isLoggedIn')))
          localStorage.setItem('currentUser',JSON.stringify({}))
          localStorage.setItem('cards',JSON.stringify([]))
          setCards([])
        }} className='bg-red-500 p-3 border border-transparent rounded cursor-pointer hover:bg-red-700'>Log Out</button>
      </div>}
    </nav>
  )
}
