import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChevronRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const Hero = () => {
  const { t } = useLanguage(); // Use the translation function

  return (
    <section className="bg-vndax-black py-8 lg:py-12">
      <div className="container-custom flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 mb-12 lg:mb-0">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {/* Translate title using the keys */}
            {t("hero.title1")}{" "}
            <span className="text-vndax-green">{t("hero.safe")}</span>{" "}
            {t("hero.and")}{" "}
            <span className="text-vndax-green">{t("hero.simple")}</span>
          </h1>
          <p className="text-lg text-gray-300 mb-8">
            {/* Translate description */}
            {t("hero.description")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-lg">
            <Input
              type="email"
              placeholder={t("hero.emailPlaceholder")} // Translate input placeholder
              className="bg-vndax-darkgray border-vndax-lightgray"
            />
            <Button className="bg-vndax-green hover:bg-vndax-darkgreen text-white whitespace-nowrap">
              {/* Translate button text */}
              {t("hero.registerNow")} <ChevronRight className="ml-1 h-4 w-4" />
            </Button>
          </div>
        </div>
        <div className="lg:w-1/2 flex justify-center">
          <div className="relative w-full max-w-xxl aspect-[1/1] overflow-hidden rounded-xl">
            <video
              src="https://img.bgstatic.com/multiLang/web/3f6e3e06ce507ce78b54979a7e68897d.mp4"
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-auto object-contain"
            ></video>
            {/* <Visual /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
