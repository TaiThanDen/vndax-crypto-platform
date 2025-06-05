import React from "react";
import { useLanguage } from "../../../context/LanguageContext.tsx";
import { useTheme } from "../../../context/ThemeContext.tsx";

const Trading = () => {
  const { t } = useLanguage();
  const { theme, setTheme } = useTheme();

  const icons = {
    MacOS: theme === "dark"
        ? "https://img.icons8.com/ios-filled/50/FFFFFF/mac-os.png"
        : "https://img.icons8.com/ios-filled/50/1A1A1A/mac-os.png",
    Windows: theme === "dark"
        ? "https://img.icons8.com/ios-filled/50/FFFFFF/windows-11.png"
        : "https://img.icons8.com/ios-filled/50/1A1A1A/windows-11.png",
    Linux: theme === "dark"
        ? "https://img.icons8.com/ios-filled/50/FFFFFF/linux.png"
        : "https://img.icons8.com/ios-filled/50/1A1A1A/linux.png",
  };

  return (
      <section className="bg-[hsl(var(--background))] py-16 lg:py-24" id="trading">
        <div className="container-custom flex flex-col lg:flex-row items-start justify-between" data-aos="fade-up">

          {/* Left Column - Phone Mockup with Video */}
          <div className="lg:w-1/2 flex justify-center mx-auto " data-aos="fade-up">
            <div className="relative w-auto h-[600px] overflow-hidden bg-[hsl(var(--muted))] shadow-lg rounded-2xl">
              <video
                  src="https://img.bgstatic.com/video/msg/Ex-EN-1734602916000.mp4"
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:w-1/2 flex flex-col items-center lg:items-start mt-8 lg:mt-0" data-aos="fade-up">
            <h2 className="text-4xl lg:text-5xl font-bold text-[hsl(var(--foreground))] mb-28 text-center lg:text-left self-start">
              {t('tradingTitle')}
            </h2>

            {/* QR Code and Text */}
            <div className="hidden sm:flex items-center gap-6 mb-11 ">
              <div className="bg-[hsl(var(--qr))] rounded-2xl w-auto h-auto shadow-xl">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/d/d0/QR_code_for_mobile_English_Wikipedia.svg"
                    alt="QR Code"
                    className="w-auto h-[200px]"
                />
              </div>
              <div className="text-xl text-[hsl(var(--muted-foreground))]">
                {t('tradingDownload')} <br />
                <p className="text-xxl text-[hsl(var(--foreground))] font-bold">{t('tradingDownloadPlatform')}</p>
              </div>
            </div>

            {/* Platform Icons */}
            <div className="flex gap-20 sm:gap-40 lg:gap-32 mt-12 flex-wrap justify-center sm:justify-start">
              {Object.entries(icons).map(([label, src]) => (
                  <div
                      key={label}
                      className="group flex flex-col items-center relative hover:scale-110 transition-transform duration-300"
                  >
                    <div className="absolute inset-[-25px] bg-[hsl(var(--background))] shadow-md rounded-lg transition-colors transition-shadow duration-300 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <img
                        src={src}
                        alt={label}
                        className="w-auto h-10 mb-2 relative z-10 rounded"
                    />
                    <span className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--foreground))] relative z-10">
                      {label}
                    </span>
                  </div>
              ))}
            </div>
          </div>
        </div>
      </section>
  );
};

export default Trading;
