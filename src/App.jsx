import React, { useEffect } from 'react'
import { BrowserProvider, useBrowser } from './context/BrowserContext'
import { PopupProvider } from './components/Popups/PopupManager'
import BrowserLayout from './components/BrowserChrome/BrowserLayout'
import BSODOverlay from './components/CursedEffects/BSODOverlay'

function AppContent() {
  const { isBSODActive, activateBSOD, deactivateBSOD } = useBrowser()

  useEffect(() => {
    const handleKeyDown = (e) => {
      // Secret hotkey: Ctrl + Shift + B
      if (e.ctrlKey && e.shiftKey && e.key === 'B') {
        e.preventDefault()
        activateBSOD()
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [activateBSOD])

  return (
    <>
      <PopupProvider>
        <BrowserLayout />
      </PopupProvider>
      
      {isBSODActive && (
        <BSODOverlay onComplete={deactivateBSOD} />
      )}
    </>
  )
}

function App() {
  return (
    <BrowserProvider>
      <AppContent />
    </BrowserProvider>
  )
}

export default App
