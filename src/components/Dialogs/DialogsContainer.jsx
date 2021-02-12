import React from 'react';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogsReducer.js';
import StoreContext from '../../StoreContext.js';
import Dialogs from './Dialogs';

 
const DialogsContainer = () => {

  return ( 
    <StoreContext.Consumer>
      {
        (store) => {

          let state = store.getState().dialogsPage;

          const onSendMessageClick = () => {
            store.dispatch(sendMessageCreator());
          };
        
          const onNewMessageChange = (body) => {
            store.dispatch(updateNewMessageBodyCreator(body));
          };

          return (
            <Dialogs 
              sendMessage={onSendMessageClick} 
              updateNewMessageBody={onNewMessageChange}
              dialogsPage={state}
            />
          )
        }
      }
    </StoreContext.Consumer>
   );
}
 
export default DialogsContainer;