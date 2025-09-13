import React from 'react'

const TrustBadges = ({ className = "" }) => {
  const badges = [
    {
      text: "SOC 2 Compliant",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      text: "ISO 27001 Certified",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      text: "99.9% Uptime SLA",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.536-4.464a1 1 0 01-1.414 1.414 3 3 0 11-4.243-4.243 1 1 0 011.414 1.415 1 1 0 101.414 1.414 1 1 0 011.415-1.414 3 3 0 012.829 2.829z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      text: "24/7 Monitoring",
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
        </svg>
      )
    }
  ]

  return (
    <div className={`flex flex-wrap justify-center items-center gap-6 lg:gap-8 ${className}`}>
      {badges.map((badge, index) => (
        <div
          key={index}
          className="flex items-center space-x-2 text-sm font-medium text-neutral-600 bg-white px-4 py-2 rounded-full shadow-soft border border-neutral-200"
        >
          <span className="text-green-500">
            {badge.icon}
          </span>
          <span>{badge.text}</span>
        </div>
      ))}
    </div>
  )
}

export default TrustBadges