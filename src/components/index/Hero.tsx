import React from 'react';
import { Button } from "@/components/ui/button.tsx";
import { Input } from "@/components/ui/input.tsx";
import { ChevronRight } from 'lucide-react';
import Visual from "@/components/index/Visual.tsx";
import { useLanguage } from "@/context/LanguageContext.tsx";

const Hero = () => {
  const { t } = useLanguage();

  return (
      <section className="bg-[hsl(var(--background))] py-8 lg:py-12">
        <div className="container-custom flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-12 lg:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[hsl(var(--foreground))]">
              {t("hero.title1")}{" "}
              <span className="text-[hsl(var(--primary))]">{t("hero.safe")}</span>{" "}
              {t("hero.and")}{" "}
              <span className="text-[hsl(var(--primary))]">{t("hero.simple")}</span>
            </h1>

            <p className="text-lg text-[hsl(var(--muted-foreground))] mb-8">
              {t("hero.description")}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-lg">
              <Input
                  type="email"
                  placeholder={t("hero.emailPlaceholder")}
                  className="bg-[hsl(var(--background))] shadow-md hover:shadow-[hsl(var(--background))] transition-colors transition-shadow duration-300 border-[hsl(var(--muted-foreground))] text-[hsl(var(--foreground))] placeholder-[hsl(var(--muted-foreground))]"
              />
              <Button className="bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/80 text-[hsl(var(--primary-foreground))] whitespace-nowrap">
                {t("hero.registerNow")} <ChevronRight className="ml-1 h-4 w-4" />
              </Button>
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center">
            <div className="relative w-full max-w-xxl aspect-[1/1] overflow-hidden rounded-xl">
              <Visual />
            </div>
          </div>
        </div>
      </section>
  );
};

export default Hero;
