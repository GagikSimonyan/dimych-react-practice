

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
    },

    sidebar: {},
  },

  getState() {
    return this._state;
  },

  // эта функция вызывается, когда меняется state
  _callSubscriber() {
    console.log("State is changed");
  },

  addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0,
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = "";
    this._callSubscriber(this._state);
  },

  updateNewPostText(newText) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },

  subscribe(observer) {
    // переопределяем _callSubscriber что наверху
    this._callSubscriber = observer;
  }
};


export default store;

window.store = store;