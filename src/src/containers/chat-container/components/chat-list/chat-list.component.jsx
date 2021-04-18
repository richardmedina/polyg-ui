import React from 'react'
import {
  ListGroup
} from 'react-bootstrap'

import ChatListItem from './chat-list-item.component'

const ChatList = ({ chats }) =>
  <>
    <ListGroup>
      {
        (chats ?? [])
          .map(chat =>
            <ChatListItem
              key={chat.id}
              chat={chat} 
            />
          )
      }
    </ListGroup>
  </>

export default ChatList 