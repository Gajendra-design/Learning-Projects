import React, { useContext } from 'react';
import { X, User, Settings, ShoppingBag, Heart, LogOut, ChevronRight, Shield } from 'lucide-react';
import { MyStore } from '../../../Context/MyStore'; // Adjust to match your context file path
import { useNavigate } from 'react-router';

export default function ProfileSidebar() {

  const navigate = useNavigate();
  const { isProfileOpen, setIsProfileOpen,handelLogout } = useContext(MyStore);

  return (
    <div
      className={`fixed inset-0 z-50 overflow-hidden transition-all duration-500 ${
        isProfileOpen 
          ? 'visible opacity-100 ease-out' 
          : 'invisible opacity-0 pointer-events-none ease-in delay-500'
      }`}
    >
      {/* ================= BACKDROP OVERLAY ================= */}
      <div
        onClick={() => setIsProfileOpen(false)}
        className={`absolute inset-0 bg-slate-950/60 backdrop-blur-sm transition-opacity duration-500 cursor-pointer ${
          isProfileOpen ? 'opacity-100 ease-out' : 'opacity-0 ease-in'
        }`}
      />

      {/* ================= SLIDING DRAWER ================= */}
      <div
        className={`absolute top-0 right-0 h-full w-full max-w-md bg-slate-950 border-l border-slate-800 shadow-2xl flex flex-col justify-between transition-transform duration-500 ${
          isProfileOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{
          transitionTimingFunction: isProfileOpen 
            ? 'cubic-bezier(0.25, 1, 0.5, 1)' 
            : 'cubic-bezier(0.32, 0, 0.67, 0)'
        }}
      >
        {/* ================= HEADER / USER CARD ================= */}
        <div className="p-6 bg-slate-900 border-b border-slate-800 space-y-4">
          <div className="flex items-center justify-between">
            <h2 className="text-lg font-bold text-white tracking-wide">Account</h2>
            <button
              onClick={() => setIsProfileOpen(false)}
              title="Close panel"
              className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-400 hover:text-white transition duration-200 border border-slate-700/50"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* User Profile Info Card */}
          <div className="flex items-center gap-4 bg-slate-950/50 border border-slate-800/60 rounded-2xl p-4">
            <div className="w-14 h-14 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0 font-bold text-xl shadow-inner">
              GS
            </div>
            <div className="min-w-0">
              <h3 className="text-sm font-bold text-white truncate">Gajendra Sharma</h3>
              <p className="text-xs text-slate-400 truncate">gajendra.sharma@example.com</p>
              <span className="inline-block text-[10px] font-semibold text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-2 py-0.5 rounded-md mt-1.5">
                Pro Member
              </span>
            </div>
          </div>
        </div>

        {/* ================= NAVIGATION LINKS ================= */}
        <div className="flex-1 overflow-y-auto p-5 space-y-2">
          
          <button className="w-full flex items-center justify-between p-3.5 rounded-xl bg-slate-900/40 hover:bg-slate-900 border border-transparent hover:border-slate-800 transition duration-200 group text-left">
            <div className="flex items-center gap-3 text-slate-300 group-hover:text-white">
              <User className="w-4 h-4 text-indigo-400" />
              <span className="text-sm font-semibold">My Profile</span>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-slate-400 transition" />
          </button>

          <button className="w-full flex items-center justify-between p-3.5 rounded-xl bg-slate-900/40 hover:bg-slate-900 border border-transparent hover:border-slate-800 transition duration-200 group text-left">
            <div className="flex items-center gap-3 text-slate-300 group-hover:text-white">
              <ShoppingBag className="w-4 h-4 text-indigo-400" />
              <span className="text-sm font-semibold">Order History</span>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-slate-400 transition" />
          </button>

          <button className="w-full flex items-center justify-between p-3.5 rounded-xl bg-slate-900/40 hover:bg-slate-900 border border-transparent hover:border-slate-800 transition duration-200 group text-left">
            <div className="flex items-center gap-3 text-slate-300 group-hover:text-white">
              <Heart className="w-4 h-4 text-indigo-400" />
              <span className="text-sm font-semibold">Wishlist</span>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-slate-400 transition" />
          </button>

          <button className="w-full flex items-center justify-between p-3.5 rounded-xl bg-slate-900/40 hover:bg-slate-900 border border-transparent hover:border-slate-800 transition duration-200 group text-left">
            <div className="flex items-center gap-3 text-slate-300 group-hover:text-white">
              <Shield className="w-4 h-4 text-indigo-400" />
              <span className="text-sm font-semibold">Security & Privacy</span>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-slate-400 transition" />
          </button>

          <button className="w-full flex items-center justify-between p-3.5 rounded-xl bg-slate-900/40 hover:bg-slate-900 border border-transparent hover:border-slate-800 transition duration-200 group text-left">
            <div className="flex items-center gap-3 text-slate-300 group-hover:text-white">
              <Settings className="w-4 h-4 text-indigo-400" />
              <span className="text-sm font-semibold">Account Settings</span>
            </div>
            <ChevronRight className="w-4 h-4 text-slate-600 group-hover:text-slate-400 transition" />
          </button>

        </div>

        {/* ================= FOOTER / SIGN OUT ================= */}
        <div className="p-5 bg-slate-900 border-t border-slate-800">
          <button onClick={()=>{
            handelLogout();
            navigate('/auth');
          }} className="w-full flex items-center justify-center gap-2 bg-slate-950 hover:bg-rose-950/30 text-slate-400 hover:text-rose-400 border border-slate-800 hover:border-rose-900/50 font-semibold py-3.5 rounded-xl transition duration-200 active:scale-[0.98]">
            <LogOut className="w-4 h-4" />
            <span>Sign Out</span>
          </button>
        </div>

      </div>
    </div>
  );
}