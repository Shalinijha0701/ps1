import React, { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import VisuallyHidden from '../Accessibility/VisuallyHidden'
import FocusManager from '../Accessibility/FocusManager'

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [showSolutions, setShowSolutions] = useState(false)
  const [focusedSolutionIndex, setFocusedSolutionIndex] = useState(-1)
  const location = useLocation()
  const navRef = useRef(null)
  const mobileMenuRef = useRef(null)
  const solutionsRef = useRef(null)
  const solutionsTimeoutRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
    setShowSolutions(false)
  }, [location])

  // Enhanced escape key handling and focus management
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        if (showSolutions) {
          setShowSolutions(false)
          setFocusedSolutionIndex(-1)
        } else if (isOpen) {
          setIsOpen(false)
        }
      }
    }

    const handleClickOutside = (e) => {
      if (solutionsRef.current && !solutionsRef.current.contains(e.target)) {
        setShowSolutions(false)
        setFocusedSolutionIndex(-1)
      }
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(e.target) &&
        !e.target.closest('[aria-label="Open mobile menu"]')) {
        setIsOpen(false)
      }
    }

    if (isOpen || showSolutions) {
      document.addEventListener('keydown', handleEscape)
      document.addEventListener('click', handleClickOutside)
      if (isOpen) {
        document.body.style.overflow = 'hidden'
      }
    } else {
      document.body.style.overflow = ''
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.removeEventListener('click', handleClickOutside)
      document.body.style.overflow = ''
    }
  }, [isOpen, showSolutions])

  const solutionsItems = [
    { label: 'Endpoint Security', url: '/endpoint-security', description: 'Next-gen antimalware and device protection' },
    { label: 'Network Security', url: '/network-security', description: 'Zero-trust access and web filtering' },
    { label: 'Cloud Security', url: '/cloud-security', description: 'App protection and posture management' },
    { label: 'Compliance & VAPT', url: '/compliance-vapt', description: 'Automated compliance and testing' }
  ]

  // Enhanced keyboard navigation for solutions dropdown
  const handleSolutionsKeyDown = (e) => {
    if (!showSolutions) return

    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault()
        setFocusedSolutionIndex(prev =>
          prev < solutionsItems.length - 1 ? prev + 1 : 0
        )
        break
      case 'ArrowUp':
        e.preventDefault()
        setFocusedSolutionIndex(prev =>
          prev > 0 ? prev - 1 : solutionsItems.length - 1
        )
        break
      case 'Enter':
      case ' ':
        e.preventDefault()
        if (focusedSolutionIndex >= 0) {
          const item = solutionsItems[focusedSolutionIndex]
          window.location.href = item.url
        }
        break
      case 'Escape':
        setShowSolutions(false)
        setFocusedSolutionIndex(-1)
        break
    }
  }

  // Handle mouse and keyboard interactions for solutions
  const handleSolutionsToggle = (show) => {
    clearTimeout(solutionsTimeoutRef.current)
    if (show) {
      setShowSolutions(true)
      setFocusedSolutionIndex(-1)
    } else {
      solutionsTimeoutRef.current = setTimeout(() => {
        setShowSolutions(false)
        setFocusedSolutionIndex(-1)
      }, 150) // Small delay for better UX
    }
  }

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-white/95 backdrop-blur-md shadow-medium'
        : 'bg-transparent'
        }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center space-x-3 group"
            aria-label="Osto.one homepage"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-secondary-500 rounded-lg flex items-center justify-center group-hover:scale-105 transition-transform duration-200">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" />
                <path d="M12 8L12.5 10.5L15 11L12.5 11.5L12 14L11.5 11.5L9 11L11.5 10.5L12 8Z" />
              </svg>
            </div>
            <span className="text-2xl font-bold text-neutral-900 font-heading">
              Osto.one
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Solutions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setShowSolutions(true)}
              onMouseLeave={() => setShowSolutions(false)}
            >
              <button className="flex items-center space-x-1 text-neutral-700 hover:text-primary-600 transition-colors duration-200 font-medium">
                <span>Solutions</span>
                <svg className={`w-4 h-4 transform transition-transform duration-200 ${showSolutions ? 'rotate-180' : ''}`} fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>

              <AnimatePresence>
                {showSolutions && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-0 mt-2 w-80 bg-white rounded-xl shadow-large border border-neutral-200 overflow-hidden"
                  >
                    <div className="p-4">
                      {solutionsItems.map((item, index) => (
                        <Link
                          key={item.url}
                          to={item.url}
                          className="block p-3 rounded-lg hover:bg-neutral-50 transition-colors duration-200 group"
                        >
                          <div className="font-medium text-neutral-900 group-hover:text-primary-600 transition-colors duration-200">
                            {item.label}
                          </div>
                          <div className="text-sm text-neutral-600 mt-1">
                            {item.description}
                          </div>
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/about"
              className="text-neutral-700 hover:text-primary-600 transition-colors duration-200 font-medium"
            >
              About
            </Link>
            <Link
              to="/demo"
              className="text-neutral-700 hover:text-primary-600 transition-colors duration-200 font-medium"
            >
              Demo
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <Link to="/demo" className="btn-primary">
              Get Protected
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg text-neutral-700 hover:bg-neutral-100 transition-colors duration-200"
            aria-label={isOpen ? 'Close mobile menu' : 'Open mobile menu'}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              ref={mobileMenuRef}
              id="mobile-menu"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden bg-white border-t border-neutral-200 shadow-large"
              role="menu"
              aria-label="Mobile navigation menu"
            >
              <div className="px-4 py-6 space-y-4">
                {/* Mobile Solutions */}
                <div className="space-y-2">
                  <div className="font-semibold text-neutral-900 text-sm uppercase tracking-wider">
                    Solutions
                  </div>
                  {solutionsItems.map((item) => (
                    <Link
                      key={item.url}
                      to={item.url}
                      className="block pl-4 py-2 text-neutral-700 hover:text-primary-600 transition-colors duration-200"
                      role="menuitem"
                    >
                      {item.label}
                      <VisuallyHidden>{item.description}</VisuallyHidden>
                    </Link>
                  ))}
                </div>

                <Link
                  to="/about"
                  className="block py-2 text-neutral-700 hover:text-primary-600 transition-colors duration-200 font-medium"
                  role="menuitem"
                >
                  About
                </Link>
                <Link
                  to="/demo"
                  className="block py-2 text-neutral-700 hover:text-primary-600 transition-colors duration-200 font-medium"
                  role="menuitem"
                >
                  Demo
                </Link>

                <div className="pt-4 border-t border-neutral-200">
                  <Link to="/demo" className="btn-primary w-full">
                    Get Protected
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

export default Navigation