import React, { useEffect, useRef } from 'react'

export const Announcer = ({ message, priority = 'polite' }) => {
  const announcerRef = useRef(null)

  useEffect(() => {
    if (message && announcerRef.current) {
      announcerRef.current.textContent = ''
      setTimeout(() => {
        announcerRef.current.textContent = message
      }, 100)
    }
  }, [message])

  return (
    <div
      ref={announcerRef}
      aria-live={priority}
      aria-atomic="true"
      className="sr-only"
    />
  )
}

export const AccessibleButton = ({
  children,
  onClick,
  disabled = false,
  ariaLabel,
  ariaDescribedBy,
  className = '',
  variant = 'primary',
  ...props
}) => {
  const handleClick = (e) => {
    if (disabled) return
    onClick?.(e)
  }

  const handleKeyDown = (e) => {
    if ((e.key === 'Enter' || e.key === ' ') && !disabled) {
      e.preventDefault()
      onClick?.(e)
    }
  }

  return (
    <button
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      disabled={disabled}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={`btn btn-${variant} focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

export const AccessibleLink = ({
  children,
  href,
  external = false,
  ariaLabel,
  className = '',
  ...props
}) => {
  return (
    <a
      href={href}
      target={external ? '_blank' : undefined}
      rel={external ? 'noopener noreferrer' : undefined}
      aria-label={ariaLabel}
      className={`focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 rounded ${className}`}
      {...props}
    >
      {children}
      {external && (
        <span className="sr-only"> (opens in new window)</span>
      )}
    </a>
  )
}