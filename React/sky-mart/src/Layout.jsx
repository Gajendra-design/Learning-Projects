import React from 'react'
import Navbar from './components/Particals/Navbar'
import { Outlet } from 'react-router'
import Footer from './components/Particals/Footer'
import ProfileSidebar from './components/Particals/Sidebar/ProfileSidebar'
import CartSidebar from './components/Particals/Sidebar/CartSidebar'

const Layout = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">

      <header className="sticky top-0 z-50 bg-slate-950/60 backdrop-blur-xl border-b border-slate-800/80 shadow-lg shadow-slate-950/40">
        <Navbar />
      </header>

      {/* yaha pe profile and cart ko mention karna bhul gaya tha kyu ki humne inko indepeent element ki tharah esign kiya hai so indo yahaa pe liko sambhal jayega ye */}
      {/* and remember hum in sidebars ke liye bhi routes bana sakthe the and wo bhadiya chal bhi jate but insted humne useState se toggel base banaya hai inko kyu ki routes me jab ye open hote tho uska animation tho smooth hota but closing me wo fail ho jata hai and wo handel tho ho saktha hai but uske liye routes se ched-chad karni hogoi and wo achi practice nahi hogi so for that we used toggel based viewing */}
      <ProfileSidebar/>
      <CartSidebar/>

      <Outlet/>

      <Footer />
    </div>
  )
}

export default Layout