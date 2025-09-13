import { useEffect, useCallback, useRef } from 'react'

/**
 * Advanced resource preloading hook
 */
const useResourcePreloader = (resources = [], options = {}) => {
  const {
    priority = 'low',
    crossOrigin = 'anonymous',
    onLoad = null,
    onError = null,
    prefetchOnIdle = true
  } = options

  const preloadedResources = useRef(new Set())
  const prefetchQueue = useRef([])

  // Preload critical resources immediately
  const preloadResource = useCallback((resource) => {
    if (preloadedResources.current.has(resource.href)) return

    const link = document.createElement('link')
    link.rel = resource.rel || 'preload'
    link.href = resource.href
    link.as = resource.as || 'fetch'

    if (resource.type) link.type = resource.type
    if (resource.crossOrigin !== false) link.crossOrigin = crossOrigin
    if (resource.integrity) link.integrity = resource.integrity

    link.onload = () => {
      preloadedResources.current.add(resource.href)
      onLoad?.(resource)
    }

    link.onerror = () => {
      console.warn(`Failed to preload resource: ${resource.href}`)
      onError?.(resource)
    }

    document.head.appendChild(link)
  }, [crossOrigin, onLoad, onError])

  // Prefetch non-critical resources when browser is idle
  const prefetchResource = useCallback((resource) => {
    if (preloadedResources.current.has(resource.href)) return

    const link = document.createElement('link')
    link.rel = 'prefetch'
    link.href = resource.href

    if (resource.crossOrigin !== false) link.crossOrigin = crossOrigin
    if (resource.integrity) link.integrity = resource.integrity

    link.onload = () => {
      preloadedResources.current.add(resource.href)
      onLoad?.(resource)
    }

    link.onerror = () => {
      console.warn(`Failed to prefetch resource: ${resource.href}`)
      onError?.(resource)
    }

    document.head.appendChild(link)
  }, [crossOrigin, onLoad, onError])

  // Process prefetch queue when browser is idle
  const processPrefetchQueue = useCallback(() => {
    if (!window.requestIdleCallback) {
      // Fallback for browsers without requestIdleCallback
      setTimeout(() => {
        prefetchQueue.current.forEach(prefetchResource)
        prefetchQueue.current = []
      }, 0)
      return
    }

    window.requestIdleCallback((deadline) => {
      while (deadline.timeRemaining() > 0 && prefetchQueue.current.length > 0) {
        const resource = prefetchQueue.current.shift()
        prefetchResource(resource)
      }

      // If there are still resources to prefetch, schedule another idle callback
      if (prefetchQueue.current.length > 0) {
        processPrefetchQueue()
      }
    })
  }, [prefetchResource])

  // Main effect to handle resource loading
  useEffect(() => {
    resources.forEach(resource => {
      if (resource.priority === 'high' || priority === 'high') {
        preloadResource(resource)
      } else if (prefetchOnIdle) {
        prefetchQueue.current.push(resource)
      } else {
        prefetchResource(resource)
      }
    })

    if (prefetchQueue.current.length > 0 && prefetchOnIdle) {
      processPrefetchQueue()
    }

    return () => {
      // Cleanup: remove preload links on unmount
      const links = document.querySelectorAll('link[rel="preload"], link[rel="prefetch"]')
      links.forEach(link => {
        if (resources.some(r => r.href === link.href)) {
          document.head.removeChild(link)
        }
      })
    }
  }, [resources, priority, preloadResource, prefetchResource, processPrefetchQueue, prefetchOnIdle])

  return {
    preloadResource,
    prefetchResource,
    preloadedResources: preloadedResources.current
  }
}

/**
 * Hook for preloading critical route components
 */
export const useRoutePreloader = (routes) => {
  useEffect(() => {
    const currentPath = window.location.pathname

    // Preload likely next routes based on current route
    const getNextRoutes = (path) => {
      const routePreloadMap = {
        '/': ['/endpoint-security', '/network-security', '/demo'],
        '/endpoint-security': ['/network-security', '/cloud-security', '/demo'],
        '/network-security': ['/cloud-security', '/compliance-vapt', '/demo'],
        '/cloud-security': ['/compliance-vapt', '/endpoint-security', '/demo'],
        '/compliance-vapt': ['/about', '/demo'],
        '/about': ['/demo'],
        '/demo': ['/']
      }

      return routePreloadMap[path] || []
    }

    const nextRoutes = getNextRoutes(currentPath)

    // Use requestIdleCallback to preload components
    if (window.requestIdleCallback) {
      window.requestIdleCallback(() => {
        nextRoutes.forEach(route => {
          const routeComponent = routes[route]
          if (routeComponent && typeof routeComponent === 'function') {
            routeComponent().catch(err => {
              console.warn(`Failed to preload route ${route}:`, err)
            })
          }
        })
      })
    }
  }, [routes])
}

/**
 * DNS prefetch for external domains
 */
export const useDNSPrefetch = (domains) => {
  useEffect(() => {
    domains.forEach(domain => {
      const link = document.createElement('link')
      link.rel = 'dns-prefetch'
      link.href = domain
      document.head.appendChild(link)
    })

    return () => {
      // Cleanup
      domains.forEach(domain => {
        const link = document.querySelector(`link[rel="dns-prefetch"][href="${domain}"]`)
        if (link) {
          document.head.removeChild(link)
        }
      })
    }
  }, [domains])
}

export default useResourcePreloader