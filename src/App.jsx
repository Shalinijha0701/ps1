import React, { Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

// Layout components (loaded immediately)
import Navigation from './components/Layout/Navigation'
import Footer from './components/Layout/Footer'

// Lazy load page components
const LandingPage = React.lazy(() => import('./pages/LandingPage'))
const EndpointSecurity = React.lazy(() => import('./pages/EndpointSecurity'))
const NetworkSecurity = React.lazy(() => import('./pages/NetworkSecurity'))
const CloudSecurity = React.lazy(() => import('./pages/CloudSecurity'))
const ComplianceVAPT = React.lazy(() => import('./pages/ComplianceVAPT'))
const AboutUs = React.lazy(() => import('./pages/AboutUs'))
const DemoTrial = React.lazy(() => import('./pages/DemoTrial'))

// Utility components (loaded immediately)
import SEOHead from './components/SEO/SEOHead'
import ScrollToTop from './components/Utils/ScrollToTop'
import SkipLink from './components/Accessibility/SkipLink'
import LoadingSpinner from './components/Animations/LoadingSpinner'

// Performance hooks
import useAdvancedPerformanceMonitor from './hooks/useAdvancedPerformanceMonitor'
import { useRoutePreloader, useDNSPrefetch } from './hooks/useResourcePreloader'

// Loading fallback component
const PageLoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-neutral-50">
    <div className="text-center">
      <LoadingSpinner size="lg" />
      <p className="mt-4 text-neutral-600">Loading page...</p>
    </div>
  </div>
)

function App() {
  // Performance monitoring
  useAdvancedPerformanceMonitor({
    onMetric: (metric) => {
      // Send metrics to analytics service in production
      if (process.env.NODE_ENV === 'production') {
        // Add your analytics integration here
        console.log('Performance metric:', metric)
      }
    }
  })

  // Route preloading
  const routes = {
    '/endpoint-security': () => import('./pages/EndpointSecurity'),
    '/network-security': () => import('./pages/NetworkSecurity'),
    '/cloud-security': () => import('./pages/CloudSecurity'),
    '/compliance-vapt': () => import('./pages/ComplianceVAPT'),
    '/about': () => import('./pages/AboutUs'),
    '/demo': () => import('./pages/DemoTrial')
  }

  useRoutePreloader(routes)

  // DNS prefetch for external resources
  useDNSPrefetch([
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com'
  ])

  return (
    <Router>
      <div className="min-h-screen bg-neutral-50">
        <SkipLink />
        <SEOHead />
        <ScrollToTop />
        <Navigation />

        <main id="main-content" className="flex-1" tabIndex="-1">
          <Suspense fallback={<PageLoadingFallback />}>
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
          </Suspense>
        </main>

        <Footer />
      </div>
    </Router>
  )
}

export default App