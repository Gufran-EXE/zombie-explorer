import React, { useEffect, useState } from 'react'
import { useBrowser } from '../../context/BrowserContext'
import './screen-glitch.css'

const ScreenGlitch = () => {
  const { compatibilityModeFromHell } = useBrowser()
  const [isGlitching, setIsGlitching] = useState(false)

  useEffect(() => {
    if (!compatibilityModeFromHell) return

    const triggerGlitch = () => {
      setIsGlitching(true)
      setTimeout(() => setIsGlitching(false), 200)

      // Schedule next glitch (every 5-15 seconds in Hell Mode)
      const nextGlitch = Math.random() * 10000 + 5000
      setTimeout(triggerGlitch, nextGlitch)
    }

    // Start glitching after initial delay
    const initialTimeout = setTimeout(triggerGlitch, 3000)

    return () => clearTimeout(initialTimeout)
  }, [compatibilityModeFromHell])

  if (!compatibilityModeFromHell) return null

  return (
    <div className={`screen-glitch-overlay ${isGlitching ? 'active' : ''}`}>
      <div className="glitch-scanlines"></div>
      <div className="glitch-rgb-shift"></div>
    </div>
  )
}

export default ScreenGlitch
