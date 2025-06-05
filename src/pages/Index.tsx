import React from "react";
import Navbar from "@/components/layout/Navbar.tsx";
import Hero from "@/components/index/Hero.tsx";
import MarketStats from "@/components/index/MarketStats.tsx";
import Trading from "@/components/index/Trading.tsx";
import Security from "@/components/index/Security.tsx";
import Knowledge from "@/components/index/Knowledge.tsx";
import Footer from "@/components/layout/Footer.tsx";

const Index = () => {
  return (
    <div className="min-h-screen bg-vndax-black text-white">
      <Hero />
      <MarketStats />
      <Trading />
      <Security />
      <Knowledge />
    </div>
  );
};

export default Index;
