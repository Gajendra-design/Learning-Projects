import React, { useContext } from 'react'
import Navbar from './componants/Navbar'
import Home from './componants/Home'
import { MyStore } from './Context/MyStore'
import Cart from './componants/Cart'

// Main Background: bg-slate-950 (#020617)

// Cards / Sections: bg-slate-900 (#0f172a)

// Primary Text: text-slate-100 (#f8fafc)

// Secondary Text: text-slate-400 (#94a3b8)

const App = () => {

  const {isCartOpen} = useContext(MyStore);

  return (
    <div className="min-h-screen bg-slate-950 flex flex-col antialiased">
      <Navbar />
      { isCartOpen?<Cart />:<Home/>}
    </div>
  )
}

export default App