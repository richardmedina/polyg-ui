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
      icon,
      title,
      description
    } = this.props

    return (
      <Card style={{ ...style }}>
        <ChatWindowHeader
          icon={icon}
          title={title}
          description={description}
        />
        <ChatWindowContent />
        <ChatWindowFooter />
      </Card>
    )
  }
}

ChatWindow.defaultProps = {
  icon: null,
  title: 'Privada Real',
  description: 'This is just a description'
}

export default ChatWindow