import { useEffect, useCallback } from 'react'

/**
 * Advanced performance monitoring hook with Core Web Vitals
 */
const useAdvancedPerformanceMonitor = (options = {}) => {
  const {
    enableCLS = true,
    enableFID = true,
    enableLCP = true,
    enableFCP = true,
    enableTTFB = true,
    onMetric = null,
    reportInterval = 5000
  } = options

  // Generic metric handler
  const handleMetric = useCallback((name, value, delta, id, classification) => {
    const metric = {
      name,
      value,
      delta,
      id,
      classification,
      timestamp: Date.now(),
      url: window.location.href
    }

    // Log to console in development
    if (process.env.NODE_ENV === 'development') {
      console.log(`${name}:`, metric)
    }

    // Call custom handler
    onMetric?.(metric)

    // Send to analytics in production
    if (process.env.NODE_ENV === 'production' && window.gtag) {
      window.gtag('event', name, {
        custom_parameter_name: value,
        custom_parameter_classification: classification
      })
    }
  }, [onMetric])

  // Cumulative Layout Shift (CLS)
  useEffect(() => {
    if (!enableCLS) return

    let clsValue = 0
    let clsEntries = []
    let sessionValue = 0
    let sessionEntries = []

    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (!entry.hadRecentInput) {
          const firstSessionEntry = sessionEntries[0]
          const lastSessionEntry = sessionEntries[sessionEntries.length - 1]

          if (sessionValue && entry.startTime - lastSessionEntry.startTime < 1000 &&
            entry.startTime - firstSessionEntry.startTime < 5000) {
            sessionValue += entry.value
            sessionEntries.push(entry)
          } else {
            sessionValue = entry.value
            sessionEntries = [entry]
          }

          if (sessionValue > clsValue) {
            clsValue = sessionValue
            clsEntries = [...sessionEntries]

            const classification = clsValue < 0.1 ? 'good' : clsValue < 0.25 ? 'needs-improvement' : 'poor'
            handleMetric('CLS', clsValue, entry.value, entry.id, classification)
          }
        }
      }
    })

    try {
      observer.observe({ type: 'layout-shift', buffered: true })
    } catch (e) {
      console.warn('CLS monitoring not supported')
    }

    return () => observer.disconnect()
  }, [enableCLS, handleMetric])

  // First Input Delay (FID)
  useEffect(() => {
    if (!enableFID) return

    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        const delay = entry.processingStart - entry.startTime
        const classification = delay < 100 ? 'good' : delay < 300 ? 'needs-improvement' : 'poor'
        handleMetric('FID', delay, delay, entry.id, classification)
      }
    })

    try {
      observer.observe({ type: 'first-input', buffered: true })
    } catch (e) {
      console.warn('FID monitoring not supported')
    }

    return () => observer.disconnect()
  }, [enableFID, handleMetric])

  // Largest Contentful Paint (LCP)
  useEffect(() => {
    if (!enableLCP) return

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      const lastEntry = entries[entries.length - 1]

      const classification = lastEntry.startTime < 2500 ? 'good' :
        lastEntry.startTime < 4000 ? 'needs-improvement' : 'poor'

      handleMetric('LCP', lastEntry.startTime, lastEntry.startTime, lastEntry.id, classification)
    })

    try {
      observer.observe({ type: 'largest-contentful-paint', buffered: true })
    } catch (e) {
      console.warn('LCP monitoring not supported')
    }

    return () => observer.disconnect()
  }, [enableLCP, handleMetric])

  // First Contentful Paint (FCP)
  useEffect(() => {
    if (!enableFCP) return

    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.name === 'first-contentful-paint') {
          const classification = entry.startTime < 1800 ? 'good' :
            entry.startTime < 3000 ? 'needs-improvement' : 'poor'

          handleMetric('FCP', entry.startTime, entry.startTime, entry.id, classification)
        }
      }
    })

    try {
      observer.observe({ type: 'paint', buffered: true })
    } catch (e) {
      console.warn('FCP monitoring not supported')
    }

    return () => observer.disconnect()
  }, [enableFCP, handleMetric])

  // Time to First Byte (TTFB)
  useEffect(() => {
    if (!enableTTFB) return

    const navigationEntry = performance.getEntriesByType('navigation')[0]
    if (navigationEntry) {
      const ttfb = navigationEntry.responseStart - navigationEntry.requestStart
      const classification = ttfb < 800 ? 'good' : ttfb < 1800 ? 'needs-improvement' : 'poor'

      handleMetric('TTFB', ttfb, ttfb, 'navigation', classification)
    }
  }, [enableTTFB, handleMetric])

  // Resource loading metrics
  useEffect(() => {
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.transferSize > 0) {
          const efficiency = entry.encodedBodySize / entry.transferSize
          if (efficiency < 0.8) { // Less than 80% compression
            console.warn(`Resource ${entry.name} has poor compression ratio: ${efficiency.toFixed(2)}`)
          }
        }
      }
    })

    try {
      observer.observe({ type: 'resource', buffered: true })
    } catch (e) {
      console.warn('Resource monitoring not supported')
    }

    return () => observer.disconnect()
  }, [])

  // Memory usage monitoring
  useEffect(() => {
    if (!performance.memory) return

    const checkMemory = () => {
      const memory = performance.memory
      const usagePercentage = (memory.usedJSHeapSize / memory.jsHeapSizeLimit) * 100

      if (usagePercentage > 90) {
        console.warn(`High memory usage: ${usagePercentage.toFixed(2)}%`)
        handleMetric('MemoryUsage', usagePercentage, usagePercentage, 'memory', 'warning')
      }
    }

    const interval = setInterval(checkMemory, reportInterval)
    return () => clearInterval(interval)
  }, [reportInterval, handleMetric])

  // Long task monitoring
  useEffect(() => {
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        console.warn(`Long task detected: ${entry.duration}ms at ${entry.startTime}`)
        handleMetric('LongTask', entry.duration, entry.duration, entry.id, 'warning')
      }
    })

    try {
      observer.observe({ type: 'longtask', buffered: true })
    } catch (e) {
      console.warn('Long task monitoring not supported')
    }

    return () => observer.disconnect()
  }, [handleMetric])
}

export default useAdvancedPerformanceMonitor