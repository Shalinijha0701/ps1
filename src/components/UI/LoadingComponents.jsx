import React from 'react'
import { motion } from 'framer-motion'

const ProgressBar = ({ progress = 0, className = '', showPercentage = true }) => {
  return (
    <div className={`w-full ${className}`}>
      <div className=\"flex justify-between items-center mb-2\">
      <span className=\"text-sm font-medium text-neutral-700\">Loading...</span>
        {
    showPercentage && (
      <span className=\"text-sm text-neutral-500\">{Math.round(progress)}%</span>
        )}
      </div >
  <div className=\"w-full bg-neutral-200 rounded-full h-2\">
    < motion.div
className =\"bg-primary-600 h-2 rounded-full\"
initial = {{ width: 0 }}
animate = {{ width: `${progress}%` }}
transition = {{ duration: 0.3, ease: 'easeOut' }}
        />
      </div >
    </div >
  )
}

const Skeleton = ({ className = '', lines = 1, height = 'h-4' }) => {
  return (
    <div className={`animate-pulse ${className}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className={`${height} bg-neutral-200 rounded ${i < lines - 1 ? 'mb-2' : ''}`}
        />
      ))}
    </div>
  )
}

const LoadingState = ({ type = 'spinner', message = 'Loading...', className = '' }) => {
  if (type === 'skeleton') {
    return <Skeleton className={className} />
  }

  return (
    <div className={`flex flex-col items-center justify-center p-8 ${className}`}>
      <div className=\"w-8 h-8 border-2 border-primary-200 border-t-primary-600 rounded-full animate-spin mb-4\" />
      <p className=\"text-neutral-600\">{message}</p>
    </div >
  )
}

export { ProgressBar, Skeleton, LoadingState }