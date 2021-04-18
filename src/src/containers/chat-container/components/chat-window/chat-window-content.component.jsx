import React from 'react'
import { Card } from 'react-bootstrap'

import ChatWindowContentMessage from './chat-window-content-message.component'

const ChatWindowContent = ({ messages }) =>
  <Card.Body>
    {/* <Card.Title>Special title treatment</Card.Title>
    <Card.Text>
      With supporting text below as a natural lead-in to additional content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button> */}
    {
      (messages ?? []).map(
        message =>
          <ChatWindowContentMessage
            key={message.id}
            displayName={message.displayName}
            content={message.content}
            user={message.user}
            style={{
              marginBottom: '5px'
            }}
          />
      )
    }
  </Card.Body>

export default ChatWindowContent

