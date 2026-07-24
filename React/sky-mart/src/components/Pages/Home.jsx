import React from 'react';
import HeroSection from '../Particals/HeroSection';
import ProductSection from '../Particals/ProductSection';
import CategorySection from '../Particals/CategorySection';

const Home = () => {
  return (
    <main className="bg-slate-950 text-slate-100 flex flex-col space-y-4 pt-2 pb-6">
      <section className="w-full">
        <HeroSection />
      </section>

      <section className="w-full">
        <CategorySection />
      </section>

      <section className="w-full">
        <ProductSection />
      </section>

    </main>
  );
};

export default Home;