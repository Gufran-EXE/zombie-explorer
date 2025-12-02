// AI Page Generator - Summons cursed webpages using MCP/OpenAI

// Simulated AI-generated pages for demo
// In production, this would call actual OpenAI API via MCP
const cursedPageTemplates = [
  {
    title: "💀 Zombie Dating Network 💀",
    theme: "undead_dating",
    html: `
      <center>
        <table width="90%" border="5" cellPadding="0" cellSpacing="0" bordercolor="#8B0000">
          <tr>
            <td bgcolor="#000000">
              <table width="100%" cellPadding="20">
                <tr>
                  <td>
                    <font face="Impact" size="7" color="#FF0000">
                      💀 ZOMBIE MATCH 💀
                    </font>
                    <br />
                    <font face="Arial" size="3" color="#FFFFFF">
                      <i>Love Never Dies... Literally</i>
                    </font>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
        <br />
        <marquee behavior="scroll" direction="left" bgcolor="#8B0000">
          <font face="Comic Sans MS" size="3" color="#FFFFFF">
            ❤️ NEW MEMBERS: DeadlyDave69, RottenRose, ZombieZack ❤️
          </font>
        </marquee>
        <br />
        <table width="90%" border="3" cellPadding="15" bgcolor="#FFFFCC">
          <tr>
            <td align="left">
              <font face="Arial" size="4" color="#8B0000">
                <b>🧟 Featured Profiles:</b>
              </font>
              <hr />
              <table width="100%" border="1" cellPadding="10">
                <tr>
                  <td width="30%" bgcolor="#FFE4E1">
                    <center>
                      <font size="6">🧟‍♀️</font><br />
                      <font face="Verdana" size="2"><b>GhoulGirl99</b></font><br />
                      <font size="1">Age: 127 (looks 25)</font>
                    </center>
                  </td>
                  <td bgcolor="#FFFFFF">
                    <font face="Arial" size="2">
                      <b>About Me:</b> Looking for someone to share eternity with. 
                      Enjoys long walks through graveyards and brain smoothies. 
                      Must love decomposition.<br /><br />
                      <b>Interests:</b> Haunting, moaning, shuffling<br />
                      <b>Turn-offs:</b> Garlic, holy water, exorcists
                    </font>
                  </td>
                </tr>
              </table>
              <br />
              <table width="100%" border="1" cellPadding="10">
                <tr>
                  <td width="30%" bgcolor="#E6E6FA">
                    <center>
                      <font size="6">🧟‍♂️</font><br />
                      <font face="Verdana" size="2"><b>DeadlyDave69</b></font><br />
                      <font size="1">Age: Timeless</font>
                    </center>
                  </td>
                  <td bgcolor="#FFFFFF">
                    <font face="Arial" size="2">
                      <b>About Me:</b> Recently undead and ready to mingle! 
                      Former accountant, now full-time zombie. Great listener 
                      (because I can't talk much).<br /><br />
                      <b>Interests:</b> Brains, more brains, Netflix<br />
                      <b>Turn-offs:</b> Shotguns, chainsaws, Rick Grimes
                    </font>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
        <br />
        <table border="2" cellPadding="10" bgcolor="#FF6B6B">
          <tr>
            <td>
              <font face="Impact" size="3" color="#FFFFFF">
                ⚠️ WARNING: All dates must take place after sunset ⚠️
              </font>
            </td>
          </tr>
        </table>
        <br />
        <font face="Arial" size="1" color="#999999">
          © 2000 Zombie Match Inc. | Visitors from the grave: 666,666
        </font>
      </center>
    `
  },
  {
    title: "👻 Ghost Blog - Paranormal Thoughts 👻",
    theme: "ghost_blog",
    html: `
      <center>
        <br />
        <table width="85%" border="3" cellPadding="0" cellSpacing="0" bgcolor="#4B0082">
          <tr>
            <td>
              <table width="100%" cellPadding="15">
                <tr>
                  <td bgcolor="#FFFFFF">
                    <font face="Papyrus, fantasy" size="6" color="#4B0082">
                      👻 The Ethereal Chronicles 👻
                    </font>
                    <br />
                    <font face="Arial" size="2" color="#666666">
                      <i>A blog from beyond the veil</i>
                    </font>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
        <br />
        <table width="85%" border="2" cellPadding="20" bgcolor="#F0F0F0">
          <tr>
            <td align="left">
              <font face="Arial" size="4" color="#4B0082">
                <b>📝 Latest Post: "10 Things I Learned After Dying"</b>
              </font>
              <br />
              <font face="Verdana" size="1" color="#999999">
                Posted by: SpectralSteve | Date: October 31, 1999 | Comments: 666
              </font>
              <hr />
              <font face="Arial" size="2">
                So I've been dead for about 200 years now, and let me tell you, 
                it's not what I expected. Here are some things they don't tell you 
                in those "What to Expect When You're Deceased" pamphlets:<br /><br />
                
                <b>1.</b> You can walk through walls, but it never stops being cool<br />
                <b>2.</b> Time zones don't matter when you're timeless<br />
                <b>3.</b> The afterlife has terrible WiFi<br />
                <b>4.</b> Haunting is harder than it looks<br />
                <b>5.</b> Chains are SO last century<br />
                <b>6.</b> You'll miss eating. A lot.<br />
                <b>7.</b> Ectoplasm is a pain to clean up<br />
                <b>8.</b> Other ghosts are surprisingly judgmental<br />
                <b>9.</b> Possessing people is exhausting<br />
                <b>10.</b> You'll never finish your to-do list. Ever.<br /><br />
                
                Anyway, that's all for now. I need to go haunt a teenager's bedroom. 
                Classic ghost stuff, you know?<br /><br />
                
                - SpectralSteve
              </font>
              <hr />
              <font face="Arial" size="2" color="#4B0082">
                <b>💬 Comments:</b>
              </font>
              <br /><br />
              <table width="100%" border="1" cellPadding="8" bgcolor="#FFFFFF">
                <tr>
                  <td>
                    <font face="Verdana" size="2">
                      <b>PoltergeistPam:</b> Great post! Though I disagree about #5. 
                      Chains are making a comeback in the ghost fashion scene.
                    </font>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
        <br />
        <marquee behavior="alternate" bgcolor="#4B0082" width="85%">
          <font face="Impact" size="2" color="#FFFFFF">
            ✨ Subscribe to our newsletter! (We'll haunt your inbox) ✨
          </font>
        </marquee>
      </center>
    `
  },
  {
    title: "🎮 Cursed Downloads - Abandonware Archive 🎮",
    theme: "cursed_downloads",
    html: `
      <center>
        <br />
        <table width="90%" border="5" cellPadding="0" cellSpacing="0" bordercolor="#00FF00">
          <tr>
            <td bgcolor="#000000">
              <table width="100%" cellPadding="20">
                <tr>
                  <td>
                    <font face="Courier New" size="6" color="#00FF00">
                      &gt;&gt; CURSED DOWNLOADS &lt;&lt;
                    </font>
                    <br />
                    <font face="Arial" size="2" color="#FFFFFF">
                      <i>Software that refuses to die</i>
                    </font>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
        <br />
        <table width="90%" border="3" cellPadding="15" bgcolor="#FFFFCC">
          <tr>
            <td align="left">
              <font face="Arial" size="4" color="#CC0000">
                <b>⚠️ DISCLAIMER ⚠️</b>
              </font>
              <br />
              <font face="Verdana" size="2">
                All software on this site is haunted, cursed, or possessed. 
                Download at your own risk. We are not responsible for:
                <ul>
                  <li>Spontaneous computer possession</li>
                  <li>Files that delete themselves</li>
                  <li>Programs that run backwards</li>
                  <li>Demons emerging from your screen</li>
                  <li>Y2K bugs that traveled through time</li>
                </ul>
              </font>
            </td>
          </tr>
        </table>
        <br />
        <table width="90%" border="2" cellPadding="10" bgcolor="#E0E0E0">
          <tr bgcolor="#333333">
            <td><font color="#FFFFFF" face="Arial" size="2"><b>SOFTWARE</b></font></td>
            <td><font color="#FFFFFF" face="Arial" size="2"><b>VERSION</b></font></td>
            <td><font color="#FFFFFF" face="Arial" size="2"><b>CURSE LEVEL</b></font></td>
            <td><font color="#FFFFFF" face="Arial" size="2"><b>SIZE</b></font></td>
          </tr>
          <tr bgcolor="#FFFFFF">
            <td><font face="Courier New" size="2">💾 Netscape Navigator 4.0 (Zombie Edition)</font></td>
            <td><font face="Arial" size="2">4.666</font></td>
            <td><font face="Arial" size="2" color="#FF0000">⚠️⚠️⚠️⚠️⚠️</font></td>
            <td><font face="Arial" size="2">13.37 MB</font></td>
          </tr>
          <tr bgcolor="#F5F5F5">
            <td><font face="Courier New" size="2">💾 WinAmp (Possessed Skin Pack)</font></td>
            <td><font face="Arial" size="2">2.666</font></td>
            <td><font face="Arial" size="2" color="#FF6600">⚠️⚠️⚠️⚠️</font></td>
            <td><font face="Arial" size="2">6.66 MB</font></td>
          </tr>
          <tr bgcolor="#FFFFFF">
            <td><font face="Courier New" size="2">💾 RealPlayer (Haunted Codec)</font></td>
            <td><font face="Arial" size="2">8.0.666</font></td>
            <td><font face="Arial" size="2" color="#FFAA00">⚠️⚠️⚠️</font></td>
            <td><font face="Arial" size="2">4.20 MB</font></td>
          </tr>
          <tr bgcolor="#F5F5F5">
            <td><font face="Courier New" size="2">💾 ICQ (Ghost Protocol)</font></td>
            <td><font face="Arial" size="2">99b.666</font></td>
            <td><font face="Arial" size="2" color="#FF0000">⚠️⚠️⚠️⚠️⚠️</font></td>
            <td><font face="Arial" size="2">3.14 MB</font></td>
          </tr>
          <tr bgcolor="#FFFFFF">
            <td><font face="Courier New" size="2">💾 Bonzi Buddy (Demonic AI)</font></td>
            <td><font face="Arial" size="2">1.666</font></td>
            <td><font face="Arial" size="2" color="#CC0000">⚠️⚠️⚠️⚠️⚠️⚠️</font></td>
            <td><font face="Arial" size="2">666 KB</font></td>
          </tr>
        </table>
        <br />
        <marquee behavior="scroll" direction="left" bgcolor="#FF0000">
          <font face="Impact" size="3" color="#FFFFFF">
            🔥 NEW: Flash Player 6 (Now with 100% more security vulnerabilities!) 🔥
          </font>
        </marquee>
        <br />
        <font face="Arial" size="1" color="#999999">
          Cursed Downloads © 1999 | Total downloads: 666,666,666 | Viruses included: Yes
        </font>
      </center>
    `
  }
]

export const generateCursedPage = async () => {
  // Simulate AI generation delay
  await new Promise(resolve => setTimeout(resolve, 2000))
  
  // Pick random template
  const template = cursedPageTemplates[Math.floor(Math.random() * cursedPageTemplates.length)]
  
  return {
    title: template.title,
    html: template.html,
    theme: template.theme,
    css: `
      /* AI-Generated Cursed Styles */
      .summoned-page {
        animation: summonFadeIn 0.5s ease-out;
      }
      
      @keyframes summonFadeIn {
        from {
          opacity: 0;
          transform: scale(0.95);
        }
        to {
          opacity: 1;
          transform: scale(1);
        }
      }
      
      .summoned-page table {
        box-shadow: 3px 3px 8px rgba(0, 0, 0, 0.3);
      }
      
      .summoned-page marquee {
        animation: marqueeGlow 2s infinite;
      }
      
      @keyframes marqueeGlow {
        0%, 100% {
          box-shadow: 0 0 5px rgba(139, 0, 0, 0.5);
        }
        50% {
          box-shadow: 0 0 15px rgba(255, 0, 0, 0.8);
        }
      }
    `
  }
}

// Placeholder for actual OpenAI API integration via MCP
export const generateCursedPageWithAI = async (theme = 'random') => {
  // In production, this would:
  // 1. Use MCP configuration from .kiro/settings/mcp.json
  // 2. Call OpenAI API with prompt for retro HTML generation
  // 3. Parse and sanitize the response
  // 4. Return structured page data
  
  // For now, use template system
  return generateCursedPage()
}

export default {
  generateCursedPage,
  generateCursedPageWithAI
}
