import React from "react";
import Navbar from "@/components/Navbar.tsx";
import Footer from '@/components/Footer';
import Sidebar from'@/components/Sidebar';

const Document = ()=>{
    return (
        <div className="min-h-screen bg-vndax-black text-white">
            <Navbar/>
            <Sidebar/>
            <Footer/>
        </div>
    );
}
export default Document;
