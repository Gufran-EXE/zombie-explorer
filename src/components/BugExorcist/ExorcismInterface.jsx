import React, { useState, useEffect } from 'react'
import { exorciseBug } from '../../utils/bugExorcistClient'
import FixPreview from './FixPreview'

const ExorcismInterface = ({ bug, onComplete, onBack }) => {
  const [isExorcising, setIsExorcising] = useState(false)
  const [exorcismResult, setExorcismResult] = useState(null)
  const [isApplied, setIsApplied] = useState(false)

  const handleExorcise = async () => {
    setIsExorcising(true)
    
    try {
      const result = await exorciseBug(bug)
      setExorcismResult(result)
    } catch (error) {
      console.error('Exorcism failed:', error)
      setExorcismResult({
        diagnosis: 'The exorcism ritual failed! The demon is too powerful!',
        solution: 'Try again or consult a senior exorcist (Stack Overflow).',
        code: '// Error occurred'
      })
    } finally {
      setIsExorcising(false)
    }
  }

  const handleApplyFix = () => {
    setIsApplied(true)
    // In a real implementation, this would modify the actual page content
    setTimeout(() => {
      onComplete()
    }, 1500)
  }

  const handleUndo = () => {
    setIsApplied(false)
  }

  return (
    <div className="exorcism-interface">
      <button className="back-button" onClick={onBack}>
        ← Back to Bug List
      </button>

      <div className="bug-detail-card">
        <h3>{bug.title}</h3>
        <p className="bug-detail-description">{bug.description}</p>
        <p className="bug-detail-location">Location: {bug.location}</p>
        <span className={`severity-badge ${bug.severity}`}>
          {bug.severity.toUpperCase()}
        </span>
      </div>

      {!exorcismResult && !isExorcising && (
        <button className="exorcise-button" onClick={handleExorcise}>
          🔮 Begin Exorcism Ritual
        </button>
      )}

      {isExorcising && (
        <div className="exorcising-animation">
          <div className="ritual-circle">
            <div className="pentagram">⛧</div>
          </div>
          <p>Performing dark rituals...</p>
          <p className="ritual-chant">
            "By the power of web standards, I compel thee to leave!"
          </p>
        </div>
      )}

      {exorcismResult && (
        <div className="exorcism-result">
          <div className="diagnosis-section">
            <h4>🔍 Diagnosis:</h4>
            <p className="diagnosis-text">{exorcismResult.diagnosis}</p>
          </div>

          <div className="solution-section">
            <h4>💡 Solution:</h4>
            <p className="solution-text">{exorcismResult.solution}</p>
          </div>

          <FixPreview code={exorcismResult.code} />

          <div className="action-buttons">
            {!isApplied ? (
              <>
                <button className="apply-button" onClick={handleApplyFix}>
                  ✨ Apply Fix
                </button>
                <button className="dismiss-button" onClick={onBack}>
                  Ignore (Risky!)
                </button>
              </>
            ) : (
              <>
                <div className="success-message">
                  ✅ Fix applied successfully!
                </div>
                <button className="undo-button" onClick={handleUndo}>
                  ↩️ Undo Fix
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default ExorcismInterface
