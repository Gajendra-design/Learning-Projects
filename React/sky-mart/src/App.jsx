import React from 'react';
import Navbar from './components/Particals/Navbar';
import { Routes, Route } from 'react-router';
import About from './components/Pages/About';
import Cart from './components/Pages/Cart';
import Home from './components/Pages/Home';
import Footer from './components/Particals/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col gap-10 font-sans selection:bg-indigo-500 selection:text-white">
      <header className="sticky top-0 z-50 backdrop-blur-lg bg-slate-900/50 border-b border-slate-800/80 shadow-lg shadow-slate-950/20 transition-all duration-300">
        <Navbar />
      </header>

      <div className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </div>

      <Footer />
    </div>
  );
};

export default App;