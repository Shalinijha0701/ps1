import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

// Layout components
import Navigation from './components/Layout/Navigation'
import Footer from './components/Layout/Footer'

// Page components
import LandingPage from './pages/LandingPage'
import EndpointSecurity from './pages/EndpointSecurity'
import NetworkSecurity from './pages/NetworkSecurity'
import CloudSecurity from './pages/CloudSecurity'
import ComplianceVAPT from './pages/ComplianceVAPT'
import AboutUs from './pages/AboutUs'
import DemoTrial from './pages/DemoTrial'

// SEO Head component
import SEOHead from './components/SEO/SEOHead'

// Scroll to top component
import ScrollToTop from './components/Utils/ScrollToTop'

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-neutral-50">
        <SEOHead />
        <ScrollToTop />
        <Navigation />

        <main className="flex-1">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<LandingPage />} />
              <Route path="/endpoint-security" element={<EndpointSecurity />} />
              <Route path="/network-security" element={<NetworkSecurity />} />
              <Route path="/cloud-security" element={<CloudSecurity />} />
              <Route path="/compliance-vapt" element={<ComplianceVAPT />} />
              <Route path="/about" element={<AboutUs />} />
              <Route path="/demo" element={<DemoTrial />} />
            </Routes>
          </AnimatePresence>
        </main>

        <Footer />
      </div>
    </Router>
  )
}

export default App