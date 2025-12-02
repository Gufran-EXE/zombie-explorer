import React from 'react'

const BugList = ({ bugs, onSelectBug }) => {
  const getSeverityColor = (severity) => {
    switch (severity) {
      case 'critical': return '#CC0000'
      case 'high': return '#FF6600'
      case 'medium': return '#FFAA00'
      case 'low': return '#00AA00'
      default: return '#666666'
    }
  }

  const getSeverityIcon = (severity) => {
    switch (severity) {
      case 'critical': return '🔥'
      case 'high': return '⚠️'
      case 'medium': return '⚡'
      case 'low': return 'ℹ️'
      default: return '❓'
    }
  }

  if (bugs.length === 0) {
    return (
      <div className="no-bugs">
        <div className="no-bugs-icon">✨</div>
        <p>No bugs detected!</p>
        <p className="no-bugs-subtext">
          (But they're probably just hiding...)
        </p>
      </div>
    )
  }

  return (
    <div className="bug-list">
      <div className="bug-list-header">
        <span className="bug-count">
          {bugs.length} Demon{bugs.length !== 1 ? 's' : ''} Detected
        </span>
      </div>
      
      {bugs.map(bug => (
        <div
          key={bug.id}
          className="bug-item"
          onClick={() => onSelectBug(bug)}
        >
          <div className="bug-severity" style={{ color: getSeverityColor(bug.severity) }}>
            {getSeverityIcon(bug.severity)}
          </div>
          <div className="bug-details">
            <div className="bug-title">{bug.title}</div>
            <div className="bug-description">{bug.description}</div>
            <div className="bug-location">📍 {bug.location}</div>
          </div>
          <div className="bug-arrow">→</div>
        </div>
      ))}
    </div>
  )
}

export default BugList
