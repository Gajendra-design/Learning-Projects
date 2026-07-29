import React from 'react'

const Home = () => {
  return (
    <div className="space-y-8">
      
      {/* Welcome Hero Banner */}
      <div className="bg-gradient-to-r from-indigo-600 to-indigo-800 rounded-2xl p-6 sm:p-8 text-white shadow-lg shadow-indigo-500/10 flex flex-col md:flex-row justify-between md:items-center gap-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">Welcome back, John! 👋</h1>
          <p className="mt-2 text-indigo-100 text-sm sm:text-base max-w-xl">
            Here is what is happening with your workspace today. You have 3 pending tasks and 2 deployments active.
          </p>
        </div>
        <button type="button" className="px-4 py-2.5 bg-white text-indigo-600 font-semibold rounded-xl text-sm hover:bg-indigo-50 transition-colors shadow-sm self-start md:self-auto">
          + New Project
        </button>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        
        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between text-slate-500 text-xs font-semibold uppercase tracking-wider mb-2">
            Total Revenue
            <span className="p-1.5 rounded-lg bg-emerald-50 text-emerald-600">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
            </span>
          </div>
          <div className="text-2xl font-extrabold text-slate-900">$24,500</div>
          <div className="text-xs text-emerald-600 font-medium mt-1">↑ 12% from last month</div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between text-slate-500 text-xs font-semibold uppercase tracking-wider mb-2">
            Active Users
            <span className="p-1.5 rounded-lg bg-indigo-50 text-indigo-600">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </span>
          </div>
          <div className="text-2xl font-extrabold text-slate-900">1,482</div>
          <div className="text-xs text-indigo-600 font-medium mt-1">↑ 8% this week</div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between text-slate-500 text-xs font-semibold uppercase tracking-wider mb-2">
            Active Projects
            <span className="p-1.5 rounded-lg bg-amber-50 text-amber-600">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
              </svg>
            </span>
          </div>
          <div className="text-2xl font-extrabold text-slate-900">18</div>
          <div className="text-xs text-slate-500 font-medium mt-1">4 pending review</div>
        </div>

        <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
          <div className="flex items-center justify-between text-slate-500 text-xs font-semibold uppercase tracking-wider mb-2">
            System Uptime
            <span className="p-1.5 rounded-lg bg-emerald-50 text-emerald-600">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </span>
          </div>
          <div className="text-2xl font-extrabold text-slate-900">99.98%</div>
          <div className="text-xs text-emerald-600 font-medium mt-1">All services healthy</div>
        </div>

      </div>

      {/* Content Section Placeholder */}
      <div className="bg-white rounded-xl border border-slate-200 p-6 shadow-sm">
        <h2 className="text-lg font-bold text-slate-900 mb-4">Recent Activity</h2>
        <div className="text-slate-500 text-sm py-8 text-center border-2 border-dashed border-slate-200 rounded-lg">
          No recent activity logs available.
        </div>
      </div>

    </div>
  )
}

export default Home