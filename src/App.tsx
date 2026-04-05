import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import FloatingButtons from "@/components/FloatingButtons";
import Index from "./pages/Index.tsx";
import Impressum from "./pages/Impressum.tsx";
import Leistungen from "./pages/Leistungen.tsx";
import Projekte from "./pages/Projekte.tsx";
import UeberUns from "./pages/UeberUns.tsx";
import Kontakt from "./pages/Kontakt.tsx";
import Anfragen from "./pages/Anfragen.tsx";
import Datenschutz from "./pages/Datenschutz.tsx";
import NotFound from "./pages/NotFound.tsx";
import Faq from "./pages/Faq.tsx";
import StandortLanding from "./pages/StandortLanding.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen min-w-0 overflow-x-hidden">
          <Navbar />
          <FloatingButtons />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/leistungen" element={<Leistungen />} />
            <Route path="/projekte" element={<Projekte />} />
            <Route path="/ueber-uns" element={<UeberUns />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="/anfragen" element={<Anfragen />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
            <Route path="/faq" element={<Faq />} />
            <Route path="/standort/:slug" element={<StandortLanding />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
