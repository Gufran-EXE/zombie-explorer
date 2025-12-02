import React, { useState, useEffect } from 'react'
import MascotCharacter from './MascotCharacter'
import BugList from './BugList'
import ExorcismInterface from './ExorcismInterface'
import { detectBugs } from '../../utils/bugExorcistClient'
import './exorcist-styles.css'

const ExorcistPanel = ({ isOpen, onClose }) => {
  const [bugs, setBugs] = useState([])
  const [selectedBug, setSelectedBug] = useState(null)
  const [isScanning, setIsScanning] = useState(false)
  const [mascotMood, setMascotMood] = useState('idle')

  useEffect(() => {
    if (isOpen && bugs.length === 0) {
      scanForBugs()
    }
  }, [isOpen])

  const scanForBugs = async () => {
    setIsScanning(true)
    setMascotMood('scanning')
    
    try {
      const detectedBugs = await detectBugs()
      setBugs(detectedBugs)
      setMascotMood(detectedBugs.length > 0 ? 'concerned' : 'happy')
    } catch (error) {
      console.error('Bug scan failed:', error)
      setMascotMood('confused')
    } finally {
      setIsScanning(false)
    }
  }

  const handleBugSelect = (bug) => {
    setSelectedBug(bug)
    setMascotMood('focused')
  }

  const handleExorcismComplete = () => {
    setMascotMood('victorious')
    // Remove exorcised bug from list
    setBugs(prev => prev.filter(b => b.id !== selectedBug.id))
    setSelectedBug(null)
    
    // Return to idle after celebration
    setTimeout(() => {
      setMascotMood('idle')
    }, 3000)
  }

  return (
    <div className={`exorcist-panel ${isOpen ? 'open' : ''}`}>
      <div className="exorcist-header">
        <div className="exorcist-title">
          <span className="exorcist-icon">👻</span>
          <span>Bug Exorcist</span>
        </div>
        <button className="exorcist-close" onClick={onClose} title="Dismiss the exorcist">
          ✕
        </button>
      </div>

      <div className="exorcist-content">
        <MascotCharacter mood={mascotMood} />

        {isScanning ? (
          <div className="scanning-message">
            <div className="scanning-spinner">🔮</div>
            <p>Scanning for cursed code...</p>
          </div>
        ) : selectedBug ? (
          <ExorcismInterface
            bug={selectedBug}
            onComplete={handleExorcismComplete}
            onBack={() => setSelectedBug(null)}
          />
        ) : (
          <>
            <BugList
              bugs={bugs}
              onSelectBug={handleBugSelect}
            />
            <button
              className="scan-button"
              onClick={scanForBugs}
              disabled={isScanning}
            >
              {bugs.length > 0 ? '🔄 Rescan' : '🔍 Scan for Bugs'}
            </button>
          </>
        )}
      </div>

      <div className="exorcist-footer">
        <span className="footer-text">
          Powered by Dark Magic & AI
        </span>
      </div>
    </div>
  )
}

export default ExorcistPanel
