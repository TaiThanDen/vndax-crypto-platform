import React, { useState, useRef, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "../context/LanguageContext";
import { MdLanguage } from "react-icons/md";
import type { Language } from "@/i18n";
import DarkModeButton from "@/components/DarkModeButton";

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
      <nav className="bg-[hsl(var(--background))] text-[hsl(var(--foreground))] py-4 sticky top-0 z-50 shadow-md">
        <div className="container-custom flex justify-between items-center">
          <div className="flex items-center space-x-8">
            <a href="/" className="text-[hsl(var(--primary))] font-bold text-2xl uppercase">
              VNDAX
            </a>
            <div className="hidden md:flex items-center space-x-8">{["home", "trading", "security", "knowledge", "support"].map((key) => (
                  <a key={key} href={key === "home" ? "/" : `#${key}`} className="text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-colors">
                    {t(key)}
                  </a>
              ))}
            </div>
          </div>

          {/* Desktop buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <DarkModeButton />
            <Button variant="outline" className="border-[hsl(var(--foreground))] text-[hsl(var(--foreground))] hover:bg-[hsl(var(--foreground))] hover:text-[hsl(var(--background))]">
              {t("login")}
            </Button>
            <Button className="bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/80 text-[hsl(var(--background))]">
              {t("register")}
            </Button>
            <div className="relative" ref={langRef}>
              <Button variant="outline" className="text-[hsl(var(--foreground))] flex items-center gap-2" onClick={() => setShowLang(!showLang)}>
                <MdLanguage size={20} />
              </Button>
              {showLang && (
                  <div className="absolute right-0 mt-2 w-64 bg-[hsl(var(--background))] shadow-md transition-colors transition-shadow duration-300 rounded-xl shadow-lg z-50 border border-[hsl(var(--muted))] p-4">
                    <div className="mb-2">
                      <div className="text-xs mb-1 text-[hsl(var(--muted-foreground))]">Language</div>
                      <input type="text" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)} className="w-full px-3 py-2 rounded bg-[hsl(var(--background))] shadow-md hover:hover:shadow-[0_4px_20px_rgba(34,197,94,0.5)] transition-colors transition-shadow duration-300 text-[hsl(var(--foreground))] focus:outline-none mb-2"/>
                    </div>
                    <div className="max-h-60 overflow-y-auto  thin-scrollbar">
                      {filteredLangs.length === 0 && (
                          <div className="text-gray-400 px-2 py-1 [hsl(var(--foreground))] ">No result</div>
                      )}
                      {filteredLangs.map((l) => (
                          <div
                              key={l.code}
                              className={`px-3 py-2 cursor-pointer rounded transition-all duration-300 ${
                                  lang === l.code
                                      ? "text-[hsl(var(--primary))] font-bold bg-[rgba(34,197,94,0.1)]"
                                      : "text-[hsl(var(--foreground))]  hover:bg-[rgba(34,197,94,0.1)]"
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
            <button onClick={() => setIsOpen(!isOpen)} className="text-[hsl(var(--foreground))]">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div className={`fixed top-0 right-0 h-full w-[80vw] bg-[hsl(var(--background))] z-50 shadow-xl transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
          <div className="flex flex-col p-4 space-y-4 h-full">
            <div className="flex justify-end">
              <button onClick={() => setIsOpen(false)} className="text-[hsl(var(--foreground))]">
                <X size={24} />
              </button>
            </div>

            {/* Dark mode toggle */}
            <div className="flex justify-center mt-2">
              <DarkModeButton />
            </div>

            {/* Auth buttons */}
            <div className="flex flex-col space-y-2 border-b border-[hsl(var(--muted))] pb-4">
              <Button variant="outline" className="border-[hsl(var(--foreground))] text-[hsl(var(--foreground))] hover:bg-[hsl(var(--foreground))] hover:text-[hsl(var(--background))] w-full">
                {t("login")}
              </Button>
              <Button className="bg-[hsl(var(--primary))] hover:bg-[hsl(var(--primary))]/80 text-[hsl(var(--background))] w-full">
                {t("register")}
              </Button>
            </div>

            {/* Navigation links */}
            {["home", "trading", "security", "knowledge", "support"].map((key) => (
                <a
                    key={key}
                    href={key === "home" ? "/" : `#${key}`}
                    className="text-[hsl(var(--foreground))] hover:text-[hsl(var(--primary))] transition-colors"
                >
                  {t(key)}
                </a>
            ))}

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
                      className="w-full px-3 py-2 rounded bg-[hsl(var( --muted-foreground))] text-[hsl(var(--foreground))] focus:outline-none mb-2"
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
                                    ? "text-[hsl(var(--primary))] font-bold bg-[hsl(var(--muted))]"
                                    : "text-[hsl(var(--foreground))] hover:bg-[hsl(var(--muted))]"
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
