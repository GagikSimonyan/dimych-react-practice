const SEND_MESSAGE = "UPDATE-NEW-POST-SEND_MESSAGE";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE_BODY";

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {

  switch (action.type) {
    case SEND_MESSAGE:
      let body = state.newMessageBody;
      return {
        ...state,
        newMessageBody: '',
        messages: [...state.messages, { id: 4, message: body }],
      };
    case UPDATE_NEW_MESSAGE_BODY:
      return {
        ...state,
        newMessageBody: action.body
      };
    default:
      return state;
  }
};

export default dialogsReducer;

export const sendMessageCreator = () => ({type: SEND_MESSAGE});

export const updateNewMessageBodyCreator = (body) => {
  return {type: UPDATE_NEW_MESSAGE_BODY, body: body};
};
