import React from 'react'
import { motion } from 'framer-motion'

const ErrorBoundary = ({ children, fallback }) => {
  return (
    <div className=\"min-h-screen flex items-center justify-center bg-neutral-50 px-4\">
      < motion.div
  initial = {{ opacity: 0, y: 20 }
}
animate = {{ opacity: 1, y: 0 }}
className =\"max-w-md w-full text-center\"
  >
  <div className=\"w-20 h-20 mx-auto mb-4 bg-red-100 rounded-full flex items-center justify-center\">
    < svg className =\"w-10 h-10 text-red-600\" fill=\"none\" stroke=\"currentColor\" viewBox=\"0 0 24 24\">
      < path strokeLinecap =\"round\" strokeLinejoin=\"round\" strokeWidth={2} d=\"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z\" />
          </svg >
        </div >
  <h1 className=\"text-2xl font-bold text-neutral-900 mb-4\">Something went wrong</h1>
    < p className =\"text-neutral-600 mb-6\">We're sorry, but something unexpected happened. Please try refreshing the page.</p>
      < button
onClick = {() => window.location.reload()}
className =\"btn-primary\"
  >
  Refresh Page
        </button >
      </motion.div >
    </div >
  )
}

export default ErrorBoundary