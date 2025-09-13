import React, { lazy, Suspense, useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import LoadingSpinner from '../Animations/LoadingSpinner'

/**
 * Enhanced lazy loading component with better error handling and retry logic
 */
const LazyComponentLoader = ({
  componentImport,
  fallback,
  errorBoundary = true,
  retryCount = 3,
  retryDelay = 1000,
  preload = false,
  ...props
}) => {
  const [Component, setComponent] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [attempts, setAttempts] = useState(0)

  // Preload component if specified
  useEffect(() => {
    if (preload) {
      componentImport()
        .then(module => {
          setComponent(() => module.default || module)
          setLoading(false)
        })
        .catch(err => {
          console.warn('Preload failed:', err)
        })
    }
  }, [preload, componentImport])

  // Load component with retry logic
  useEffect(() => {
    if (Component || !loading) return

    const loadComponent = async () => {
      try {
        const module = await componentImport()
        setComponent(() => module.default || module)
        setLoading(false)
        setError(null)
      } catch (err) {
        console.error('Component loading failed:', err)

        if (attempts < retryCount) {
          setAttempts(prev => prev + 1)
          setTimeout(() => {
            setLoading(true)
          }, retryDelay * Math.pow(2, attempts)) // Exponential backoff
        } else {
          setError(err)
          setLoading(false)
        }
      }
    }

    loadComponent()
  }, [componentImport, attempts, retryCount, retryDelay, Component, loading])

  // Default fallback component
  const DefaultFallback = () => (
    <div className="flex items-center justify-center p-8">
      <LoadingSpinner size="lg" />
    </div>
  )

  // Error component
  const ErrorComponent = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col items-center justify-center p-8 text-center"
    >
      <svg className="w-12 h-12 text-red-500 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
      </svg>
      <h3 className="text-lg font-semibold text-neutral-900 mb-2">Failed to Load Component</h3>
      <p className="text-neutral-600 mb-4">This component could not be loaded. Please try refreshing the page.</p>
      <button
        onClick={() => {
          setAttempts(0)
          setError(null)
          setLoading(true)
        }}
        className="btn-primary"
      >
        Retry
      </button>
    </motion.div>
  )

  if (error) {
    return errorBoundary ? <ErrorComponent /> : null
  }

  if (loading || !Component) {
    return fallback || <DefaultFallback />
  }

  return <Component {...props} />
}

/**
 * Higher-order component for creating lazy-loaded components
 */
export const createLazyComponent = (importFunction, options = {}) => {
  return (props) => (
    <LazyComponentLoader
      componentImport={importFunction}
      {...options}
      {...props}
    />
  )
}

/**
 * Hook for preloading components
 */
export const usePreloadComponent = (importFunction) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      importFunction().catch(err => {
        console.warn('Component preload failed:', err)
      })
    }, 100) // Small delay to not block initial render

    return () => clearTimeout(timer)
  }, [importFunction])
}

export default LazyComponentLoader