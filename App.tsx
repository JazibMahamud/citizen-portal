import { Toaster } from '@/components/ui/sonner';
import { TooltipProvider } from '@/components/ui/tooltip';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './pages/Index';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Services from './pages/Services';
import Complaints from './pages/Complaints';
import Emergency from './pages/Emergency';
import TaxCalculator from './pages/TaxCalculator';
import Notices from './pages/Notices';
import Profile from './pages/Profile';
import NIDServices from './pages/NIDServices';
import DigitalServices from './pages/DigitalServices';
import CitizenHub from './pages/CitizenHub';
import NotFound from './pages/NotFound';

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/services" element={<Services />} />
          <Route path="/complaints" element={<Complaints />} />
          <Route path="/emergency" element={<Emergency />} />
          <Route path="/tax-calculator" element={<TaxCalculator />} />
          <Route path="/notices" element={<Notices />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/nid-services" element={<NIDServices />} />
          <Route path="/digital-services" element={<DigitalServices />} />
          <Route path="/citizen-hub" element={<CitizenHub />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;