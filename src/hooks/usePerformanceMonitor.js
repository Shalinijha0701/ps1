import { useEffect } from 'react'

const usePerformanceMonitor = () => {
  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== 'production') return

    // Monitor Core Web Vitals
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        switch (entry.entryType) {
          case 'largest-contentful-paint':
            console.log('LCP:', entry.startTime)
            break
          case 'first-input':
            console.log('FID:', entry.processingStart - entry.startTime)
            break
          case 'layout-shift':
            if (!entry.hadRecentInput) {
              console.log('CLS:', entry.value)
            }
            break
        }
      }
    })

    // Observe Core Web Vitals
    try {
      observer.observe({ entryTypes: ['largest-contentful-paint', 'first-input', 'layout-shift'] })
    } catch (e) {
      // Fallback for browsers that don't support all entry types
      console.log('Performance monitoring not fully supported')
    }

    // Monitor page load time
    window.addEventListener('load', () => {
      const loadTime = performance.timing.loadEventEnd - performance.timing.navigationStart
      console.log('Page Load Time:', loadTime)
    })

    return () => {
      observer.disconnect()
    }
  }, [])
}

export default usePerformanceMonitor