import React from 'react'
import ChatList from './components/chat-list/chat-list.component'
import ChatWindow from './components/chat-window/chat-window.component'

class ChatContainer extends React.Component {
  render(){
    const { chats } = this.props

    return (
      <div>
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
              flexBasis: '250px'
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
          <ChatWindow
            style={{
              marginLeft: '10px',
              marginRight: '10px'
            }}
          />
        </div>
        </div>
      </div>
    )
  }
}

ChatContainer.defaultProps = {
  currentUser: 'ricki9@gmail.com',
  chats: [
    {
      id: 1,
      users: [
        {
          id: 1,
          displayName: 'Ricardo',
        }
      ],
      messages: [
        {
          date: new Date(2020, 1, 1, 13, 25),
          remitent: {
            user: {
              id: 1,
              displayName: 'Some User',
              gotchi: null
            }
          }
        },
        {
          date: new Date(2020, 1, 1, 13, 28),
          remitent: {
            user: {
              id: 1,
              displayName: 'Some User',
              gotchi: null
            }
          }
        },
      ]
    },
    {
      id: 2,
      users: [
        {
          id: 2,
          displayName: 'Richard'
        }
      ]
    }
  ]
}

export default ChatContainer
