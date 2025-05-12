import React from "react";
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useLanguage } from "../context/LanguageContext";


const Navbar: React.FC = () => {
  const { lang, setLang, t } = useLanguage();
  const toggleLanguage = () => {
    setLang(lang === 'vi' ? 'en' : 'vi');
  };
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-vndax-black py-4 sticky top-0 z-50">
      <div className="container-custom flex justify-between items-center">
        <div className="flex items-center space-x-8">
          <a href="/" className="text-vndax-green font-bold text-2xl uppercase">VNDAX</a>
          <div className="hidden md:flex items-center space-x-8">
            <a href="/" className="text-white hover:text-vndax-green transition-colors">{t('home')}</a>
            <a href="#trading" className="text-white hover:text-vndax-green transition-colors">{t('trading')}</a>
            <a href="#security" className="text-white hover:text-vndax-green transition-colors">{t('security')}</a>
            <a href="#knowledge" className="text-white hover:text-vndax-green transition-colors">{t('knowledge')}</a>
            <a href="#support" className="text-white hover:text-vndax-green transition-colors">{t('support')}</a>
          </div>
        </div>
        
        <div className="hidden md:flex items-center space-x-4">
          <Button variant="outline" className="text-white border-white hover:bg-white hover:text-vndax-black">{t('login')}</Button>
          <Button className="bg-vndax-green hover:bg-vndax-darkgreen text-white">{t('register')}</Button>
            <img
                src={lang === 'vi' ? '/flags/en.png' : '/flags/vi.png'}
                alt="Switch Language"
                className="w-10 h-6 cursor-pointer"
                onClick={() => setLang(lang === 'vi' ? 'en' : 'vi')}
            />
        </div>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-vndax-darkgray mt-2 py-4">
          <div className="container-custom flex flex-col space-y-4">
            <a href="/" className="text-white hover:text-vndax-green transition-colors">{t('home')}</a>
            <a href="#trading" className="text-white hover:text-vndax-green transition-colors">{t('trading')}</a>
            <a href="#security" className="text-white hover:text-vndax-green transition-colors">{t('security')}</a>
            <a href="#knowledge" className="text-white hover:text-vndax-green transition-colors">{t('knowledge')}</a>
            <a href="#support" className="text-white hover:text-vndax-green transition-colors">{t('support')}</a>
            <div className="flex flex-col space-y-2 pt-2">
              <Button variant="outline" className="text-white border-white hover:bg-white hover:text-vndax-black w-full">{t('login')}</Button>
              <Button className="bg-vndax-green hover:bg-vndax-darkgreen text-white w-full">{t('register')}</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
