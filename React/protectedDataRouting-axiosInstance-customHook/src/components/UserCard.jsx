import React from 'react';

const UserCard = ({ user }) => {
  // Destructure user properties
  const { name, email, username, phone, address } = user || {};

  return (
    <div className="w-full max-w-sm bg-stone-900/60 backdrop-blur-xl border border-stone-800 rounded-2xl p-6 shadow-xl shadow-orange-950/10 hover:border-orange-500/40 transition-all duration-300">
      
      {/* Header: Avatar & Primary Info */}
      <div className="flex items-center gap-4 mb-5">
        {/* User Avatar Circle (Initials) */}
        <div className="w-12 h-12 rounded-xl bg-gradient-to-tr from-orange-500/20 to-amber-500/20 border border-orange-500/30 flex items-center justify-center text-orange-400 font-bold text-lg uppercase shrink-0">
          {name?.firstname?.[0]}
          {name?.lastname?.[0]}
        </div>

        {/* Name & Username */}
        <div className="overflow-hidden">
          <h3 className="text-base font-bold text-white capitalize truncate">
            {name?.firstname} {name?.lastname}
          </h3>
          <p className="text-xs text-orange-400 font-medium truncate">@{username}</p>
        </div>
      </div>

      {/* Details List */}
      <div className="space-y-3 text-xs border-t border-stone-800/80 pt-4">
        
        {/* Email */}
        <div className="flex items-center gap-3 text-stone-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-stone-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          <span className="truncate">{email}</span>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-3 text-stone-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-stone-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
          </svg>
          <span className="truncate">{phone}</span>
        </div>

        {/* Location */}
        <div className="flex items-start gap-3 text-stone-300">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-stone-500 shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <div className="capitalize leading-relaxed">
            <p>{address?.number} {address?.street}, {address?.city}</p>
            <p className="text-[10px] text-stone-500 normal-case">Zip: {address?.zipcode}</p>
          </div>
        </div>

      </div>

    </div>
  );
};

export default UserCard;