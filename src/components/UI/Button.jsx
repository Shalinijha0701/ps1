import React from 'react'
import { motion } from 'framer-motion'
import LoadingSpinner from '../Animations/LoadingSpinner'

const Button = ({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  disabled = false,
  leftIcon,
  rightIcon,
  className = '',
  onClick,
  type = 'button',
  ...props
}) => {
  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed'

  const variants = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 focus:ring-primary-500 shadow-md hover:shadow-lg transform hover:-translate-y-0.5',
    secondary: 'bg-white text-primary-600 border-2 border-primary-600 hover:bg-primary-50 focus:ring-primary-500',
    outline: 'bg-transparent text-neutral-700 border border-neutral-300 hover:bg-neutral-50 focus:ring-neutral-500',
    ghost: 'bg-transparent text-neutral-700 hover:bg-neutral-100 focus:ring-neutral-500',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500 shadow-md hover:shadow-lg',
    success: 'bg-green-600 text-white hover:bg-green-700 focus:ring-green-500 shadow-md hover:shadow-lg'
  }

  const sizes = {
    sm: 'px-3 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    xl: 'px-10 py-5 text-xl'
  }

  const isDisabled = disabled || isLoading

  const handleClick = (e) => {
    if (isDisabled) {
      e.preventDefault()
      return
    }
    onClick?.(e)
  }

  return (
    <motion.button
      type={type}
      onClick={handleClick}
      disabled={isDisabled}
      whileHover={isDisabled ? {} : { scale: 1.02 }}
      whileTap={isDisabled ? {} : { scale: 0.98 }}
      className={`
        ${baseClasses}
        ${variants[variant]}
        ${sizes[size]}
        ${className}
      `}
      {...props}
    >
      {/* Left Icon */}
      {leftIcon && !isLoading && (
        <span className="mr-2 flex-shrink-0">
          {leftIcon}
        </span>
      )}

      {/* Loading Spinner */}
      {isLoading && (
        <span className="mr-2 flex-shrink-0">
          <LoadingSpinner size="sm" color={variant === 'outline' || variant === 'ghost' ? 'neutral' : 'white'} />
        </span>
      )}

      {/* Button Text */}
      <span className={isLoading ? 'opacity-70' : ''}>
        {children}
      </span>

      {/* Right Icon */}
      {rightIcon && !isLoading && (
        <span className="ml-2 flex-shrink-0">
          {rightIcon}
        </span>
      )}
    </motion.button>
  )
}

export default Button