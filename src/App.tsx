import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LanguageProvider } from "./context/LanguageContext";
import Theme from "./context/ThemeContext";
import AppRoutes from "./routes";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "@/components/ScrollToTop.tsx";

const queryClient = new QueryClient();

const App = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ||
      (window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light")
  );

  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 100 });
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTop />
          <LanguageProvider>
            <Theme.Provider value={{ theme, setTheme }}>
              <AppRoutes />
            </Theme.Provider>
          </LanguageProvider>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
