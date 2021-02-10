import dialogsReducer from './dialogsReducer.js';
import profileReducer from './profileReducer.js';
import sidebarReducer from './sidebarReducer.js';


let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hi, how are you?", likesCount: 0 },
        { id: 2, message: "It is my first post", likesCount: 23 },
      ],
      newPostText: "Gagzito",
    },

    dialogsPage: {
      dialogs: [
        { id: 1, name: "Dimych" },
        { id: 2, name: "Andrey" },
        { id: 3, name: "Sveta" },
        { id: 4, name: "Sasha" },
        { id: 5, name: "Victor" },
        { id: 6, name: "Valera" },
      ],

      messages: [
        { id: 1, message: "Hi" },
        { id: 2, message: "How is your lesson" },
        { id: 3, message: "Yo" },
      ],

      newMessageBody: '',
    },

    sidebar: {},
  },
  // эта функция вызывается, когда меняется state
  _callSubscriber() {
    console.log("State is changed");
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    // переопределяем _callSubscriber что наверху
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);
    this._callSubscriber(this._state);
  }
};

export default store;

window.store = store;