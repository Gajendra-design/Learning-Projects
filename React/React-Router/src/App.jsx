import React from 'react'
import Navbar from './Componantes/Navbar';
import AppRoutes from './Componantes/AppRoutes';

const App = () => {
  console.log('app');
  
  return (
   <div className='h-screen bg-gray-700 text-white'>
    <Navbar/>
    <AppRoutes/>
   </div>

  )
}

export default App
