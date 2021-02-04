let state = {
  profilePage: {
    posts: [
      { id: 1, message: 'Hi, how are you?', likesCount: 0 },
      { id: 2, message: 'It is my first post', likesCount: 23 },
    ],
  },

  dialogsPage: {
    dialogs: [
      {id: 1, name: 'Dimych'},
      {id: 2, name: 'Andrey'},
      {id: 3, name: 'Sveta'},
      {id: 4, name: 'Sasha'},
      {id: 5, name: 'Victor'},
      {id: 6, name: 'Valera'},
    ],
    
    messages: [
      {id: 1, message: 'Hi'},
      {id: 2, message: 'How is your lesson'},
      {id: 3, message: 'Yo'},
    ]
  },

  sidebar: {}
}

export default state;