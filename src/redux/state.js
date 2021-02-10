const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SEND_MESSAGE = 'UPDATE-NEW-POST-SEND_MESSAGE';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE_BODY';

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
    if (action.type  === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._state.profilePage.newPostText = "";
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newText;
      this._callSubscriber(this._state);
    } else if (action.type === SEND_MESSAGE) {
      let body = { id: 4, message: this._state.dialogsPage.newMessageBody };
      this._state.dialogsPage.messages.push(body);
      this._state.dialogsPage.newMessageBody = '';
      this._callSubscriber(this._state);
    } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
      this._state.dialogsPage.newMessageBody = action.body;
      this._callSubscriber(this._state);
    }
  }
};

export const addPostActionCreator = () => ({type: ADD_POST});

export const updateNewPostTextActionCreator = (text) => {
  return {type: UPDATE_NEW_POST_TEXT, newText: text};
};

export const sendMessageCreator = () => ({type: SEND_MESSAGE});

export const updateNewMessageBodyCreator = (body) => {
  return {type: UPDATE_NEW_MESSAGE_BODY, body: body};
};


export default store;

window.store = store;