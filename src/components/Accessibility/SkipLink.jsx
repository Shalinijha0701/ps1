import React from 'react'

const SkipLink = () => {
  return (
    <a
      href="#main-content"
      className="absolute left-0 top-0 z-[9999] -translate-y-full bg-primary-600 px-4 py-2 text-white font-medium rounded-br-md focus:translate-y-0 transition-transform duration-200"
      aria-label="Skip to main content"
    >
      Skip to main content
    </a>
  )
}

export default SkipLink