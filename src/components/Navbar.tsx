import React, { useState, useRef, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "../context/LanguageContext";
import { MdLanguage } from "react-icons/md";
import type { Language } from "@/i18n";

const LANGUAGES: { code: Language; label: string }[] = [
  { code: "en", label: "English" },
  { code: "vi", label: "Tiếng Việt" },
  { code: "de", label: "Deutsch" },
  { code: "fr", label: "Français" },
  { code: "es", label: "Español" },
  { code: "ru", label: "Русский" },
  { code: "zh", label: "中文" },
];

const Navbar: React.FC = () => {
  const { lang, setLang, t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [showLang, setShowLang] = useState(false);
  const [showLangMobile, setShowLangMobile] = useState(false);
  const [search, setSearch] = useState("");
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setShowLang(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const filteredLangs = LANGUAGES.filter((l) =>
    l.label.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <nav className="bg-vndax-black py-4 sticky top-0 z-50">
      <div className="container-custom flex justify-between items-center">
        <div className="flex items-center space-x-8">
          <a
            href="/"
            className="text-vndax-green font-bold text-2xl uppercase"
          >
           VNDAX
          </a>
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="/"
              className="text-white hover:text-vndax-green transition-colors"
            >
              {t("home")}
            </a>
            <a
              href="#trading"
              className="text-white hover:text-vndax-green transition-colors"
            >
              {t("trading")}
            </a>
            <a
              href="#security"
              className="text-white hover:text-vndax-green transition-colors"
            >
              {t("security")}
            </a>
            <a
              href="#knowledge"
              className="text-white hover:text-vndax-green transition-colors"
            >
              {t("knowledge")}
            </a>
            <a
              href="#support"
              className="text-white hover:text-vndax-green transition-colors"
            >
              {t("support")}
            </a>
          </div>
        </div>

        {/* Desktop buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <Button
            variant="outline"
            className="text-white border-white hover:bg-white hover:text-vndax-black"
          >
            {t("login")}
          </Button>
          <Button className="bg-vndax-green hover:bg-vndax-darkgreen text-white">
            {t("register")}
          </Button>
          <div className="relative" ref={langRef}>
            <Button
              variant="outline"
              className="text-white flex items-center gap-2"
              onClick={() => setShowLang(!showLang)}
            >
              <MdLanguage size={20} />
            </Button>
            {showLang && (
              <div className="absolute right-0 mt-2 w-64 bg-[#181A20] rounded-xl shadow-lg z-50 border border-[#222] p-4">
                <div className="mb-2">
                  <div className="text-gray-400 text-xs mb-1">Language</div>
                  <input
                    type="text"
                    placeholder="Search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full px-3 py-2 rounded bg-[#23262F] text-white focus:outline-none mb-2"
                  />
                </div>
                <div className="max-h-60 overflow-y-auto thin-scrollbar">
                  {filteredLangs.length === 0 && (
                    <div className="text-gray-400 px-2 py-1">No result</div>
                  )}
                  {filteredLangs.map((l) => (
                    <div
                      key={l.code}
                      className={`px-3 py-2 cursor-pointer rounded ${
                        lang === l.code
                          ? "text-vndax-green font-bold bg-[#23262F]"
                          : "text-white hover:bg-[#23262F]"
                      }`}
                      onClick={() => {
                        setLang(l.code);
                        setShowLang(false);
                        setSearch("");
                      }}
                    >
                      {l.label}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile slide-out menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[80vw] bg-vndax-darkgray z-50 shadow-xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col p-4 space-y-4 h-full">
          <div className="flex justify-end">
            <button onClick={() => setIsOpen(false)} className="text-white">
              <X size={24} />
            </button>
          </div>

          {/* Login/Register top section */}
          <div className="flex flex-col space-y-2 border-b border-[#333] pb-4">
            <Button
              variant="outline"
              className="text-white border-white hover:bg-white hover:text-vndax-black w-full"
            >
              {t("login")}
            </Button>
            <Button className="bg-vndax-green hover:bg-vndax-darkgreen text-white w-full">
              {t("register")}
            </Button>
          </div>

          {/* Nav links */}
          <a
            href="/"
            className="text-white hover:text-vndax-green transition-colors"
          >
            {t("home")}
          </a>
          <a
            href="#trading"
            className="text-white hover:text-vndax-green transition-colors"
          >
            {t("trading")}
          </a>
          <a
            href="#security"
            className="text-white hover:text-vndax-green transition-colors"
          >
            {t("security")}
          </a>
          <a
            href="#knowledge"
            className="text-white hover:text-vndax-green transition-colors"
          >
            {t("knowledge")}
          </a>
          <a
            href="#support"
            className="text-white hover:text-vndax-green transition-colors"
          >
            {t("support")}
          </a>

          {/* Language selector */}
          <Button
            variant="outline"
            className="text-white flex items-center gap-2 mt-4"
            onClick={() => setShowLangMobile(!showLangMobile)}
          >
            <MdLanguage size={20} />
            {showLangMobile ? "Hide languages" : "Change language"}
          </Button>
          {showLangMobile && (
            <div className="pt-4">
              <input
                type="text"
                placeholder="Search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full px-3 py-2 rounded bg-[#23262F] text-white focus:outline-none mb-2"
              />
              <div className="max-h-60 overflow-y-auto thin-scrollbar">
                {filteredLangs.length === 0 && (
                  <div className="text-gray-400 px-2 py-1">No result</div>
                )}
                {filteredLangs.map((l) => (
                  <div
                    key={l.code}
                    className={`px-3 py-2 cursor-pointer rounded ${
                      lang === l.code
                        ? "text-vndax-green font-bold bg-[#23262F]"
                        : "text-white hover:bg-[#23262F]"
                    }`}
                    onClick={() => {
                      setLang(l.code);
                      setSearch("");
                      setShowLangMobile(false);
                    }}
                  >
                    {l.label}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
