import React, { useContext } from 'react';
import Navbar from './components/Particals/Navbar';
import { Routes, Route } from 'react-router';
import About from './components/Pages/About';
import Shop from './components/Pages/Shop';
import Home from './components/Pages/Home';
import Footer from './components/Particals/Footer';
import ProductDisplay from './components/Pages/ProdcutDisplay';
import CartSidebar from './components/Particals/Sidebar/CartSidebar';
import ProfileSidebar from './components/Particals/Sidebar/ProfileSidebar';

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
          <Route path='/product-display/7' element={<ProductDisplay />} />
        </Routes>
      </div>

      {/* yaha cart section ko show karne ke liye contional rendering karni hogi phale jab useNavigate se agar riute banake hub show kar rahe the cart section ko tho hamari sliding animation  for closing the cart cleanly handel nahiho rahi thi hame route ke saath hi khelna pad raha tha so for that we are using toggeling base method */}

      <CartSidebar/>
      <ProfileSidebar/>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;