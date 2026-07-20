import React from 'react';
import Navbar from './components/Particals/Navbar';
import { Routes, Route } from 'react-router';
import About from './components/Pages/About';
import Shop from './components/Pages/Shop';
import Home from './components/Pages/Home';
import Footer from './components/Particals/Footer';

const App = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* Glassmorphic Sticky Header */}
      <header className="sticky top-0 z-50 bg-slate-950/60 backdrop-blur-xl border-b border-slate-800/80 shadow-lg shadow-slate-950/40">
        <Navbar />
      </header>

      {/* Main Container - No extra pt-20 to close top gap */}
      <div className="flex-1 w-full pb-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </div>

      {/* Footer */}
      <Footer/>
    </div>
  );
};

export default App;