const SEND_MESSAGE = "UPDATE-NEW-POST-SEND_MESSAGE";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE-NEW-MESSAGE_BODY";

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case SEND_MESSAGE:
      let body = { id: 4, message: state.newMessageBody };
      state.messages.push(body);
      state.newMessageBody = "";
      return state;
    case UPDATE_NEW_MESSAGE_BODY:
      state.newMessageBody = action.body;
      return state;
    default:
      return state;
  }
};

export default dialogsReducer;

export const sendMessageCreator = () => ({type: SEND_MESSAGE});

export const updateNewMessageBodyCreator = (body) => {
  return {type: UPDATE_NEW_MESSAGE_BODY, body: body};
};
