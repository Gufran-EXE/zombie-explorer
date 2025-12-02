// Zombie IE6 Popup Generator - Spooky error messages

const popupMessages = [
  {
    type: 'error',
    title: 'Internet Explorer',
    message: 'A fatal exception 0xDEAD has occurred at 0028:C0FFEE in VXD ZOMBIE(01). The current application will be terminated.\n\nPress any key to summon the dead.',
    icon: '❌'
  },
  {
    type: 'warning',
    title: 'Internet Explorer',
    message: 'This page contains both secure and cursed content. Do you want to display the cursed content?',
    icon: '⚠️'
  },
  {
    type: 'error',
    title: 'Script Error',
    message: 'An error has occurred in the script on this page.\n\nError: Ghost in the machine\nCode: 666\n\nDo you want to continue running scripts on this page?',
    icon: '❌'
  },
  {
    type: 'info',
    title: 'Internet Explorer',
    message: 'Internet Explorer has detected that you are still using Internet Explorer. This is concerning.',
    icon: 'ℹ️'
  },
  {
    type: 'warning',
    title: 'Security Warning',
    message: 'This website is trying to install an ActiveX control that may be possessed by demons.\n\nPublisher: Unknown Entity from the Void\n\nDo you want to install this software?',
    icon: '⚠️'
  },
  {
    type: 'error',
    title: 'Internet Explorer',
    message: 'Internet Explorer cannot display the webpage.\n\nMost likely causes:\n• The page is haunted\n• Your soul is not connected\n• The server is in another dimension',
    icon: '❌'
  },
  {
    type: 'warning',
    title: 'Certificate Error',
    message: 'There is a problem with this website\'s security certificate.\n\nThe certificate was issued by: The Dark Lord\nThe certificate is expired: Since 1999\n\nDo you want to proceed anyway?',
    icon: '⚠️'
  },
  {
    type: 'info',
    title: 'Internet Explorer',
    message: 'To help protect your security, Internet Explorer has blocked this site from downloading files to your computer.\n\nJust kidding, we have no security. Download whatever you want!',
    icon: 'ℹ️'
  },
  {
    type: 'error',
    title: 'Memory Error',
    message: 'Internet Explorer has run out of memory.\n\nThis is because your browser is haunted by 666 ghost processes.\n\nWould you like to exorcise them?',
    icon: '❌'
  },
  {
    type: 'warning',
    title: 'Pop-up Blocker',
    message: 'Pop-up Blocker has detected a pop-up.\n\nWait... this IS the pop-up.\n\n*existential crisis intensifies*',
    icon: '⚠️'
  },
  {
    type: 'error',
    title: 'Internet Explorer',
    message: 'The page cannot be displayed because an internal error occurred.\n\nError details: The spirits are restless\nError code: 0xBOO\n\nPlease try again later (or never).',
    icon: '❌'
  },
  {
    type: 'info',
    title: 'Update Available',
    message: 'A new version of Internet Explorer is available!\n\nVersion: IE7 (Released 2006)\n\nWould you like to update?\n\n(Spoiler: You won\'t)',
    icon: 'ℹ️'
  },
  {
    type: 'warning',
    title: 'Compatibility View',
    message: 'This website is not compatible with modern standards.\n\nBut neither are you, so it\'s fine.',
    icon: '⚠️'
  },
  {
    type: 'error',
    title: 'Internet Explorer',
    message: 'Internet Explorer has stopped working.\n\nWindows is checking for a solution to the problem...\n\n(Narrator: There is no solution)',
    icon: '❌'
  }
]

export const getRandomPopup = () => {
  const randomIndex = Math.floor(Math.random() * popupMessages.length)
  return {
    id: Date.now() + Math.random(),
    ...popupMessages[randomIndex]
  }
}

export const getPopupByType = (type) => {
  const filtered = popupMessages.filter(p => p.type === type)
  if (filtered.length === 0) return getRandomPopup()
  
  const randomIndex = Math.floor(Math.random() * filtered.length)
  return {
    id: Date.now() + Math.random(),
    ...filtered[randomIndex]
  }
}

export const createCustomPopup = (title, message, type = 'info', icon = 'ℹ️') => {
  return {
    id: Date.now() + Math.random(),
    type,
    title,
    message,
    icon
  }
}

export default {
  getRandomPopup,
  getPopupByType,
  createCustomPopup
}
