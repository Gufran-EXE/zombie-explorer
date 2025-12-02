import React, { useState, useRef, useEffect } from 'react'

const RetroDialog = ({ popup, onClose, zIndex }) => {
  const [position, setPosition] = useState({
    x: Math.random() * 200 + 100,
    y: Math.random() * 150 + 50
  })
  const [isDragging, setIsDragging] = useState(false)
  const [dragOffset, setDragOffset] = useState({ x: 0, y: 0 })
  const dialogRef = useRef(null)

  const handleMouseDown = (e) => {
    if (e.target.closest('.dialog-button')) return
    
    setIsDragging(true)
    const rect = dialogRef.current.getBoundingClientRect()
    setDragOffset({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    })
  }

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isDragging) return
      
      setPosition({
        x: e.clientX - dragOffset.x,
        y: e.clientY - dragOffset.y
      })
    }

    const handleMouseUp = () => {
      setIsDragging(false)
    }

    if (isDragging) {
      window.addEventListener('mousemove', handleMouseMove)
      window.addEventListener('mouseup', handleMouseUp)
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseup', handleMouseUp)
    }
  }, [isDragging, dragOffset])

  const getIconForType = () => {
    if (popup.icon) return popup.icon
    
    switch (popup.type) {
      case 'error': return '❌'
      case 'warning': return '⚠️'
      case 'info': return 'ℹ️'
      default: return '💀'
    }
  }

  return (
    <div
      ref={dialogRef}
      className={`retro-dialog ${isDragging ? 'dragging' : ''}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        zIndex
      }}
    >
      <div className="dialog-title-bar" onMouseDown={handleMouseDown}>
        <span className="dialog-title">{popup.title}</span>
        <button className="dialog-close" onClick={onClose}>✕</button>
      </div>
      
      <div className="dialog-content">
        <div className="dialog-icon">{getIconForType()}</div>
        <div className="dialog-message">{popup.message}</div>
      </div>
      
      <div className="dialog-buttons">
        <button className="dialog-button" onClick={onClose}>
          OK
        </button>
        {popup.type === 'warning' && (
          <button className="dialog-button" onClick={onClose}>
            Cancel
          </button>
        )}
      </div>
    </div>
  )
}

export default RetroDialog
