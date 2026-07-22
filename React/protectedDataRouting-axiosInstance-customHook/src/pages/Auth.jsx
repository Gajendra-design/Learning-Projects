import React from 'react';
import { Outlet } from 'react-router';

const Auth = () => {
    return (
        <div className="bg-stone-950 text-stone-100 min-h-screen flex items-center justify-center p-4 selection:bg-orange-500 selection:text-white">
            {/* Ambient Glow Effects Background */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-40 -left-40 w-96 h-96 bg-orange-600/25 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-amber-500/20 rounded-full blur-3xl"></div>
            </div>

            <Outlet />
        </div>
    );
};

export default Auth;