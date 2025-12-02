import React, { useState, useEffect, useRef } from 'react'
import { useBrowser } from '../../context/BrowserContext'
import ZombieMessage from './ZombieMessage'
import ZombieTypingIndicator from './ZombieTypingIndicator'
import { getZombieResponse, getZombieGreeting } from '../../utils/zombieChatClient'
import './zombie-chat-styles.css'

const ZombieChatWindow = () => {
  const { isZombieChatOpen, setIsZombieChatOpen } = useBrowser()
  const [messages, setMessages] = useState([])
  const [inputValue, setInputValue] = useState('')
  const [isZombieTyping, setIsZombieTyping] = useState(false)
  const messagesEndRef = useRef(null)

  useEffect(() => {
    if (isZombieChatOpen && messages.length === 0) {
      // Send greeting when chat opens for first time
      setTimeout(async () => {
        setIsZombieTyping(true)
        const greeting = getZombieGreeting()
        
        setTimeout(() => {
          setMessages([{
            id: Date.now(),
            text: greeting.reply,
            isUser: false,
            timestamp: new Date(),
            glitch_level: greeting.glitch_level,
            typing_speed: greeting.typing_speed
          }])
          setIsZombieTyping(false)
        }, 1500)
      }, 500)
    }
  }, [isZombieChatOpen, messages.length])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, isZombieTyping])

  const handleSend = async () => {
    if (!inputValue.trim() || isZombieTyping) return

    const userMessage = {
      id: Date.now(),
      text: inputValue,
      isUser: true,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputValue('')
    setIsZombieTyping(true)

    try {
      const response = await getZombieResponse(inputValue)
      
      const zombieMessage = {
        id: Date.now() + 1,
        text: response.reply,
        isUser: false,
        timestamp: new Date(),
        glitch_level: response.glitch_level,
        typing_speed: response.typing_speed
      }

      setMessages(prev => [...prev, zombieMessage])
    } catch (error) {
      console.error('Zombie response failed:', error)
    } finally {
      setIsZombieTyping(false)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSend()
    }
  }

  return (
    <div className={`zombie-chat-window ${isZombieChatOpen ? 'open' : ''}`}>
      <div className="zombie-chat-title-bar">
        <div className="zombie-chat-title">
          <span>💀 Zombie Chat Companion</span>
          <span className="zombie-chat-status">● Online (Undead)</span>
        </div>
        <button 
          className="zombie-chat-close" 
          onClick={() => setIsZombieChatOpen(false)}
        >
          ✕
        </button>
      </div>

      <div className="zombie-chat-messages">
        {messages.length === 0 && !isZombieTyping && (
          <div className="zombie-welcome">
            <div className="zombie-welcome-icon">💀</div>
            <p>Zombie Chat is initializing...</p>
            <p style={{ fontSize: '10px', marginTop: '5px' }}>
              Connecting to the digital afterlife...
            </p>
          </div>
        )}

        {messages.map(message => (
          <ZombieMessage
            key={message.id}
            message={message}
            isUser={message.isUser}
            glitchLevel={message.glitch_level}
          />
        ))}

        {isZombieTyping && <ZombieTypingIndicator />}
        <div ref={messagesEndRef} />
      </div>

      <div className="zombie-chat-input-area">
        <textarea
          className="zombie-chat-input"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyPress={handleKeyPress}
          placeholder="Type a message to the undead..."
          disabled={isZombieTyping}
          rows={1}
        />
        <button
          className="zombie-chat-send"
          onClick={handleSend}
          disabled={!inputValue.trim() || isZombieTyping}
        >
          Send
        </button>
      </div>
    </div>
  )
}

export default ZombieChatWindow
