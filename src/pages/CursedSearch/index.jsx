import React, { useState, useEffect } from 'react'
import { useBrowser } from '../../context/BrowserContext'

const CursedSearch = () => {
  const { searchQuery: contextQuery } = useBrowser()
  const [searchQuery, setSearchQuery] = useState(contextQuery || '')
  const [hasSearched, setHasSearched] = useState(false)

  // If there's a query from context (address bar), use it
  useEffect(() => {
    if (contextQuery) {
      setSearchQuery(contextQuery)
      setHasSearched(true)
    }
  }, [contextQuery])

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchQuery.trim()) {
      setHasSearched(true)
    }
  }

  const generateResults = () => {
    const query = searchQuery.toLowerCase()
    
    // Generate contextual results based on query
    const results = [
      {
        title: `${searchQuery} - Cursed Documentation`,
        url: 'www.cursedwebdev.hell',
        description: `Everything you never wanted to know about "${searchQuery}". Warning: May cause existential dread and nested table nightmares...`
      },
      {
        title: `How to ${searchQuery} in IE6`,
        url: 'www.ie6forever.undead',
        description: `A comprehensive guide to ${searchQuery} using deprecated HTML tags and ActiveX controls. Last updated: 1999.`
      },
      {
        title: `${searchQuery} - Haunted Stack Overflow`,
        url: 'stackoverflow.tomb',
        description: `42 answers, all marked as "This question is cursed and has been closed by the spirits." No accepted answer.`
      },
      {
        title: `Top 10 ${searchQuery} Mistakes That Will Haunt You`,
        url: 'www.ghostsites.tomb',
        description: `Number 7 will literally possess your computer. Click at your own risk...`
      },
      {
        title: `${searchQuery} Support Group`,
        url: 'www.undeadsupport.hell',
        description: `Join thousands of cursed developers still dealing with ${searchQuery}. Meetings every full moon.`
      }
    ]

    return results
  }

  return (
    <div className="retro-page">
      <center>
        <br /><br />
        <table border="0" cellPadding="20">
          <tr>
            <td>
              <font face="Impact" size="7" color="#FF0000">
                B<font color="#FF6600">o</font>
                <font color="#FFCC00">o</font>
                <font color="#00CC00">H</font>
                <font color="#0066FF">o</font>
                <font color="#9900FF">o</font>!
              </font>
              <br />
              <font face="Arial" size="2" color="#666666">
                <i>Search the undead web</i>
              </font>
            </td>
          </tr>
        </table>

        <form onSubmit={handleSearch}>
          <table border="3" cellPadding="10" bgcolor="#EEEEEE">
            <tr>
              <td>
                <input 
                  type="text" 
                  size="50" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  style={{
                    padding: '8px',
                    fontSize: '14px',
                    border: '2px inset #808080',
                    fontFamily: 'Arial'
                  }}
                  placeholder="Search for cursed content..."
                />
                &nbsp;
                <input 
                  type="submit" 
                  value="BooHoo Search" 
                  style={{
                    padding: '8px 16px',
                    fontSize: '12px',
                    fontFamily: 'Arial',
                    background: 'linear-gradient(180deg, #ECE9D8 0%, #D4D0C8 100%)',
                    border: '2px outset #FFFFFF',
                    cursor: 'pointer'
                  }}
                />
              </td>
            </tr>
          </table>
        </form>

        <br /><br />

        {hasSearched && searchQuery && (
          <table width="80%" border="2" cellPadding="15" bgcolor="#FFFFFF">
            <tr>
              <td align="left">
                <font face="Arial" size="2" color="#666666">
                  Searching for: <b>"{searchQuery}"</b>
                  <br />
                  About 666,666 results (0.13 seconds from the afterlife)
                </font>
                <hr />

                {generateResults().map((result, index) => (
                  <p key={index}>
                    <font face="Arial" size="3" color="#0000EE">
                      <u><b>{result.title}</b></u>
                    </font>
                    <br />
                    <font face="Verdana" size="2" color="#008000">
                      {result.url}
                    </font>
                    <br />
                    <font face="Arial" size="2" color="#000000">
                      {result.description}
                    </font>
                  </p>
                ))}

                <p>
                  <font face="Arial" size="3" color="#800080">
                    <u><b>Did you mean: <i>{searchQuery} (but cursed)</i>?</b></u>
                  </font>
                </p>
              </td>
            </tr>
          </table>
        )}

        {hasSearched && !searchQuery && (
          <table width="80%" border="2" cellPadding="15" bgcolor="#FFFFCC">
            <tr>
              <td align="center">
                <font face="Arial" size="3" color="#CC0000">
                  <b>⚠️ Error: Empty search query detected!</b>
                  <br /><br />
                  <font size="2">
                    Even the spirits need something to search for...
                  </font>
                </font>
              </td>
            </tr>
          </table>
        )}

        <br /><br />
        <marquee behavior="alternate" width="60%">
          <font face="Comic Sans MS" size="2" color="#FF0000">
            👻 Sponsored by: Haunted Web Hosting - "We never go down (because we're already dead)" 👻
          </font>
        </marquee>
      </center>
    </div>
  )
}

export default CursedSearch
