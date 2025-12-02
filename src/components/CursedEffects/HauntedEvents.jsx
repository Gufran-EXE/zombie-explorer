import { useEffect } from 'react'
import { useBrowser } from '../../context/BrowserContext'
import { usePopups } from '../Popups/PopupManager'
import { getRandomPopup } from '../../utils/popupGenerator'

const HauntedEvents = () => {
  const { compatibilityModeFromHell, setStatusMessage } = useBrowser()
  const { addPopup } = usePopups()

  useEffect(() => {
    const hauntedMessages = [
      'Something moved in the shadows...',
      'Did you hear that?',
      'The spirits are restless...',
      'A cold chill runs down your spine...',
      'You feel watched...',
      'The cursor has a mind of its own...',
      'Reality glitches for a moment...'
    ]

    const triggerRandomEvent = () => {
      const events = [
        // Random spooky status message
        () => {
          const message = hauntedMessages[Math.floor(Math.random() * hauntedMessages.length)]
          setStatusMessage(message)
          setTimeout(() => setStatusMessage('Ready to haunt...'), 3000)
        },
        // Brief screen shake
        () => {
          document.body.style.animation = 'briefShake 0.3s'
          setTimeout(() => {
            document.body.style.animation = ''
          }, 300)
        }
      ]

      // Pick random event (removed popup event)
      const event = events[Math.floor(Math.random() * events.length)]
      event()

      // Schedule next event (60-120 seconds, or 30-60 in Hell Mode)
      const baseDelay = compatibilityModeFromHell ? 30000 : 60000
      const randomDelay = compatibilityModeFromHell ? 30000 : 60000
      const nextDelay = Math.random() * randomDelay + baseDelay
      
      setTimeout(triggerRandomEvent, nextDelay)
    }

    // Start after initial delay
    const initialTimeout = setTimeout(triggerRandomEvent, 20000)

    return () => clearTimeout(initialTimeout)
  }, [compatibilityModeFromHell, setStatusMessage])

  return null // This component has no visual output
}

export default HauntedEvents
