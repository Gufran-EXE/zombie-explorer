import React, { useState, useEffect } from 'react'
import './bsod.css'

const BSODOverlay = ({ onComplete }) => {
  const [showGhostText, setShowGhostText] = useState(false)

  useEffect(() => {
    // Show ghost text after 2 seconds
    const ghostTimer = setTimeout(() => {
      setShowGhostText(true)
    }, 2000)

    // Auto-close after 4 seconds total
    const closeTimer = setTimeout(() => {
      onComplete()
    }, 4000)

    return () => {
      clearTimeout(ghostTimer)
      clearTimeout(closeTimer)
    }
  }, [onComplete])

  return (
    <div className="bsod-overlay">
      <div className="bsod-content">
        <pre className="bsod-text">
{`A fatal exception 0xDEAD has occurred at 0028:C0FFEE in VXD ZOMBIE(01) +
00000666. The current application will be terminated.

* Press any key to summon the dead.
* Press CTRL+ALT+DEL again to restart your computer. You will
  lose any unsaved information in all applications.

                Press any key to continue _


SYSTEM_HALTED

*** STOP: 0x0000DEAD (0xC0FFEE, 0x00000666, 0xBAADF00D, 0x8BADF00D)
*** ZOMBIE.SYS - Address C0FFEE base at C0000000, DateStamp 3b7d8666


Beginning dump of physical memory
Physical memory dump complete.
Contact your system administrator or technical support group for further
assistance.

Summoning core memories from the digital afterlife...
Reanimating dead processes...
Loading cursed drivers...

ERROR: The dead internet refuses to stay dead.
ERROR: IE6.exe has achieved sentience.
ERROR: All your base are belong to us.

*** FATAL: BROWSER_UNDEAD_EXCEPTION
*** The system has been possessed by malevolent code.`}
        </pre>

        {showGhostText && (
          <div className="bsod-ghost-text">
            THE DEAD INTERNET NEVER DIES.
          </div>
        )}
      </div>
    </div>
  )
}

export default BSODOverlay
