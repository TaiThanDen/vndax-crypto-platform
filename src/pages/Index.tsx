
import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import MarketStats from '@/components/MarketStats';
import Trading from '@/components/Trading';
import Security from '@/components/Security';
import Knowledge from '@/components/Knowledge';
import Footer from '@/components/Footer';

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
