import React, { useState } from 'react'
import { useBrowser } from '../../context/BrowserContext'
import ExorcistPanel from '../BugExorcist/ExorcistPanel'

const Toolbar = () => {
  const { 
    navigateTo, 
    compatibilityModeFromHell, 
    setCompatibilityModeFromHell,
    goBack,
    goForward,
    stopLoading,
    summonCursedPage,
    canGoBack,
    canGoForward,
    isLoading,
    currentPage
  } = useBrowser()
  const [isExorcistOpen, setIsExorcistOpen] = useState(false)

  return (
    <>
      <div className="toolbar">
        <button 
          className="toolbar-button" 
          onClick={goBack}
          disabled={!canGoBack}
          title={canGoBack ? "Back to the grave" : "No previous page"}
          style={{ opacity: canGoBack ? 1 : 0.5, cursor: canGoBack ? 'pointer' : 'not-allowed' }}
        >
          ← Back
        </button>
        <button 
          className="toolbar-button" 
          onClick={goForward}
          disabled={!canGoForward}
          title={canGoForward ? "Forward into darkness" : "No next page"}
          style={{ opacity: canGoForward ? 1 : 0.5, cursor: canGoForward ? 'not-allowed' : 'pointer' }}
        >
          Forward →
        </button>
        <button 
          className="toolbar-button" 
          onClick={stopLoading}
          disabled={!isLoading}
          title={isLoading ? "Stop the madness" : "Nothing to stop"}
          style={{ opacity: isLoading ? 1 : 0.5, cursor: isLoading ? 'pointer' : 'not-allowed' }}
        >
          ✕ Stop
        </button>
        <button 
          className="toolbar-button" 
          onClick={() => navigateTo(currentPage)} 
          title="Refresh the curse"
        >
          ↻ Refresh
        </button>
        <button 
          className="toolbar-button" 
          onClick={() => navigateTo('about:blank')} 
          title="Home (if such a place exists)"
        >
          🏠 Home
        </button>
        
        <div className="toolbar-separator"></div>
        
        <button 
          className="toolbar-button summon-button" 
          onClick={summonCursedPage}
          disabled={isLoading}
          title="Summon a new cursed webpage from the void"
          style={{ opacity: isLoading ? 0.5 : 1 }}
        >
          🔮 Summon Page
        </button>
        
        <button 
          className="toolbar-button exorcist-button" 
          onClick={() => setIsExorcistOpen(true)}
          title="Summon the Bug Exorcist"
        >
          👻 Exorcist
        </button>
        
        <div className="toolbar-separator"></div>
        
        <label className="compatibility-toggle" title="Toggle Compatibility Mode from Hell">
          <input 
            type="checkbox" 
            checked={compatibilityModeFromHell}
            onChange={(e) => setCompatibilityModeFromHell(e.target.checked)}
          />
          <span className="hell-mode-label">🔥 Hell Mode</span>
        </label>
      </div>

      <ExorcistPanel 
        isOpen={isExorcistOpen} 
        onClose={() => setIsExorcistOpen(false)} 
      />
    </>
  )
}

export default Toolbar
