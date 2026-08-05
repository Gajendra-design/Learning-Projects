import React from 'react'
import { Home, Package, Info, LogOut, User, Layers } from 'lucide-react'
import { useAuth } from '../../../features/auth/hooks/authHooks'
import { NavLink } from 'react-router'
import { getNavLinkClass } from '../../hooks/uiHooks'

const Navbar = () => {

  const { handelLogout } = useAuth()

  return (
    <nav className="w-full bg-slate-950/80 backdrop-blur-md border-b border-slate-800/80 px-4 sm:px-8 py-3 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between">

        {/* Brand / Logo */}
        <div className="flex items-center gap-2.5 cursor-pointer">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-indigo-500 to-purple-500 flex items-center justify-center text-white shadow-md shadow-indigo-500/20">
            <Layers className="w-5 h-5" />
          </div>
          <span className="text-lg font-bold tracking-wide text-white">
            Acme<span className="text-indigo-400">Inc</span>
          </span>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center gap-1">
          <li>
            <NavLink to="/main" end className={getNavLinkClass}>
              <Home className="w-4 h-4 text-slate-500 group-[.active]:text-indigo-400 transition-colors" />
              <span>Home</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/main/product" className={getNavLinkClass}>
              <Package className="w-4 h-4 text-slate-500 group-[.active]:text-indigo-400 transition-colors" />
              <span>Products</span>
            </NavLink>
          </li>

          <li>
            <NavLink to="/main/about" className={getNavLinkClass}>
              <Info className="w-4 h-4 text-slate-500 group-[.active]:text-indigo-400 transition-colors" />
              <span>About</span>
            </NavLink>
          </li>
        </ul>

        {/* Profile & Logout Section */}
        <div className="flex items-center gap-3">
          {/* Profile Logo Avatar */}
          <button
            type="button"
            className="flex items-center gap-2 p-1.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-slate-700 transition-colors"
          >
            <div className="w-8 h-8 rounded-lg bg-indigo-600/20 text-indigo-400 flex items-center justify-center font-semibold text-sm">
              <User className="w-4 h-4" />
            </div>
            <span className="hidden sm:inline-block text-xs font-medium text-slate-300 pr-1">
              Alex
            </span>
          </button>

          {/* Logout Button */}
          <button
            onClick={() => { handelLogout() }}
            type="button"
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-medium text-rose-400 bg-rose-500/10 border border-rose-500/20 hover:bg-rose-500/20 transition-all"
          >
            <LogOut className="w-4 h-4" />
            <span className="hidden sm:inline">Logout</span>
          </button>
        </div>

      </div>
    </nav>
  )
}

export default Navbar