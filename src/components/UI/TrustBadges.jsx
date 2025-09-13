import React from 'react'
import { motion } from 'framer-motion'

const TrustBadges = ({ className = "" }) => {
  const badges = [
    { text: "SOC 2 Compliant", icon: "🛡️" },
    { text: "ISO 27001", icon: "📜" },
    { text: "GDPR Ready", icon: "🔒" },
    { text: "99.9% Uptime", icon: "⚡" }
  ]

  return (
    <div className={`flex flex-wrap items-center gap-4 md:gap-6 ${className}`}>
      {badges.map((badge, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="flex items-center space-x-2 text-sm text-neutral-600"
        >
          <span className="text-lg">{badge.icon}</span>
          <span className="font-medium">{badge.text}</span>
        </motion.div>
      ))}
    </div>
  )
}

export default TrustBadges
