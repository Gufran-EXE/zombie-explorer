import React from 'react'
import { useBrowser } from '../../context/BrowserContext'
import ZombieSocial from '../../pages/ZombieSocial'
import CursedSearch from '../../pages/CursedSearch'
import HauntedGeoCities from '../../pages/HauntedGeoCities'
import DarkPortal from '../../pages/DarkPortal'
import ForbiddenForum from '../../pages/ForbiddenForum'
import SummonedPage from '../../pages/SummonedPage'

const WebPage = () => {
  const { currentPage, compatibilityModeFromHell } = useBrowser()

  const renderPage = () => {
    // Route to haunted pages based on URL
    const url = currentPage.toLowerCase()

    if (url.includes('zombiebook') || url.includes('zombie.social')) {
      return <ZombieSocial />
    }
    
    if (url.includes('boohoo') || url.includes('search')) {
      return <CursedSearch />
    }
    
    if (url.includes('geocities') || url.includes('haunted')) {
      return <HauntedGeoCities />
    }
    
    if (url.includes('portal') || url.includes('dark')) {
      return <DarkPortal />
    }
    
    if (url.includes('forum') || url.includes('forbidden')) {
      return <ForbiddenForum />
    }
    
    if (url === 'summoned_page') {
      return <SummonedPage />
    }

    // Default homepage
    if (currentPage === 'about:blank' || !currentPage) {
      return (
        <div className="blank-page">
          <center>
            <br /><br />
            <table border="5" cellPadding="20" bgcolor="#000000" width="80%">
              <tr>
                <td>
                  <font face="Impact" size="7" color="#00FF00">
                    💀 INTERNET EXPLORER 6 💀
                  </font>
                  <br />
                  <font face="Arial" size="3" color="#FFFFFF">
                    <i>Zombie Edition</i>
                  </font>
                </td>
              </tr>
            </table>
            <br />
            <table border="3" cellPadding="15" bgcolor="#FFFFCC" width="80%">
              <tr>
                <td align="left">
                  <font face="Comic Sans MS" size="4" color="#8B0000">
                    <b>Welcome to the Undead Web</b>
                  </font>
                  <br /><br />
                  <font face="Arial" size="2">
                    The browser that refuses to die has risen from its grave!<br />
                    Experience the horror of early 2000s web browsing.<br />
                  </font>
                  <br />
                  <marquee behavior="scroll" direction="left" bgcolor="#FF0000" width="100%">
                    <font color="#FFFFFF" face="Impact" size="3">
                      ⚠️ WARNING: This browser is haunted and may cause nostalgia ⚠️
                    </font>
                  </marquee>
                  <br />
                  <font face="Verdana" size="3" color="#000000">
                    <b>🧟 Visit Our Cursed Sites:</b>
                  </font>
                  <br /><br />
                  <font face="Arial" size="2">
                    • <a href="#" onClick={(e) => { e.preventDefault(); }} style={{ color: '#0000EE' }}>zombiebook.hell</a> - Undead social network<br />
                    • <a href="#" onClick={(e) => { e.preventDefault(); }} style={{ color: '#0000EE' }}>boohoo.search</a> - Haunted search engine<br />
                    • <a href="#" onClick={(e) => { e.preventDefault(); }} style={{ color: '#0000EE' }}>geocities.tomb</a> - Cursed personal page<br />
                    • <a href="#" onClick={(e) => { e.preventDefault(); }} style={{ color: '#0000EE' }}>dark.portal</a> - Gateway to forbidden web<br />
                    • <a href="#" onClick={(e) => { e.preventDefault(); }} style={{ color: '#0000EE' }}>forbidden.forum</a> - Where the undead discuss<br />
                  </font>
                </td>
              </tr>
            </table>
            <br />
            <font face="Arial" size="1" color="#999999">
              © 2000 Microsoft Corporation (Zombie Division) | Best viewed in 800x600
            </font>
          </center>
        </div>
      )
    }

    // Fallback for unknown URLs
    return (
      <div className={`web-page ${compatibilityModeFromHell ? 'hell-mode' : ''}`}>
        <center>
          <br /><br />
          <table border="2" cellPadding="10" cellSpacing="0" bgcolor="#FFFFCC" width="90%">
            <tr>
              <td>
                <font face="Comic Sans MS" size="5" color="#FF0000">
                  <b>🧟 ZOMBIE PAGE 🧟</b>
                </font>
              </td>
            </tr>
            <tr>
              <td>
                <p>
                  <font face="Arial" size="2">
                    You are viewing: <b>{currentPage}</b>
                  </font>
                </p>
                <p>
                  <font face="Verdana" size="2">
                    This page has been resurrected from the depths of the early 2000s internet.
                  </font>
                </p>
                <marquee>
                  <font color="#0000FF">🎃 Under Construction 🎃</font>
                </marquee>
              </td>
            </tr>
          </table>
        </center>
      </div>
    )
  }

  return (
    <div className={`page-container ${compatibilityModeFromHell ? 'hell-mode' : ''}`}>
      {renderPage()}
    </div>
  )
}

export default WebPage
