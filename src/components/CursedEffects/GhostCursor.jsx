import React, { useEffect, useState, useRef } from 'react'
import { useBrowser } from '../../context/BrowserContext'
import './ghost-cursor.css'

const GhostCursor = () => {
  const { compatibilityModeFromHell } = useBrowser()
  const [ghosts, setGhosts] = useState([])
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 })
  const ghostIdRef = useRef(0)
  const lastUpdateRef = useRef(Date.now())

  useEffect(() => {
    let animationFrameId

    const handleMouseMove = (e) => {
      const now = Date.now()
      const timeSinceLastUpdate = now - lastUpdateRef.current

      // Throttle updates for performance
      if (timeSinceLastUpdate < 50) return

      lastUpdateRef.current = now
      setMousePos({ x: e.clientX, y: e.clientY })

      // Create ghost trail
      const newGhost = {
        id: ghostIdRef.current++,
        x: e.clientX,
        y: e.clientY,
        timestamp: now
      }

      setGhosts(prev => {
        // Keep only recent ghosts (last 300ms)
        const filtered = prev.filter(g => now - g.timestamp < 300)
        return [...filtered, newGhost].slice(-5) // Max 5 ghosts
      })
    }

    window.addEventListener('mousemove', handleMouseMove)

    // Cleanup old ghosts periodically
    const cleanupInterval = setInterval(() => {
      const now = Date.now()
      setGhosts(prev => prev.filter(g => now - g.timestamp < 300))
    }, 100)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      clearInterval(cleanupInterval)
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [])

  // Calculate jitter based on hell mode
  const getJitter = () => {
    if (!compatibilityModeFromHell) return 0
    return (Math.random() - 0.5) * 4 // ±2px jitter in hell mode
  }

  return (
    <div className="ghost-cursor-container">
      {/* Main ghost cursor with lag */}
      <div
        className={`ghost-cursor main ${compatibilityModeFromHell ? 'hell-mode' : ''}`}
        style={{
          left: `${mousePos.x + getJitter()}px`,
          top: `${mousePos.y + getJitter()}px`
        }}
      >
        👻
      </div>

      {/* Trail ghosts */}
      {ghosts.map((ghost, index) => {
        const age = Date.now() - ghost.timestamp
        const opacity = Math.max(0, 1 - age / 300) * 0.6
        const scale = 1 - (index * 0.15)

        return (
          <div
            key={ghost.id}
            className="ghost-cursor trail"
            style={{
              left: `${ghost.x}px`,
              top: `${ghost.y}px`,
              opacity,
              transform: `translate(-50%, -50%) scale(${scale})`
            }}
          >
            👻
          </div>
        )
      })}
    </div>
  )
}

export default GhostCursor
