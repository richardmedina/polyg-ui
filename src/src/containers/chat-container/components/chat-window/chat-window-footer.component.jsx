import React from 'react'

import { Card, Form, Button } from 'react-bootstrap'

const ChatWindowFooter = () =>
  <Card.Footer
  style={{
    display: 'flex',
    flexDirection: 'row'
  }}
  >
    <Form.Control
      type='text'
      placeholder='Type a message'
      style={{
        flex: '1 0',
      }}
    />

    <Button 
      type='button'
      variant='success'
      style={{
        flex: '0 0',
        marginLeft: '10px'
      }}
    >
      Send
    </Button>
  </Card.Footer>

export default ChatWindowFooter
