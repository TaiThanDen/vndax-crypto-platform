
import React from 'react';
import Navbar from '@/components/layout-components/Navbar.tsx';
import Hero from '@/components/inmutable-components/Index/Hero.tsx';
import MarketStats from '@/components/inmutable-components/Index/MarketStats.tsx';
import Trading from '@/components/inmutable-components/Index/Trading.tsx';
import Security from '@/components/inmutable-components/Index/Security.tsx';
import Knowledge from '@/components/inmutable-components/Index/Knowledge.tsx';
import Footer from '@/components/layout-components/Footer.tsx';

const Index = () => {
  return (
    <div className="min-h-screen bg-vndax-black text-white">
      <Navbar />
      <Hero />
      <MarketStats />
      <Trading />
      <Security />
      <Knowledge />
      <Footer />
    </div>
  );
};

export default Index;
