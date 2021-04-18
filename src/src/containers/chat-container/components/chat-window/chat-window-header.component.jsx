import React from 'react'

import {
  Card
} from 'react-bootstrap'

import defaultGotchi from 'assets/mycleverapp.png'

const ChatWindowHeader = ({ icon, title, description }) =>
  <Card.Header
  style={{
    display: 'flex',
    flexDirection: 'row'
  }}
  >
    <img
      src={icon ?? defaultGotchi}
      style={{
        width: '30px',
        height: '30px',
        flex: '0 1'
      }}
    />
    <div
      style={{
        flex: '1 0'
      }}
    >
      <div>
        { title }
      </div>
      <div
        style={{
          color: '#666',
          fontSize: '0.7em'
        }}
      >
        { description }
      </div>
    </div>
  </Card.Header>

export default ChatWindowHeader
