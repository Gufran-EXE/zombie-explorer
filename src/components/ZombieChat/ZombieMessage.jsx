import React, { useState, useEffect } from 'react'

const ZombieMessage = ({ message, isUser, glitchLevel = 'low' }) => {
  const [displayedText, setDisplayedText] = useState('')
  const [isTyping, setIsTyping] = useState(!isUser)

  useEffect(() => {
    if (isUser) {
      setDisplayedText(message.text)
      return
    }

    // Typing animation for zombie messages
    let currentIndex = 0
    const typingSpeed = message.typing_speed || 40

    const typeInterval = setInterval(() => {
      if (currentIndex < message.text.length) {
        setDisplayedText(message.text.substring(0, currentIndex + 1))
        currentIndex++
      } else {
        setIsTyping(false)
        clearInterval(typeInterval)
      }
    }, typingSpeed)

    return () => clearInterval(typeInterval)
  }, [message, isUser])

  const getTimestamp = () => {
    const date = new Date(message.timestamp)
    return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
  }

  return (
    <div className={`zombie-message ${isUser ? 'user' : 'zombie'}`}>
      <div className={`message-bubble ${!isUser && glitchLevel !== 'low' ? `glitch-${glitchLevel}` : ''}`}>
        {displayedText}
        {isTyping && <span className="typing-cursor">▋</span>}
      </div>
      <div className="message-timestamp">
        {getTimestamp()}
      </div>
    </div>
  )
}

export default ZombieMessage
