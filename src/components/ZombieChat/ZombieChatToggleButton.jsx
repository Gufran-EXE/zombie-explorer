import React from 'react'
import { useBrowser } from '../../context/BrowserContext'
import './zombie-chat-styles.css'

const ZombieChatToggleButton = () => {
  const { isZombieChatOpen, setIsZombieChatOpen } = useBrowser()

  return (
    <button
      className="zombie-chat-toggle"
      onClick={() => setIsZombieChatOpen(!isZombieChatOpen)}
      title={isZombieChatOpen ? "Close Zombie Chat" : "Open Zombie Chat"}
    >
      {isZombieChatOpen ? '✕' : '💀'}
    </button>
  )
}

export default ZombieChatToggleButton
