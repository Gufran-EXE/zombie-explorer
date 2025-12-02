import React, { useState } from 'react'

const FixPreview = ({ code }) => {
  const [isCopied, setIsCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setIsCopied(true)
    setTimeout(() => setIsCopied(false), 2000)
  }

  return (
    <div className="fix-preview">
      <div className="fix-preview-header">
        <span>📝 Suggested Fix:</span>
        <button className="copy-button" onClick={handleCopy}>
          {isCopied ? '✓ Copied!' : '📋 Copy'}
        </button>
      </div>
      <pre className="code-block">
        <code>{code}</code>
      </pre>
    </div>
  )
}

export default FixPreview
