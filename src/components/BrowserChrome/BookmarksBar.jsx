import React from 'react'
import { useBrowser } from '../../context/BrowserContext'

const BookmarksBar = () => {
  const { navigateTo } = useBrowser()

  const bookmarks = [
    { name: '🧟 ZombieBook', url: 'zombiebook.hell', icon: '🧟' },
    { name: '🔍 BooHoo Search', url: 'boohoo.search', icon: '🔍' },
    { name: '🏚️ Haunted GeoCities', url: 'geocities.tomb', icon: '🏚️' },
    { name: '⛧ Dark Portal', url: 'dark.portal', icon: '⛧' },
    { name: '💀 Forbidden Forum', url: 'forbidden.forum', icon: '💀' },
    { name: '⚰️ Undead Mail', url: 'deadmail.tomb', icon: '⚰️' },
    { name: '👻 Ghost Chat', url: 'scream.chat', icon: '👻' }
  ]

  const handleBookmarkClick = (url) => {
    navigateTo(url)
  }

  return (
    <div className="bookmarks-bar">
      <span className="bookmarks-label">Favorites</span>
      <div className="bookmarks-list">
        {bookmarks.map((bookmark, index) => (
          <button
            key={index}
            className="bookmark-item"
            onClick={() => handleBookmarkClick(bookmark.url)}
            title={`Visit ${bookmark.url} (if you dare)`}
          >
            <span className="bookmark-icon">{bookmark.icon}</span>
            <span className="bookmark-name">{bookmark.name}</span>
          </button>
        ))}
      </div>
    </div>
  )
}

export default BookmarksBar
