import React from 'react';
import { Package, Users, Star, Truck, Zap, ShieldCheck, HeartHandshake, Sparkles, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

export default function About() {
  // Team members data
  const teamMembers = [
    { name: 'Aryan Shah', role: 'Founder & CEO', initial: 'A', bg: 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30' },
    { name: 'Priya Mehta', role: 'Head of Product', initial: 'P', bg: 'bg-sky-500/20 text-sky-400 border-sky-500/30' },
    { name: 'Rohan Verma', role: 'Lead Engineer', initial: 'R', bg: 'bg-purple-500/20 text-purple-400 border-purple-500/30' },
    { name: 'Sneha Kapoor', role: 'Design Director', initial: 'S', bg: 'bg-rose-500/20 text-rose-400 border-rose-500/30' },
  ];

  // Core values data
  const values = [
    {
      icon: ShieldCheck,
      title: 'Trust',
      desc: 'Every product is verified for quality and authenticity before listing.',
    },
    {
      icon: Truck,
      title: 'Speed',
      desc: 'We obsess over delivery times so your orders arrive when promised.',
    },
    {
      icon: HeartHandshake,
      title: 'Community',
      desc: 'Built around real customer feedback, not just business metrics.',
    },
    {
      icon: Sparkles,
      title: 'Quality',
      desc: 'We curate the best — no filler, no junk, just great products.',
    },
  ];

  return (
    <section className="bg-slate-950 text-slate-100 min-h-screen px-4 py-8 md:px-12 font-sans">
      <div className="max-w-4xl mx-auto space-y-12">
        
        {/* ================= SECTION 1: HERO HEADER ================= */}
        <div className="text-center space-y-4">
          {/* Logo Badge */}
          <div className="inline-flex items-center justify-center p-3 bg-indigo-500/10 text-indigo-400 rounded-2xl border border-indigo-500/20 mb-2 shadow-inner">
            <Zap className="w-8 h-8 fill-indigo-400" />
          </div>

          {/* Heading */}
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            About <span className="text-indigo-400">SkyMart</span>
          </h1>

          {/* Subheading */}
          <p className="text-slate-300 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            SkyMart is a next-generation e-commerce platform built to make online
            shopping fast, fair, and enjoyable — for everyone.
          </p>
        </div>

        {/* ================= STATS CARDS GRID ================= */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 text-center flex flex-col items-center justify-center space-y-2 hover:border-slate-700 transition duration-200 shadow-sm">
            <div className="p-2 bg-indigo-500/10 text-indigo-400 rounded-xl border border-indigo-500/20">
              <Package className="w-5 h-5" />
            </div>
            <div className="text-2xl md:text-3xl font-black text-white tracking-tight">20K+</div>
            <div className="text-xs text-slate-400 font-medium">Products</div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 text-center flex flex-col items-center justify-center space-y-2 hover:border-slate-700 transition duration-200 shadow-sm">
            <div className="p-2 bg-indigo-500/10 text-indigo-400 rounded-xl border border-indigo-500/20">
              <Users className="w-5 h-5" />
            </div>
            <div className="text-2xl md:text-3xl font-black text-white tracking-tight">50K+</div>
            <div className="text-xs text-slate-400 font-medium">Happy Customers</div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 text-center flex flex-col items-center justify-center space-y-2 hover:border-slate-700 transition duration-200 shadow-sm">
            <div className="p-2 bg-indigo-500/10 text-indigo-400 rounded-xl border border-indigo-500/20">
              <Star className="w-5 h-5" />
            </div>
            <div className="text-2xl md:text-3xl font-black text-white tracking-tight">4.9</div>
            <div className="text-xs text-slate-400 font-medium">Avg. Rating</div>
          </div>

          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 text-center flex flex-col items-center justify-center space-y-2 hover:border-slate-700 transition duration-200 shadow-sm">
            <div className="p-2 bg-indigo-500/10 text-indigo-400 rounded-xl border border-indigo-500/20">
              <Truck className="w-5 h-5" />
            </div>
            <div className="text-2xl md:text-3xl font-black text-white tracking-tight">99%</div>
            <div className="text-xs text-slate-400 font-medium">On-time Delivery</div>
          </div>
        </div>

        {/* ================= OUR STORY ================= */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 md:p-10 shadow-md space-y-4">
          <h2 className="text-2xl font-bold text-white tracking-wide">
            Our Story
          </h2>

          <div className="space-y-4 text-slate-300 text-sm md:text-base leading-relaxed">
            <p>
              SkyMart started in 2022 as a small side project — two engineers tired of bloated, slow e-commerce experiences. We asked ourselves: what if shopping online was actually <em className="italic text-white">enjoyable</em>?
            </p>
            <p>
              Three years later, SkyMart serves over 50,000 customers across the country. We stock electronics, fashion, jewelry, and everyday essentials — all at prices that don't require a second mortgage.
            </p>
            <p>
              We're still the same team at heart: obsessed with speed, transparency, and making you feel good about every purchase you make here.
            </p>
          </div>
        </div>


        {/* ================= SECTION 2: WHAT WE STAND FOR ================= */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center tracking-tight">
            What We Stand For
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {values.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div 
                  key={idx} 
                  className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex items-start gap-4 hover:border-slate-700 transition duration-200 shadow-sm"
                >
                  <div className="p-3 bg-indigo-500/10 text-indigo-400 rounded-xl border border-indigo-500/20 shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-lg font-bold text-white">{item.title}</h3>
                    <p className="text-xs md:text-sm text-slate-400 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>


        {/* ================= SECTION 3: MEET THE TEAM ================= */}
        <div className="space-y-6 pt-4">
          <h2 className="text-2xl md:text-3xl font-bold text-white text-center tracking-tight">
            Meet the Team
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {teamMembers.map((member, idx) => (
              <div 
                key={idx} 
                className="bg-slate-900 border border-slate-800 rounded-2xl p-6 text-center flex flex-col items-center space-y-3 hover:border-slate-700 transition duration-200 shadow-sm"
              >
                {/* Initial Avatar Badge */}
                <div className={`w-12 h-12 rounded-full border flex items-center justify-center font-bold text-lg shadow-sm ${member.bg}`}>
                  {member.initial}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-white">{member.name}</h3>
                  <p className="text-xs text-slate-400 mt-0.5">{member.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>


        {/* ================= SECTION 4: CALL TO ACTION BANNER ================= */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-8 md:p-12 text-center space-y-5 shadow-md">
          <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
            Ready to shop?
          </h2>
          <p className="text-slate-400 text-sm md:text-base max-w-md mx-auto">
            Explore thousands of products at unbeatable prices.
          </p>
          <div className="pt-2">
            <Link 
              to="/shop" 
              className="inline-flex items-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold px-6 py-3 rounded-xl transition duration-200 shadow-lg shadow-indigo-500/20 active:scale-[0.98]"
            >
              <span>Browse Products</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}