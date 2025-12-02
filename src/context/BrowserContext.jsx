import React, { createContext, useContext, useState } from 'react'
import { simulateSlowLoading } from '../utils/loadingSimulator'

const BrowserContext = createContext()

export const useBrowser = () => {
  const context = useContext(BrowserContext)
  if (!context) {
    throw new Error('useBrowser must be used within BrowserProvider')
  }
  return context
}

export const BrowserProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState('about:blank')
  const [isLoading, setIsLoading] = useState(false)
  const [loadingProgress, setLoadingProgress] = useState(0)
  const [compatibilityModeFromHell, setCompatibilityModeFromHell] = useState(false)
  const [statusMessage, setStatusMessage] = useState('Ready to haunt...')
  const [searchQuery, setSearchQuery] = useState('')
  const [history, setHistory] = useState(['about:blank'])
  const [historyIndex, setHistoryIndex] = useState(0)
  const [summonedPageContent, setSummonedPageContent] = useState(null)
  const [isZombieChatOpen, setIsZombieChatOpen] = useState(false)
  const [isBSODActive, setIsBSODActive] = useState(false)

  const activateBSOD = () => {
    setIsBSODActive(true)
  }

  const deactivateBSOD = () => {
    setIsBSODActive(false)
  }

  const startNavigation = async (targetPage, query = '', addToHistory = true) => {
    if (isLoading) return // Prevent multiple simultaneous navigations
    
    setIsLoading(true)
    setLoadingProgress(0)
    setStatusMessage('Initiating cursed connection...')
    setSearchQuery(query)

    // Run the slow loading simulator with Hell Mode awareness
    await simulateSlowLoading(
      (progress) => setLoadingProgress(progress),
      (message) => setStatusMessage(message),
      compatibilityModeFromHell
    )

    // Navigation complete
    setCurrentPage(targetPage)
    
    // Add to history if this is a new navigation (not back/forward)
    if (addToHistory) {
      const newHistory = history.slice(0, historyIndex + 1)
      newHistory.push(targetPage)
      setHistory(newHistory)
      setHistoryIndex(newHistory.length - 1)
    }
    
    setIsLoading(false)
    setLoadingProgress(0)
    
    // Set final status message
    setTimeout(() => {
      const finalMessage = compatibilityModeFromHell 
        ? 'Done. You survived... this time.'
        : 'Done. The page has been resurrected.'
      setStatusMessage(finalMessage)
    }, 100)
  }

  const goBack = () => {
    if (historyIndex > 0 && !isLoading) {
      const newIndex = historyIndex - 1
      setHistoryIndex(newIndex)
      startNavigation(history[newIndex], '', false)
    }
  }

  const goForward = () => {
    if (historyIndex < history.length - 1 && !isLoading) {
      const newIndex = historyIndex + 1
      setHistoryIndex(newIndex)
      startNavigation(history[newIndex], '', false)
    }
  }

  const stopLoading = () => {
    if (isLoading) {
      setIsLoading(false)
      setLoadingProgress(0)
      setStatusMessage('Navigation interrupted by the user...')
    }
  }

  const canGoBack = historyIndex > 0
  const canGoForward = historyIndex < history.length - 1

  const summonCursedPage = async () => {
    if (isLoading) return
    
    setStatusMessage('Summoning page from beyond the void...')
    setIsLoading(true)
    setLoadingProgress(0)
    
    try {
      // Import dynamically to avoid circular dependencies
      const { generateCursedPage } = await import('../utils/aiPageGenerator')
      
      // Simulate summoning ritual with progress
      const summoningStages = [
        { progress: 20, delay: 300, message: 'Opening portal to digital afterlife...' },
        { progress: 40, delay: 400, message: 'Channeling cursed HTML spirits...' },
        { progress: 60, delay: 500, message: 'Reanimating retro CSS...' },
        { progress: 80, delay: 400, message: 'Binding page to this realm...' },
        { progress: 100, delay: 300, message: 'Summoning complete!' }
      ]
      
      for (const stage of summoningStages) {
        await new Promise(resolve => setTimeout(resolve, stage.delay))
        setLoadingProgress(stage.progress)
        setStatusMessage(stage.message)
      }
      
      // Generate the cursed page
      const pageData = await generateCursedPage()
      setSummonedPageContent(pageData)
      
      // Navigate to summoned page
      setCurrentPage('summoned_page')
      
      // Add to history
      const newHistory = history.slice(0, historyIndex + 1)
      newHistory.push('summoned_page')
      setHistory(newHistory)
      setHistoryIndex(newHistory.length - 1)
      
      setStatusMessage('Page successfully summoned from the void!')
    } catch (error) {
      console.error('Summoning failed:', error)
      setStatusMessage('Summoning ritual failed! The spirits resist...')
    } finally {
      setIsLoading(false)
      setLoadingProgress(0)
    }
  }

  const handleNavigationInput = (input) => {
    const trimmedInput = input.trim()
    
    // Check if it's an external URL
    if (trimmedInput.startsWith('http://') || trimmedInput.startsWith('https://')) {
      setStatusMessage('Releasing your soul to the real internet...')
      setTimeout(() => {
        window.open(trimmedInput, '_blank')
        setStatusMessage('Your soul has escaped to another realm...')
      }, 500)
      return
    }

    // Check for internal haunted sites (case-insensitive)
    const lowerInput = trimmedInput.toLowerCase()
    
    const internalRoutes = {
      'zombiebook': 'zombiebook.hell',
      'zombie': 'zombiebook.hell',
      'social': 'zombiebook.hell',
      'boohoo': 'boohoo.search',
      'search': 'boohoo.search',
      'geocities': 'geocities.tomb',
      'haunted': 'geocities.tomb',
      'portal': 'dark.portal',
      'dark': 'dark.portal',
      'forum': 'forbidden.forum',
      'forbidden': 'forbidden.forum'
    }

    // Check if input matches any internal route
    for (const [keyword, route] of Object.entries(internalRoutes)) {
      if (lowerInput.includes(keyword)) {
        startNavigation(route)
        return
      }
    }

    // Otherwise, treat as search query
    if (trimmedInput) {
      startNavigation('boohoo.search', trimmedInput)
    }
  }

  const navigateTo = (url) => {
    startNavigation(url)
  }

  const value = {
    currentPage,
    isLoading,
    loadingProgress,
    compatibilityModeFromHell,
    statusMessage,
    searchQuery,
    summonedPageContent,
    isZombieChatOpen,
    isBSODActive,
    canGoBack,
    canGoForward,
    navigateTo,
    startNavigation,
    handleNavigationInput,
    goBack,
    goForward,
    stopLoading,
    summonCursedPage,
    activateBSOD,
    deactivateBSOD,
    setCompatibilityModeFromHell,
    setStatusMessage,
    setIsZombieChatOpen
  }

  return (
    <BrowserContext.Provider value={value}>
      {children}
    </BrowserContext.Provider>
  )
}
