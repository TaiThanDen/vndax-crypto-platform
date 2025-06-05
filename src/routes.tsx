// AppRoutes.tsx
import { Routes, Route, useLocation } from "react-router-dom";
import Index from "./pages/Index";
import Document from "./pages/Document";
import Market from "./pages/market";
import Trade_spot from "./pages/Trade_spot";
import Blog from "@/components/Blog/BlogDetail";
import NotFound from "./pages/NotFound";
import MainLayout from "./components/layout/MainLayout";
import ScrollToTop from "@/components/ScrollToTop";

const AppRoutes = () => {
  const location = useLocation();
  return (
    <>
      <ScrollToTop />
      <MainLayout>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/doc" element={<Document />} />
          <Route path="/market" element={<Market />} />
          <Route
            path="/trade_spot"
            element={<Trade_spot key={location.pathname} />}
          />
          <Route path="/blog" element={<Blog />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainLayout>
    </>
  );
};

export default AppRoutes;
