import React, { useState, useRef, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "../../context/LanguageContext";
import { MdLanguage } from "react-icons/md";
import type { Language } from "@/i18n";
import { Link } from "react-router-dom";
import DarkModeButton from "@/components/layout/DarkModeButton";

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
    <nav className="bg-[hsl(var(--background))] py-4 sticky top-0 z-50 ">
      <div className="pl-6 pr-6 flex justify-between items-center">
        <div className="flex items-center space-x-8">
          <Link
            to="/"
            className="text-[hsl(var(--primary))] font-bold text-2xl uppercase"
          >
            VNDAX
          </Link>
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className="text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-colors"
            >
              {t("home")}
            </Link>
            <Link
              to="/market"
              className="text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-colors"
            >
              Thị trường
            </Link>
            <Link
              to="/trade_spot"
              className="text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-colors"
            >
              {t("trading")}
            </Link>
            {/* <Link
              to="#security"
              className="text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-colors"
            >
              {t("security")}
            </Link> */}
            <Link
              to="/doc"
              className="text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-colors"
            >
              {t("knowledge")}
            </Link>
            <Link
              to="#support"
              className="text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-colors"
            >
              {t("support")}
            </Link>
          </div>
        </div>

        {/* Desktop buttons */}
        <div className="hidden md:flex items-center space-x-4">
          <DarkModeButton />
          <Button
            variant="outline"
            className="text-[hsl(var(--foreground))] border-[hsl(var(--foreground))] hover:bg-[hsl(var(--foreground))] hover:text-[hsl(var(--background))]"
          >
            {t("login")}
          </Button>
          <Button className="bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary)/.8)] text-[hsl(var(--primary-foreground))]">
            {t("register")}
          </Button>
          <div className="relative" ref={langRef}>
            <Button
              variant="outline"
              className="text-[hsl(var(--foreground))] flex items-center gap-2"
              onClick={() => setShowLang(!showLang)}
            >
              <MdLanguage size={20} />
            </Button>
            {showLang && (
              <div className="absolute right-0 mt-2 w-64 bg-[hsl(var(--card))] rounded-xl shadow-lg z-50 border border-[hsl(var(--border))] p-4">
                <div className="mb-2">
                  <div className="text-[hsl(var(--footer-muted))] text-xs mb-1">
                    Language
                  </div>
                  <input
                    type="text"
                    placeholder="Search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    className="w-full px-3 py-2 rounded bg-[hsl(var(--popover))] text-[hsl(var(--foreground))] focus:outline-none mb-2"
                  />
                </div>
                <div className="max-h-60 overflow-y-auto thin-scrollbar">
                  {filteredLangs.length === 0 && (
                    <div className="text-[hsl(var(--footer-muted))] px-2 py-1">
                      No result
                    </div>
                  )}
                  {filteredLangs.map((l) => (
                    <div
                      key={l.code}
                      className={`px-3 py-2 cursor-pointer rounded ${
                        lang === l.code
                          ? "text-[hsl(var(--primary))] font-bold bg-[hsl(var(--popover))]"
                          : "text-[hsl(var(--foreground))] hover:bg-[hsl(var(--popover))]"
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
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-[hsl(var(--foreground))]"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile slide-out menu */}
      <div
        className={`fixed top-0 right-0 h-full w-[80vw] bg-[hsl(var(--card))] z-50 shadow-xl transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col p-4 space-y-4 h-full">
          <div className="flex justify-end">
            <button
              onClick={() => setIsOpen(false)}
              className="text-[hsl(var(--foreground))]"
            >
              <X size={24} />
            </button>
          </div>
          {/* Dark mode button for mobile */}
          <div className="flex justify-center mt-2">
            <DarkModeButton />
          </div>
          {/* Login/Register top section */}
          <div className="flex flex-col space-y-2 border-b border-[hsl(var(--border))] pb-4">
            <Button
              variant="outline"
              className="text-[hsl(var(--foreground))] border-[hsl(var(--foreground))] hover:bg-[hsl(var(--foreground))] hover:text-[hsl(var(--background))] w-full"
            >
              {t("login")}
            </Button>
            <Button className="bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary)/.8)] text-[hsl(var(--primary-foreground))] w-full">
              {t("register")}
            </Button>
          </div>

          {/* Nav links */}
          <Link
            to="/"
            className="text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-colors"
          >
            {t("home")}
          </Link>
          <Link
            to="/market"
            className="text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-colors"
          >
            Thị trường
          </Link>
          <Link
            to="/trade_spot"
            className="text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-colors"
          >
            {t("trading")}
          </Link>
          {/* <Link
            to="#security"
            className="text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-colors"
          >
            {t("security")} 
          </Link> */}
          <Link
            to="/doc"
            className="text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-colors"
          >
            {t("knowledge")}
          </Link>
          <Link
            to="#support"
            className="text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-colors"
          >
            {t("support")}
          </Link>

          {/* Language selector */}
          <Button
            variant="outline"
            className="text-[hsl(var(--foreground))] flex items-center gap-2 mt-4"
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
                className="w-full px-3 py-2 rounded bg-[hsl(var(--popover))] text-[hsl(var(--foreground))] focus:outline-none mb-2"
              />
              <div className="max-h-60 overflow-y-auto thin-scrollbar">
                {filteredLangs.length === 0 && (
                  <div className="text-[hsl(var(--footer-muted))] px-2 py-1">
                    No result
                  </div>
                )}
                {filteredLangs.map((l) => (
                  <div
                    key={l.code}
                    className={`px-3 py-2 cursor-pointer rounded ${
                      lang === l.code
                        ? "text-[hsl(var(--primary))] font-bold bg-[hsl(var(--popover))]"
                        : "text-[hsl(var(--foreground))] hover:bg-[hsl(var(--popover))]"
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
