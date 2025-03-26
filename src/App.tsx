import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from './components/ui/toaster';
import { Toaster as Sonner } from "@/components/ui/sonner";
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SkipNavigation from './components/SkipNavigation';
import LoadingSpinner from './components/LoadingSpinner';

// Lazy load route components for better performance
const Index = lazy(() => import('./pages/Index'));
const Careers = lazy(() => import('./pages/Careers'));
const NotFound = lazy(() => import('./pages/NotFound'));

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: false,
    },
  },
});

const App = () => {
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <SkipNavigation />
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main id="main-content" className="flex-grow">
              <Suspense fallback={<LoadingSpinner />}>
                <Routes>
                  <Route path="/" element={<Index />} />
                  <Route path="/careers" element={<Careers />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </main>
            <Footer />
          </div>
          <Toaster />
          <Sonner />
          <FloatingWhatsApp />
        </TooltipProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
};

export default App;
