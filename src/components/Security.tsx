import React from 'react';
import { Button } from "@/components/ui/button";
import { ShieldCheck, Lock, Activity } from 'lucide-react';
import { useLanguage } from "../context/LanguageContext";

const Security = () => {
  const { t } = useLanguage();

  const securityFeatures = [
    {
      title: t('securityFeatures.twoFactorAuth.title'),
      description: t('securityFeatures.twoFactorAuth.description'),
      icon: <ShieldCheck className="h-8 w-8 text-vndax-green" />,
      link: "#two-factor-auth"
    },
    {
      title: t('securityFeatures.coldStorage.title'),
      description: t('securityFeatures.coldStorage.description'),
      icon: <Lock className="h-8 w-8 text-vndax-green" />,
      link: "#cold-storage"
    },
    {
      title: t('securityFeatures.monitoring.title'),
      description: t('securityFeatures.monitoring.description'),
      icon: <Activity className="h-8 w-8 text-vndax-green" />,
      link: "#monitoring"
    }
  ];

  return (
      <section className="bg-vndax-black py-16" id="security">
        <div className="container-custom">
          <h2 className="text-4xl lg:text-44xl font-bold section-title text-center text-white mb-12">{t('securityTitle')}</h2>

          <div className="relative rounded-lg overflow-hidden bg-black mb-16 m-[150px] h-auto">
            <video
                src="https://img.bgstatic.com/video/msg/Safe-5s-1732170834-2x.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-auto object-contain"
            ></video>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {securityFeatures.map((feature, index) => (
                <div key={index} className="bg-vndax-darkgray rounded-lg p-6 hover:bg-vndax-lightgray transition-colors">
                  <div className="mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                  <p className="text-gray-300 mb-4">{feature.description}</p>
                  <a
                      href={feature.link}
                      className="text-vndax-green hover:underline inline-flex items-center"
                  >
                    {t('learnMore')}
                    <svg className="ml-1 h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </a>
                </div>
            ))}
          </div>
        </div>
      </section>
  );
};

export default Security;
