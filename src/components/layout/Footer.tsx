import { useLanguage } from "../../context/LanguageContext.tsx";
import {
  Facebook,
  Twitter,
  Youtube,
  Instagram,
  Linkedin,
  MessageCircle,
} from "lucide-react";

const Footer = () => {
  const { t } = useLanguage();
  return (
    <footer
      className="bg-[hsl(var(--footer-background))] pt-16 pb-8 footer-text"
      data-aos="fade-up"
      id="support"
    >
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Column 1: Logo & Description */}
          <div>
            <a
              href="/public"
              className="text-primary font-bold text-2xl uppercase mb-5 inline-block"
            >
              VNDAX
            </a>
            <p className="footer-muted mb-6">{t("foot1")}</p>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Youtube, Instagram, Linkedin].map(
                (Icon, i) => (
                  <a
                    key={i}
                    href="#"
                    className="footer-muted hover:text-primary transition-colors"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                )
              )}
            </div>
          </div>

          {/* Column 2: Products */}
          <div>
            <h3 className="footer-text font-semibold text-lg mb-5">
              {t("footProduct")}
            </h3>
            <ul className="space-y-3">
              {[
                "Spot Trading",
                "Futures Trading",
                "Staking",
                "P2P Trading",
                "API",
              ].map((item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="footer-muted hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Support */}
          <div>
            <h3 className="footer-text font-semibold text-lg mb-5">
              {t("footSupport")}
            </h3>
            <ul className="space-y-3">
              {[t("footSupport1"), t("footSupport2"), "FAQ"].map((item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="footer-muted hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="mailto:support@vndax.com"
                  className="footer-muted hover:text-primary transition-colors"
                >
                  support@vndax.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+84123456789"
                  className="footer-muted hover:text-primary transition-colors"
                >
                  Hotline: 1900 xxxx
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Policies */}
          <div>
            <h3 className="footer-text font-semibold text-lg mb-5">
              {t("footPolicy")}
            </h3>
            <ul className="space-y-3">
              {[
                t("footPolicy1"),
                t("footPolicy2"),
                t("footPolicy3"),
                t("footPolicy4"),
                "Fee Structure",
              ].map((item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="footer-muted hover:text-primary transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="footer-muted text-sm mb-4 md:mb-0">
            {t("footCopyright")}
          </p>
          <div className="flex space-x-6">
            {["Sitemap", "Cookies", t("footCopy1")].map((item, i) => (
              <a
                key={i}
                href="#"
                className="footer-muted hover:text-primary transition-colors text-sm"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Chat Support */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-primary text-white p-3 rounded-full shadow-lg hover:bg-primary/80 transition-colors">
          <MessageCircle className="h-6 w-6" />
        </button>
      </div>
    </footer>
  );
};

export default Footer;
