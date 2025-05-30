import React from "react";
import { Button } from "@/components/ui/button";
import { ShieldCheck, Lock, Activity } from "lucide-react";
import { useLanguage } from "../../context/LanguageContext";

const Security = () => {
  const { t } = useLanguage();

  const securityFeatures = [
    {
      title: t("securityFeatures.twoFactorAuth.title"),
      description: t("securityFeatures.twoFactorAuth.description"),
      icon: <ShieldCheck className="h-8 w-8 text-vndax-green" />,
      link: "#two-factor-auth",
    },
    {
      title: t("securityFeatures.coldStorage.title"),
      description: t("securityFeatures.coldStorage.description"),
      icon: <Lock className="h-8 w-8 text-vndax-green" />,
      link: "#cold-storage",
    },
    {
      title: t("securityFeatures.monitoring.title"),
      description: t("securityFeatures.monitoring.description"),
      icon: <Activity className="h-8 w-8 text-vndax-green" />,
      link: "#monitoring",
    },
  ];

  return (
    <section className="bg-vndax-black py-16" id="security">
      <div className="container-custom px-4 sm:px-6 lg:px-8" data-aos="fade-up">
        <h2
          className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-white mb-12"
          data-aos="fade-up"
        >
          {t("securityTitle")}
        </h2>

        <div
          className="relative rounded-lg overflow-hidden bg-black mb-12 mx-auto w-full max-w-5xl"
          data-aos="fade-up"
        >
          <video
            src="https://img.bgstatic.com/video/msg/Safe-5s-1732170834-2x.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-auto object-contain"
          ></video>
        </div>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
          data-aos="fade-up"
        >
          {securityFeatures.map((feature, index) => (
            <div
              key={index}
              className="bg-vndax-darkgray rounded-lg p-6 hover:bg-vndax-lightgray transition-colors"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-3 text-white">
                {feature.title}
              </h3>
              <p className="text-gray-300 mb-4">{feature.description}</p>
              <a
                href={feature.link}
                className="text-vndax-green hover:underline inline-flex items-center"
              >
                {t("learnMore")}
                <svg
                  className="ml-1 h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
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
