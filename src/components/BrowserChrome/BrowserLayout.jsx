import React from 'react'
import Toolbar from './Toolbar'
import AddressBar from './AddressBar'
import BookmarksBar from './BookmarksBar'
import LoadingBar from './LoadingBar'
import StatusBar from './StatusBar'
import WebPage from '../ContentArea/WebPage'
import GhostCursor from '../CursedEffects/GhostCursor'
import ScreenGlitch from '../CursedEffects/ScreenGlitch'
import HauntedEvents from '../CursedEffects/HauntedEvents'
import ZombieChatWindow from '../ZombieChat/ZombieChatWindow'
import ZombieChatToggleButton from '../ZombieChat/ZombieChatToggleButton'
import { useBrowser } from '../../context/BrowserContext'

const BrowserLayout = () => {
  const { isLoading, compatibilityModeFromHell } = useBrowser()

  return (
    <div className={`zombie-browser ${compatibilityModeFromHell ? 'hell-mode-active' : ''}`}>
      {/* Ghost Cursor Effect */}
      <GhostCursor />
      
      {/* Screen Glitch Effect (Hell Mode only) */}
      <ScreenGlitch />
      
      {/* Random Haunted Events */}
      <HauntedEvents />

      {/* Title Bar */}
      <div className="title-bar">
        <div className="title-bar-text">
          <img src="/ie6-icon.png" alt="IE6" className="title-icon" onError={(e) => e.target.style.display = 'none'} />
          Internet Explorer 6 - Zombie Edition
        </div>
        <div className="title-bar-controls">
          <button className="title-button" title="Minimize (if you dare)">_</button>
          <button className="title-button" title="Maximize the horror">□</button>
          <button className="title-button close" title="You cannot escape">✕</button>
        </div>
      </div>

      {/* Menu Bar */}
      <div className="menu-bar">
        <span className="menu-item">File</span>
        <span className="menu-item">Edit</span>
        <span className="menu-item">View</span>
        <span className="menu-item">Favorites</span>
        <span className="menu-item">Tools</span>
        <span className="menu-item">Help</span>
      </div>

      {/* Toolbar */}
      <Toolbar />

      {/* Address Bar */}
      <AddressBar />

      {/* Bookmarks Bar */}
      <BookmarksBar />

      {/* Loading Bar */}
      {isLoading && <LoadingBar />}

      {/* Content Area */}
      <div className="content-area">
        <WebPage />
      </div>

      {/* Status Bar */}
      <StatusBar />
      
      {/* Zombie Chat */}
      <ZombieChatWindow />
      <ZombieChatToggleButton />
    </div>
  )
}

export default BrowserLayout
