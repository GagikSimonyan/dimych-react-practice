import { rerenderEntireTree } from './../render.js';

let state = {
  profilePage: {
    posts: [
      { id: 1, message: 'Hi, how are you?', likesCount: 0 },
      { id: 2, message: 'It is my first post', likesCount: 23 },
    ],
    newPostText: 'Gagzito',
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

window.state = state;

export let addPost = () => {
  let newPost = {id: 5, message: state.profilePage.newPostText, likesCount: 0};
  state.profilePage.posts.push(newPost);
  state.profilePage.newPostText = '';
  rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};

export default state;

