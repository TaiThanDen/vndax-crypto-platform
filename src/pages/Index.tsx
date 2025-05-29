import React from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/index/Hero";
import MarketStats from "@/components/index/MarketStats";
import Trading from "@/components/index/Trading";
import Security from "@/components/index/Security";
import Knowledge from "@/components/index/Knowledge";
import Footer from "@/components/Footer";

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
