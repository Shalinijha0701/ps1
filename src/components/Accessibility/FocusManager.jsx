import React, { useEffect, useRef } from 'react'

const FocusManager = ({ children, trapFocus = false, returnFocus = true, className = '' }) => {
  const containerRef = useRef(null)
  const previousActiveElement = useRef(null)

  useEffect(() => {
    previousActiveElement.current = document.activeElement
    return () => {
      if (returnFocus && previousActiveElement.current) {
        previousActiveElement.current.focus()
      }
    }
  }, [returnFocus])

  useEffect(() => {
    if (!trapFocus) return

    const handleKeyDown = (e) => {
      if (e.key !== 'Tab') return

      const focusableElements = containerRef.current?.querySelectorAll(
        'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
      )

      if (!focusableElements?.length) return

      const firstElement = focusableElements[0]
      const lastElement = focusableElements[focusableElements.length - 1]

      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault()
        lastElement.focus()
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault()
        firstElement.focus()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [trapFocus])

  return (
    <div ref={containerRef} className={className} role={trapFocus ? 'dialog' : undefined}>
      {children}
    </div>
  )
}

export default FocusManager