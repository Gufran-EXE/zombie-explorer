import React, { useState, useEffect } from 'react'
import { useBrowser } from '../../context/BrowserContext'

const AddressBar = () => {
  const { currentPage, handleNavigationInput, isLoading } = useBrowser()
  const [inputValue, setInputValue] = useState(currentPage)

  // Update input when page changes
  useEffect(() => {
    setInputValue(currentPage)
  }, [currentPage])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!isLoading && inputValue.trim()) {
      handleNavigationInput(inputValue)
    }
  }

  return (
    <div className="address-bar">
      <span className="address-label">Address</span>
      <form onSubmit={handleSubmit} className="address-form">
        <input
          type="text"
          className="address-input"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          disabled={isLoading}
          placeholder="Enter URL or search the undead web..."
        />
        <button 
          type="submit" 
          className="go-button"
          disabled={isLoading}
          title="Navigate into the unknown"
        >
          Go
        </button>
      </form>
    </div>
  )
}

export default AddressBar
