import React from 'react'
import { motion } from 'framer-motion'

const AnimatedCounter = ({ end, duration = 2, suffix = "", className = "" }) => {
  const [count, setCount] = React.useState(0)
  const [hasStarted, setHasStarted] = React.useState(false)

  React.useEffect(() => {
    if (!hasStarted) return

    let startTime = null
    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1)

      const currentCount = Math.floor(progress * end)
      setCount(currentCount)

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [end, duration, hasStarted])

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      onViewportEnter={() => setHasStarted(true)}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={className}
    >
      {count}{suffix}
    </motion.div>
  )
}

export default AnimatedCounter