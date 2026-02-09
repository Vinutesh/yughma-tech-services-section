import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import VideoLoader from "./components/VideoLoader";

/* ================= UI/UX PROJECT PAGES ================= */
import YughmaAcademy from "./pages/projects/YughmaAcademy";
import YughmaAcademyApply from "./pages/projects/YughmaAcademyApply";
import YughmaAcademyMentors from "./pages/projects/YughmaAcademyMentors";
import YughmaAcademyOutcomes from "./pages/projects/YughmaAcademyOutcomes";

import YughmaFinance from "./pages/projects/YughmaFinance";
import YughmaFinanceSchedule from "./pages/projects/YughmaFinanceSchedule";
import YughmaFinanceConfirmation from "./pages/projects/YughmaFinanceConfirmation";

import YughmaEvents from "./pages/projects/YughmaEvents";
import YughmaEventsTickets from "./pages/projects/YughmaEventsTickets";
import YughmaEventsCheckout from "./pages/projects/YughmaEventsCheckout";

import YughmaMarket from "./pages/projects/YughmaMarket";
import YughmaMarketCart from "./pages/projects/YughmaMarketCart";
import YughmaMarketCatalog from "./pages/projects/YughmaMarketCatalog";
import YughmaMarketDrop from "./pages/projects/YughmaMarketDrop";
import YughmaMarketEdit from "./pages/projects/YughmaMarketEdit";
import YughmaMarketServices from "./pages/projects/YughmaMarketServices";

import YughmaTravel from "./pages/projects/YughmaTravel";
import YughmaTravelGuides from "./pages/projects/YughmaTravelGuides";
import YughmaTravelPlan from "./pages/projects/YughmaTravelPlan";
import YughmaTravelWaitlist from "./pages/projects/YughmaTravelWaitlist";

import YughmaWellness from "./pages/projects/YughmaWellness";
import YughmaWellnessCommunity from "./pages/projects/YughmaWellnessCommunity";
import YughmaWellnessCommunityReserve from "./pages/projects/YughmaWellnessCommunityReserved";
import YughmaWellnessRitual from "./pages/projects/YughmaWellnessRitual";
import YughmaWellnessRitualPlaying from "./pages/projects/YughmaWellnessRitualPlaying";

/* ================= SETUP ================= */

const queryClient = new QueryClient();

const App = () => {
  const [loading, setLoading] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <AnimatePresence>
        {loading && <VideoLoader onFinish={() => setLoading(false)} />}
      </AnimatePresence>

      {!loading && (
        <TooltipProvider>
          <Toaster />
          <Sonner />

          <BrowserRouter>
            <Routes>
              {/* ================= MAIN SITE ================= */}
              <Route path="/" element={<Index />} />

              {/* ================= UI/UX PROJECT ROUTES ================= */}
              {/* Academy */}
              <Route path="/projects/yughma-academy" element={<YughmaAcademy />} />
              <Route path="/projects/yughma-academy/apply" element={<YughmaAcademyApply />} />
              <Route path="/projects/yughma-academy/mentors" element={<YughmaAcademyMentors />} />
              <Route path="/projects/yughma-academy/outcomes" element={<YughmaAcademyOutcomes />} />

              {/* Finance */}
              <Route path="/projects/yughma-finance" element={<YughmaFinance />} />
              <Route path="/projects/yughma-finance/schedule" element={<YughmaFinanceSchedule />} />
              <Route path="/projects/yughma-finance/confirmation" element={<YughmaFinanceConfirmation />} />

              {/* Events */}
              <Route path="/projects/yughma-events" element={<YughmaEvents />} />
              <Route path="/projects/yughma-events/tickets" element={<YughmaEventsTickets />} />
              <Route path="/projects/yughma-events/checkout" element={<YughmaEventsCheckout />} />

              {/* Market */}
              <Route path="/projects/yughma-market" element={<YughmaMarket />} />
              <Route path="/projects/yughma-market/cart" element={<YughmaMarketCart />} />
              <Route path="/projects/yughma-market/catalog" element={<YughmaMarketCatalog />} />
              <Route path="/projects/yughma-market/drop" element={<YughmaMarketDrop />} />
              <Route path="/projects/yughma-market/edit" element={<YughmaMarketEdit />} />
              <Route path="/projects/yughma-market/services" element={<YughmaMarketServices />} />

              {/* Travel */}
              <Route path="/projects/yughma-travel" element={<YughmaTravel />} />
              <Route path="/projects/yughma-travel/guides" element={<YughmaTravelGuides />} />
              <Route path="/projects/yughma-travel/plan" element={<YughmaTravelPlan />} />
              <Route path="/projects/yughma-travel/waitlist" element={<YughmaTravelWaitlist />} />

              {/* Wellness */}
              <Route path="/projects/yughma-wellness" element={<YughmaWellness />} />
              <Route path="/projects/yughma-wellness/community" element={<YughmaWellnessCommunity />} />
              <Route path="/projects/yughma-wellness/community/reserve" element={<YughmaWellnessCommunityReserve />} />
              <Route path="/projects/yughma-wellness/ritual" element={<YughmaWellnessRitual />} />
              <Route path="/projects/yughma-wellness/ritual/playing" element={<YughmaWellnessRitualPlaying />} />

              {/* ================= 404 ================= */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      )}
    </QueryClientProvider>
  );
};

export default App;
