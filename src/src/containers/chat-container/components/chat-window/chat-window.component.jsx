import React from 'react'
import {
  Card,
  Button,
  Form
} from 'react-bootstrap'
import ChatWindowContent from './chat-window-content.component'
import ChatWindowFooter from './chat-window-footer.component'
import ChatWindowHeader from './chat-window-header.component'

class ChatWindow extends React.Component {
  render(){
    const {
      style,
      chat
    } = this.props

    const {
      icon,
      title,
      users
    } = chat

    const chatDesc = (users ?? [])
      .map(user => user.displayName).join(', ')

    return (
      <Card style={{ ...style }}>
        <ChatWindowHeader
          icon={icon}
          title={title}
          description={chatDesc}
        />
        <ChatWindowContent
          messages={
            (chat.messages ?? [])
              .map(message => ({
                id: message.id,
                content: message.content,
                user: chat.users.find(u => u.id === message.userId),
                date: message.date,
                type: message.type
              }))
          }
        />
        <ChatWindowFooter />
      </Card>
    )
  }
}

export default ChatWindow