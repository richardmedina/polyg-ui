import React from 'react'
import ChatList from './components/chat-list/chat-list.component'
import ChatWindow from './components/chat-window/chat-window.component'

import { userChats } from './resources'
class ChatContainer extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      selectedChatId: 1
    }
  }

  render(){
    const { chats } = this.props
    const { selectedChatId } =this.state

    const selectedChat = chats.find(chat => chat.id === selectedChatId)

    return (
      <div style={{ height: '100%', border: 'solid 1px #ddd'}}>
        <h2>
          Chat Container
        </h2>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row'
          }}
        >
          <div
            style={{
              flex: '0 0',
              flexBasis: '400px'
            }}
          >
          <ChatList
            chats={chats}
          />
        </div>
        <div
          style={{
            flex: '1 0'
          }}
        >
          {
            selectedChatId > 0 && selectedChat &&
            <ChatWindow
              chat={selectedChat}
              // icon={selectedChat.icon}
              // chat={selectedChat.title}
              // description={(selectedChat.users ?? []).map(user => user.displayName).join(', ')}
              style={{
                marginLeft: '10px', 
                marginRight: '10px',
              }}
            />
          }
        </div>
        </div>
      </div>
    )
  }
}

ChatContainer.defaultProps = {
  ...userChats
}

export default ChatContainer
