import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./context/LanguageContext";
import MainLayout from "@/components/layout/MainLayout";
import Index from "@/pages/Index";
import NotFound from "./pages/NotFound";
import Document from "./pages/Document";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Market from "./pages/market";

const queryClient = new QueryClient();

const App = () => (
  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration in ms
      once: true, // whether animation should happen only once
      offset: 100, // how far from viewport the animation should trigger
    });
  }, []),
  (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Router>
          <LanguageProvider>
            <MainLayout>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/doc" element={<Document />} />
                <Route path="/market" element={<Market />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </MainLayout>
          </LanguageProvider>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  )
);

export default App;
