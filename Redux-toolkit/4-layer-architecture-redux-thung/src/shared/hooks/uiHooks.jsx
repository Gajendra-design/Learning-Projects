export const getNavLinkClass = ({ isActive }) =>
    `group flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-all ${isActive
      ? 'text-slate-100 bg-slate-900 border border-slate-800 shadow-sm'
      : 'text-slate-400 hover:text-slate-100 hover:bg-slate-900/50'
    }`