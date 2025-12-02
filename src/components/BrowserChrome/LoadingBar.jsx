import React from 'react'
import { useBrowser } from '../../context/BrowserContext'

const LoadingBar = () => {
  const { loadingProgress, statusMessage } = useBrowser()

  return (
    <div className="loading-bar-container">
      <div className="loading-bar">
        <div className="loading-bar-fill" style={{ width: `${loadingProgress}%` }}>
          <div className="loading-bar-shine"></div>
        </div>
      </div>
      <span className="loading-text">{statusMessage} {loadingProgress}%</span>
    </div>
  )
}

export default LoadingBar
