import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const PerformanceDebugger = () => {
  const [metrics, setMetrics] = useState({})
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Only show in development
    if (process.env.NODE_ENV !== 'development') return

    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      entries.forEach((entry) => {
        setMetrics(prev => ({
          ...prev,
          [entry.entryType]: {
            name: entry.name,
            duration: entry.duration,
            startTime: entry.startTime
          }
        }))
      })
    })

    try {
      observer.observe({ entryTypes: ['measure', 'navigation', 'resource'] })
    } catch (e) {
      console.log('Performance observer not supported')
    }

    // Toggle visibility with Ctrl+Shift+P
    const handleKeyPress = (e) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'P') {
        setIsVisible(!isVisible)
      }
    }

    window.addEventListener('keydown', handleKeyPress)

    return () => {
      observer.disconnect()
      window.removeEventListener('keydown', handleKeyPress)
    }
  }, [isVisible])

  if (process.env.NODE_ENV !== 'development') return null

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          className=\"fixed bottom-4 right-4 z-[9999] w-80 bg-white border border-neutral-200 rounded-lg shadow-large p-4 max-h-96 overflow-auto\"
        >
          <div className=\"flex items-center justify-between mb-3\">
            <h3 className=\"font-semibold text-sm\">Performance Metrics</h3>
            <button
              onClick={() => setIsVisible(false)}
              className=\"text-neutral-500 hover:text-neutral-700\"
    >
              ✕
            </button >
          </div >

  <div className=\"space-y-2 text-xs\">
{
  Object.entries(metrics).map(([type, data]) => (
    <div key={type} className=\"border-b border-neutral-100 pb-1\">
  < div className =\"font-medium text-primary-600\">{type}</div>
  < div className =\"text-neutral-600\">
                  Duration: { data.duration?.toFixed(2) }ms
                </div >
              </div >
            ))
}
          </div >

  <div className=\"mt-3 text-xs text-neutral-500\">
            Press Ctrl + Shift + P to toggle
          </div >
        </motion.div >
      )}
    </AnimatePresence >
  )
}

export default PerformanceDebugger