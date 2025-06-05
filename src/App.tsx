import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "@/components/reusable-component/toaster";
import { Toaster as Sonner } from "@/components/reusable-component/sonner";
import { TooltipProvider } from "@/components/reusable-component/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { LanguageProvider } from './context/LanguageContext';
import Theme from './context/ThemeContext';
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Document from "./pages/Document.tsx";
import Blog from "@/components/reusable-component/blog";
import AOS from 'aos';
import 'aos/dist/aos.css';

const queryClient = new QueryClient();

const App = () => {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ||
        (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light")
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
                    <LanguageProvider>
                        <Theme.Provider value={{ theme, setTheme }}>
                            <Routes>
                                <Route path="/" element={<Index />} />
                                <Route path="/doc" element={<Document />} />
                                <Route path="/blog" element={<Blog />} />
                                <Route path="*" element={<NotFound />} />
                            </Routes>
                        </Theme.Provider>
                    </LanguageProvider>
                </BrowserRouter>
            </TooltipProvider>
        </QueryClientProvider>
    );
};

export default App;