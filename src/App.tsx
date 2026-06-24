import { lazy, Suspense } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navbar from "@/components/Navbar";
import FloatingButtons from "@/components/FloatingButtons";
import Index from "./pages/Index.tsx";
import CookieBanner from "@/components/CookieBanner";
import MobileStickyCta from "@/components/MobileStickyCta";

const Impressum = lazy(() => import("./pages/Impressum.tsx"));
const Leistungen = lazy(() => import("./pages/Leistungen.tsx"));
const Projekte = lazy(() => import("./pages/Projekte.tsx"));
const UeberUns = lazy(() => import("./pages/UeberUns.tsx"));
const Kontakt = lazy(() => import("./pages/Kontakt.tsx"));
const Anfragen = lazy(() => import("./pages/Anfragen.tsx"));
const Datenschutz = lazy(() => import("./pages/Datenschutz.tsx"));
const NotFound = lazy(() => import("./pages/NotFound.tsx"));
const Faq = lazy(() => import("./pages/Faq.tsx"));
const StandortLanding = lazy(() => import("./pages/StandortLanding.tsx"));

const queryClient = new QueryClient();

function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.22, ease: "easeOut" }}
        className="min-h-screen min-w-0 overflow-x-hidden pb-24 md:pb-0"
      >
        <Suspense fallback={<div className="min-h-screen" aria-hidden="true" />}>
          <Routes location={location}>
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
        </Suspense>
      </motion.div>
    </AnimatePresence>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Navbar />
        <FloatingButtons />
        <MobileStickyCta />
        <CookieBanner />
        <AnimatedRoutes />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
