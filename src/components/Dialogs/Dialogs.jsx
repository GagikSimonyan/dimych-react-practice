import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem.jsx';
import Message from './Message/Message.jsx';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/state.js';

 
const Dialogs = (props) => {

  let state = props.store.getState().dialogsPage;

  let dialogsElements = state.dialogs.map((d) => <DialogItem name={d.name} id={d.id}/>);
  let messagesElements = state.messages.map((m) => <Message message={m.message}/>);
  let newMessageBody = state.newMessageBody;

  const onSendMessageClick = () => {
    props.store.dispatch(sendMessageCreator());
  };

  const onNewMessageChange = (e) => {
    let body = e.target.value;
    props.store.dispatch(updateNewMessageBodyCreator(body));
  };

  return ( 
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        <div><textarea onChange={onNewMessageChange} value={newMessageBody} placeholder='Enter your message' cols="30" rows="5"></textarea></div>
        <div><button onClick={onSendMessageClick}>Send</button></div>
        <div>{messagesElements}</div>
      </div>
    </div>
   );
}
 
export default Dialogs;