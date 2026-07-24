import React, { useContext } from 'react';
import { X, User, Mail, Key, ShoppingBag, LogOut, ShieldCheck } from 'lucide-react';
import { MyStore } from '../../../Context/MyStore';
import { useNavigate } from 'react-router';

export default function ProfileSidebar() {
  const navigate = useNavigate();
  const { isProfileOpen, setIsProfileOpen, handelLogout, loggedInUser } = useContext(MyStore);

  // Helper to extract user initials (e.g. "Gajendra Sharma" -> "GS")
  const getInitials = (name) => {
    if (!name) return 'U';
    const parts = name.trim().split(' ');
    if (parts.length >= 2) {
      return `${parts[0][0]}${parts[1][0]}`.toUpperCase();
    }
    return parts[0][0].toUpperCase();
  };

  const totalItemsInCart = loggedInUser.cartItems.reduce((acc,curr)=>{return (acc + curr.quantity)},0)

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
            <h2 className="text-lg font-bold text-white tracking-wide">Account Details</h2>
            <button
              onClick={() => setIsProfileOpen(false)}
              title="Close panel"
              className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-800 text-slate-400 hover:text-white transition duration-200 border border-slate-700/50"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* User Profile Summary Card */}
          <div className="flex items-center gap-4 bg-slate-950/50 border border-slate-800/60 rounded-2xl p-4">
            <div className="w-14 h-14 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0 font-bold text-xl shadow-inner">
              {getInitials(loggedInUser?.fullName)}
            </div>
            <div className="min-w-0">
              <h3 className="text-sm font-bold text-white truncate">
                {loggedInUser?.fullName || 'User Profile'}
              </h3>
              <p className="text-xs text-slate-400 truncate">
                {loggedInUser?.email || 'No email provided'}
              </p>
              <span className="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-md mt-1.5">
                <ShieldCheck className="w-3 h-3" />
                <span>Verified Account</span>
              </span>
            </div>
          </div>
        </div>

        {/* ================= USER INFORMATION DETAILS ================= */}
        <div className="flex-1 overflow-y-auto p-5 space-y-3">
          
          {/* Full Name Info */}
          <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 space-y-1">
            <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
              <User className="w-3.5 h-3.5 text-indigo-400" />
              <span>Full Name</span>
            </div>
            <p className="text-sm font-semibold text-white pl-5">
              {loggedInUser?.fullName || 'N/A'}
            </p>
          </div>

          {/* Email Address Info */}
          <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 space-y-1">
            <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
              <Mail className="w-3.5 h-3.5 text-indigo-400" />
              <span>Email Address</span>
            </div>
            <p className="text-sm font-semibold text-white pl-5 truncate">
              {loggedInUser?.email || 'N/A'}
            </p>
          </div>

          {/* Password Preview Info */}
          <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 space-y-1">
            <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
              <Key className="w-3.5 h-3.5 text-indigo-400" />
              <span>Password</span>
            </div>
            <p className="text-sm font-semibold text-white pl-5">
              {loggedInUser?.password ? '••••••••' : 'N/A'}
            </p>
          </div>

          {/* Active Cart Items Count */}
          <div className="p-3.5 rounded-xl bg-slate-900/60 border border-slate-800/80 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
              <ShoppingBag className="w-3.5 h-3.5 text-indigo-400" />
              <span>Items in Cart</span>
            </div>
            <span className="text-xs font-bold text-white bg-indigo-500/20 border border-indigo-500/30 px-2.5 py-1 rounded-lg">
              {totalItemsInCart} items
            </span>
          </div>

        </div>

        {/* ================= FOOTER / SIGN OUT ================= */}
        <div className="p-5 bg-slate-900 border-t border-slate-800">
          <button 
            onClick={() => {
              handelLogout();
              setIsProfileOpen(false);
              navigate('/auth');
            }} 
            className="w-full flex items-center justify-center gap-2 bg-slate-950 hover:bg-rose-950/30 text-slate-400 hover:text-rose-400 border border-slate-800 hover:border-rose-900/50 font-semibold py-3.5 rounded-xl transition duration-200 active:scale-[0.98] cursor-pointer"
          >
            <LogOut className="w-4 h-4" />
            <span>Sign Out</span>
          </button>
        </div>

      </div>
    </div>
  );
}