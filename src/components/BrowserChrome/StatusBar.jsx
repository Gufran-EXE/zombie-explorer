import React from 'react'
import { useBrowser } from '../../context/BrowserContext'

const StatusBar = () => {
  const { statusMessage, compatibilityModeFromHell } = useBrowser()

  return (
    <div className="status-bar">
      <div className="status-section">
        <span className="status-icon">👻</span>
        <span className="status-text">{statusMessage}</span>
      </div>
      <div className="status-section">
        {compatibilityModeFromHell && (
          <span className="hell-indicator" title="Compatibility Mode from Hell is active">
            🔥 CURSED
          </span>
        )}
      </div>
      <div className="status-section">
        <span className="zone-text">Undead Zone</span>
      </div>
    </div>
  )
}

export default StatusBar
