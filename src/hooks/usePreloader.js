import { useEffect, useState } from 'react'

const usePreloader = (duration = 2000) => {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, duration)

    return () => clearTimeout(timer)
  }, [duration])

  return { isLoading, setIsLoading }
}

export default usePreloader