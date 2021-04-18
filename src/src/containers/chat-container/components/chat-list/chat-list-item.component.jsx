import React from 'react'
import { ListGroup } from 'react-bootstrap'
import defaultGotchi from 'assets/mycleverapp.png'

const ChatListItem = ({ chat }) => {
  return (
    <ListGroup.Item
      style={{
        display: 'flex',
        flexDirection: 'row'
      }}
    >
        <img
          src={chat.gotchi ?? defaultGotchi}
          style={{
            width: '50px',
            height: '50px',
            flex: '0 1'
          }}
        />
        <div
          style={{
            flex: '1 0'
          }}
        >
          <div>
            { chat.title }
          </div>
          <div
            style={{
              color: '#666',
              fontSize: '0.7em'
            }}
          >
            This is just a message
          </div>
        </div>
        <div
          style={{
            flex: '0 0',
            color: '#666',
            fontSize: '0.7em'
          }}
        >
          Yesterday
        </div>
    </ListGroup.Item>
  )
}
export default ChatListItem