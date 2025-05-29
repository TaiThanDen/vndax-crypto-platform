import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <div className="min-h-screen bg-vndax-black text-white flex flex-col">
    <Navbar />
    <div className="flex-1">{children}</div>
    <Footer />
  </div>
);

export default MainLayout;