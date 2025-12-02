import React, { useState, useEffect, createContext, useContext } from 'react'
import RetroDialog from './RetroDialog'
import { getRandomPopup } from '../../utils/popupGenerator'
import { useBrowser } from '../../context/BrowserContext'
import './popup-styles.css'

const PopupContext = createContext()

export const usePopups = () => {
  const context = useContext(PopupContext)
  if (!context) {
    throw new Error('usePopups must be used within PopupProvider')
  }
  return context
}

export const PopupProvider = ({ children }) => {
  const [popups, setPopups] = useState([])
  const [isEnabled, setIsEnabled] = useState(true)
  const { compatibilityModeFromHell } = useBrowser()

  // Spawn random popups at intervals
  useEffect(() => {
    if (!isEnabled) return

    const spawnPopup = () => {
      const newPopup = getRandomPopup()
      addPopup(newPopup)
      
      // Schedule next popup in exactly 1 minute
      setTimeout(spawnPopup, 60000)
    }

    // Start spawning after initial 1 minute delay
    const initialTimeout = setTimeout(() => {
      spawnPopup()
    }, 60000)

    return () => clearTimeout(initialTimeout)
  }, [isEnabled])

  const addPopup = (popup) => {
    setPopups(prev => [...prev, popup])
  }

  const removePopup = (popupId) => {
    setPopups(prev => prev.filter(p => p.id !== popupId))
  }

  const clearAllPopups = () => {
    setPopups([])
  }

  const togglePopups = () => {
    setIsEnabled(prev => !prev)
  }

  const value = {
    popups,
    addPopup,
    removePopup,
    clearAllPopups,
    togglePopups,
    isEnabled
  }

  return (
    <PopupContext.Provider value={value}>
      {children}
      <PopupManager popups={popups} onClose={removePopup} />
    </PopupContext.Provider>
  )
}

const PopupManager = ({ popups, onClose }) => {
  return (
    <div className="popup-container">
      {popups.map((popup, index) => (
        <RetroDialog
          key={popup.id}
          popup={popup}
          onClose={() => onClose(popup.id)}
          zIndex={10000 + index}
        />
      ))}
    </div>
  )
}

export default PopupManager
