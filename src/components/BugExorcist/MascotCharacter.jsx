import React from 'react'

const MascotCharacter = ({ mood = 'idle' }) => {
  const getMascotDisplay = () => {
    switch (mood) {
      case 'scanning':
        return {
          emoji: '🔮',
          message: 'Sensing dark forces in your code...',
          animation: 'pulse'
        }
      case 'concerned':
        return {
          emoji: '😰',
          message: 'Oh no! Multiple demons detected!',
          animation: 'shake'
        }
      case 'focused':
        return {
          emoji: '🧙‍♂️',
          message: 'Preparing exorcism ritual...',
          animation: 'glow'
        }
      case 'victorious':
        return {
          emoji: '✨',
          message: 'Bug exorcised successfully!',
          animation: 'celebrate'
        }
      case 'happy':
        return {
          emoji: '😊',
          message: 'Your code is clean! (For now...)',
          animation: 'bounce'
        }
      case 'confused':
        return {
          emoji: '🤔',
          message: 'Something went wrong...',
          animation: 'tilt'
        }
      default:
        return {
          emoji: '👻',
          message: 'Ready to hunt bugs!',
          animation: 'float'
        }
    }
  }

  const display = getMascotDisplay()

  return (
    <div className="mascot-container">
      <div className={`mascot-character ${display.animation}`}>
        {display.emoji}
      </div>
      <div className="mascot-message">
        {display.message}
      </div>
    </div>
  )
}

export default MascotCharacter
