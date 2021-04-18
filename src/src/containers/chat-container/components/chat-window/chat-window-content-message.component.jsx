import React from 'react'

const ChatWindowContentMessage = ({ user, content, style}) =>
  <div style={{ ...style }}>
    <div 
      style={{
        fontWeight: 'bold',
        // fontSize: '0.7em'
      }}
    >
      { user.displayName } says:
    </div>
    <div
      style={{
        fontSize: '0.7em'
      }}
    >
      { content.text }
    </div>
  </div>

export default ChatWindowContentMessage
