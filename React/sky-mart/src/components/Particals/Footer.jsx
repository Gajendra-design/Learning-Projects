import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-slate-900 border-t border-slate-800 py-6 mt-auto text-center text-slate-400 text-sm">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {new Date().getFullYear()} <span className="font-semibold text-white">SKY<span className="text-indigo-400">MART</span></span>. All rights reserved.</p>
          <div className="flex gap-6 text-xs text-slate-400">
            <a href="#" className="hover:text-indigo-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-indigo-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-indigo-400 transition-colors">Support</a>
          </div>
        </div>
      </footer>
  )
}

export default Footer
