import React from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogsReducer.js';
import Dialogs from './Dialogs';

 
const DialogsContainer = (props) => {

  let state = props.store.getState().dialogsPage;

  const onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  };

  const onNewMessageChange = (body) => {
    props.store.dispatch(updateNewMessageBodyCreator(body));
  };

  return ( 
    <Dialogs 
      sendMessage={onSendMessageClick} 
      updateNewMessageBody={onNewMessageChange}
      dialogsPage={state}
    />
   );
}
 
export default DialogsContainer;