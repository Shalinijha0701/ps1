import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Toast = ({ type = 'info', title, message, isVisible = false, onClose }) => {
  const styles = {
    success: { bg: 'bg-green-50 border-green-200', icon: 'text-green-600' },
    error: { bg: 'bg-red-50 border-red-200', icon: 'text-red-600' },
    warning: { bg: 'bg-yellow-50 border-yellow-200', icon: 'text-yellow-600' },
    info: { bg: 'bg-blue-50 border-blue-200', icon: 'text-blue-600' }
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className=\"fixed top-4 right-4 z-50 max-w-md w-full\"
        >
      <div className={`p-4 rounded-lg border shadow-lg ${styles[type].bg}`}>
        <div className=\"flex items-start\">
        <div className=\"flex-1\">
        {title && <h4 className=\"text-sm font-medium mb-1\">{title}</h4>}
      <p className=\"text-sm text-neutral-700\">{message}</p>
              </div >
  <button onClick={onClose} className=\"ml-3 text-neutral-400 hover:text-neutral-600\">
                ✕
              </button >
            </div >
          </div >
        </motion.div >
      )}
    </AnimatePresence >
  )
}

export default Toast