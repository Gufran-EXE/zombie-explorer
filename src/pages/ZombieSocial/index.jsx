import React from 'react'

const ZombieSocial = () => {
  return (
    <div className="retro-page">
      <center>
        <table width="100%" border="3" cellPadding="0" cellSpacing="0" bgcolor="#3B5998">
          <tr>
            <td>
              <table width="100%" cellPadding="10">
                <tr>
                  <td bgcolor="#FFFFFF">
                    <font face="Arial" size="6" color="#3B5998">
                      <b>🧟 ZombieBook 🧟</b>
                    </font>
                    <br />
                    <font face="Verdana" size="2" color="#666666">
                      <i>Connect with the undead</i>
                    </font>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>

        <br />

        <table width="90%" border="2" cellPadding="15" cellSpacing="0" bgcolor="#EEEEEE">
          <tr>
            <td width="30%" valign="top" bgcolor="#D3D3D3">
              <font face="Comic Sans MS" size="3" color="#000000">
                <b>👤 Your Profile</b>
              </font>
              <hr />
              <p>
                <font face="Arial" size="2">
                  <b>Name:</b> Undead User<br />
                  <b>Status:</b> Decomposing<br />
                  <b>Friends:</b> 666<br />
                  <b>Brains eaten:</b> 42
                </font>
              </p>
              <hr />
              <font face="Verdana" size="2">
                <b>🎃 Haunted Friends:</b><br />
                • Zombie Steve<br />
                • Ghost Gary<br />
                • Vampire Vicky<br />
                • Skeleton Sam<br />
              </font>
            </td>
            <td width="70%" valign="top" bgcolor="#FFFFFF">
              <font face="Arial" size="3" color="#000000">
                <b>📝 Status Updates from Beyond</b>
              </font>
              <hr />
              
              <table width="100%" border="1" cellPadding="8" bgcolor="#F0F0F0">
                <tr>
                  <td>
                    <font face="Verdana" size="2">
                      <b>Zombie Steve</b> - 2 hours ago<br />
                      "Just rose from my grave. Feeling fresh! 🧟‍♂️"
                    </font>
                  </td>
                </tr>
              </table>
              <br />

              <table width="100%" border="1" cellPadding="8" bgcolor="#F0F0F0">
                <tr>
                  <td>
                    <font face="Verdana" size="2">
                      <b>Ghost Gary</b> - 5 hours ago<br />
                      "Walked through a wall today. Still got it! 👻"
                    </font>
                  </td>
                </tr>
              </table>
              <br />

              <table width="100%" border="1" cellPadding="8" bgcolor="#F0F0F0">
                <tr>
                  <td>
                    <font face="Verdana" size="2">
                      <b>Vampire Vicky</b> - 1 day ago<br />
                      "Sunlight is overrated anyway. 🦇"
                    </font>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>

        <br />
        <marquee behavior="scroll" direction="left" bgcolor="#FF0000" width="90%">
          <font color="#FFFFFF" face="Impact" size="3">
            ⚠️ WARNING: This social network may contain traces of ectoplasm ⚠️
          </font>
        </marquee>
        <br />

        <font face="Arial" size="1" color="#999999">
          © 2000 ZombieBook Inc. | Best viewed in Internet Explorer 6 | 
          <img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7" width="20" height="10" alt="counter" />
          Visitor #666,666
        </font>
      </center>
    </div>
  )
}

export default ZombieSocial
