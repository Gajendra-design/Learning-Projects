import React from 'react';
import HeroSection from '../Particals/HeroSection';
import ProductSection from '../Particals/ProductSection';

const Home = () => {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col space-y-2 pb-6">
      {/* Hero Banner & Dynamic Stats */}
      <section className="w-full">
        <HeroSection />
      </section>

      {/* Top Rated, New Arrivals, and Key Features/Perks */}
      <section className="w-full">
        <ProductSection />
      </section>
    </main>
  );
};

export default Home;