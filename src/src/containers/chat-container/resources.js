export const userChats = {
  currentUser: {
    id: 1,
    displayName: 'ricki9@gmail.com'
  },
  chats: [
    {
      id: 1,
      title: 'Privada Real',
      icon: null,
      users: [
        {
          id: 1,
          displayName: 'Ricardo Medina',
          gotchi: null,
          active: true
        },
        {
          id: 2,
          displayName: 'Richard Medina',
          gotchi: null,
          active: true
        }
      ],
      messages: [
        {
          id: 1,
          date: new Date(2020, 1, 1, 13, 25),
          userId: 1,
          type: 'text',
          content: {
            text: 'Hello World'
          }
        },
        {
          id: 2,
          date: new Date(2020, 1, 1, 13, 25),
          userId: 2,
          type: 'text',
          content: {
            text: 'Hello World2'
          }
        },
      ]
    },
    {
      id: 2,
      title: 'Richard Medina',
      icon: null,
      users: {
        id: 1,
        displayName: 'Richard Medina',
        gotchi: null,
        active: true
      },
      messages: []
    }
  ]
}