import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "@/components/Layout";
import Index from "./pages/Index";
import LaserRuecken from "./pages/LaserRuecken";
import LaserBrust from "./pages/LaserBrust";
import LaserIntim from "./pages/LaserIntim";
import LaserBart from "./pages/LaserBart";
import LaserLuzern from "./pages/LaserLuzern";
import LaserZuerich from "./pages/LaserZuerich";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/laser-ruecken-maenner" element={<LaserRuecken />} />
            <Route path="/laser-brust-maenner" element={<LaserBrust />} />
            <Route path="/laser-intim-maenner" element={<LaserIntim />} />
            <Route path="/laser-bart-maenner" element={<LaserBart />} />
            <Route path="/laser-haarentfernung-maenner-luzern" element={<LaserLuzern />} />
            <Route path="/laser-haarentfernung-maenner-zuerich" element={<LaserZuerich />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
