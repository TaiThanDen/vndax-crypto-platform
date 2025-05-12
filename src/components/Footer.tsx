import { useLanguage } from "../context/LanguageContext";
import React from 'react';
import { Facebook, Twitter, Youtube, Instagram, Linkedin, MessageCircle } from 'lucide-react';

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer className="bg-black pt-16 pb-8" data-aos="fade-up" id="support">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1: Logo & Description */}
          <div>
            <a href="/" className="text-vndax-green font-bold text-2xl uppercase mb-5 inline-block">VNDAX</a>
            <p className="text-gray-300 mb-6">
              {t('foot1')}
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-vndax-green transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-vndax-green transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-vndax-green transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-vndax-green transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-vndax-green transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Column 2: Products */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5">{t('footProduct')}</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-vndax-green transition-colors">Spot Trading</a></li>
              <li><a href="#" className="text-gray-400 hover:text-vndax-green transition-colors">Futures Trading</a></li>
              <li><a href="#" className="text-gray-400 hover:text-vndax-green transition-colors">Staking</a></li>
              <li><a href="#" className="text-gray-400 hover:text-vndax-green transition-colors">P2P Trading</a></li>
              <li><a href="#" className="text-gray-400 hover:text-vndax-green transition-colors">API</a></li>
            </ul>
          </div>
          
          {/* Column 3: Support */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5">{t('footSupport')}</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-vndax-green transition-colors">{t('footSupport1')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-vndax-green transition-colors">{t('footSupport2')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-vndax-green transition-colors">FAQ</a></li>
              <li>
                <a href="mailto:support@vndax.com" className="text-gray-400 hover:text-vndax-green transition-colors">
                  support@vndax.com
                </a>
              </li>
              <li>
                <a href="tel:+84123456789" className="text-gray-400 hover:text-vndax-green transition-colors">
                  Hotline: 1900 xxxx
                </a>
              </li>
            </ul>
          </div>
          
          {/* Column 4: Policies */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-5">{t('footPolicy')}</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-vndax-green transition-colors">{t('footPolicy1')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-vndax-green transition-colors">{t('footPolicy2')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-vndax-green transition-colors">{t('footPolicy3')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-vndax-green transition-colors">{t('footPolicy4')}</a></li>
              <li><a href="#" className="text-gray-400 hover:text-vndax-green transition-colors">Fee Structure</a></li>
            </ul>
          </div>
        </div>
        
        {/* Copyright & Bottom Links */}
        <div className="border-t border-vndax-lightgray pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            {t('footCopyright')}
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-vndax-green transition-colors text-sm">Sitemap</a>
            <a href="#" className="text-gray-400 hover:text-vndax-green transition-colors text-sm">Cookies</a>
            <a href="#" className="text-gray-400 hover:text-vndax-green transition-colors text-sm">{t('footCopy1')}</a>
          </div>
        </div>
      </div>
      
      {/* Chat Support Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-vndax-green text-white p-3 rounded-full shadow-lg hover:bg-vndax-darkgreen transition-colors">
          <MessageCircle className="h-6 w-6" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
