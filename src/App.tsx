import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Features from './components/Features';
import Technologies from './components/Technologies';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import LeadershipInfo from './components/technologies/LeadershipInfo';

// Import Application Pages
import Healthcare from './applications/Healthcare';
import Legal from './applications/Legal';
import HedgeFunds from './applications/HedgeFunds';
import Insurance from './applications/Insurance';
import Banking from './applications/Banking';
import Manufacturing from './applications/Manufacturing';
import Government from './applications/Government';
import Enterprise from './applications/Enterprise';
import GeopoliticalAnalysts from './applications/GeopoliticalAnalysts';
import CriticalInfrastructure from './applications/CriticalInfrastructure';
import Investors from './applications/Investors';
import AdvancedLabs from './applications/AdvancedLabs';
import Legislature from './applications/Legislature';
import IntelligenceAgencies from './applications/IntelligenceAgencies';
import HedgeFundsVC from './applications/HedgeFundsVC';
import OpioidCrisis from './applications/OpioidCrisis';
import Myocarditis from './applications/Myocarditis';
import SyntheticBiology from './applications/SyntheticBiology';
import Disinformation from './applications/Disinformation';
import Litigation from './applications/Litigation';
import FDAPrograms from './applications/FDAPrograms';
import CarbonCapture from './applications/CarbonCapture';
import ConflictZones from './applications/ConflictZones';
import Founder from './pages/Founder';
import TechnologiesPage from './pages/Technologies';
import ErrorPageNotFound from './components/ErrorPageNotFound';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <Helmet>
          <title>
            ARCS Scientific - Advanced Regulatory Compliance Systems
          </title>
          <meta
            name="description"
            content="ARCS Scientific pioneers breakthrough research in cognitive systems and AI, developing innovative solutions for regulatory compliance through quantum precision and real-time intelligence."
          />
          <meta
            name="keywords"
            content="regulatory compliance, AI technology, quantum computing, real-time intelligence, adaptive systems, cognitive computing, compliance automation"
          />
          <meta
            property="og:title"
            content="ARCS Scientific - Advanced Regulatory Compliance Systems"
          />
          <meta
            property="og:description"
            content="Pioneering Adaptive Compliance through Quantum Precision and Real-Time Intelligence"
          />
          <meta property="og:type" content="website" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta
            name="twitter:title"
            content="ARCS Scientific - Advanced Regulatory Compliance Systems"
          />
          <meta
            name="twitter:description"
            content="Pioneering breakthrough research in cognitive systems and AI for regulatory compliance"
          />
          <link rel="canonical" href="https://www.arcsscientific.com" />
        </Helmet>

        <Navbar />
        <Routes>
          {/* Main Site Routes */}
          <Route
            path="/"
            element={
              <main>
                <Hero />
                <About />
                <LeadershipInfo />
                <Features />
                <Technologies />
                <Contact />
              </main>
            }
          />

          {/* Technologies Page Route */}
          <Route path="/technologies" element={<TechnologiesPage />} />

          {/* Application Routes */}
          <Route path="/healthcare" element={<Healthcare />} />
          <Route path="/legal" element={<Legal />} />
          <Route path="/hedge-funds" element={<HedgeFunds />} />
          <Route path="/insurance" element={<Insurance />} />
          <Route path="/banking" element={<Banking />} />
          <Route path="/manufacturing" element={<Manufacturing />} />
          <Route path="/government" element={<Government />} />
          <Route path="/enterprise" element={<Enterprise />} />
          <Route
            path="/geopolitical-analysts"
            element={<GeopoliticalAnalysts />}
          />
          <Route
            path="/critical-infrastructure"
            element={<CriticalInfrastructure />}
          />
          <Route path="/investors" element={<Investors />} />
          <Route path="/advanced-labs" element={<AdvancedLabs />} />
          <Route path="/legislature" element={<Legislature />} />
          <Route
            path="/intelligence-agencies"
            element={<IntelligenceAgencies />}
          />
          <Route path="/hedge-funds-vc" element={<HedgeFundsVC />} />
          <Route path="/opioid-crisis" element={<OpioidCrisis />} />
          <Route path="/myocarditis" element={<Myocarditis />} />
          <Route path="/synthetic-biology" element={<SyntheticBiology />} />
          <Route path="/disinformation" element={<Disinformation />} />
          <Route path="/litigation" element={<Litigation />} />
          <Route path="/fda-programs" element={<FDAPrograms />} />
          <Route path="/carbon-capture" element={<CarbonCapture />} />
          <Route path="/conflict-zones" element={<ConflictZones />} />
          <Route path="/founder" element={<Founder />} />
          <Route path="*" element={<ErrorPageNotFound />} />
        </Routes>
        <Footer />
        <ScrollToTop />
      </div>
    </Router>
  );
}

export default App;
