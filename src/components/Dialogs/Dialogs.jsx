import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem.jsx';
import Message from './Message/Message.jsx';

 
const Dialogs = (props) => {

  let state = props.dialogsPage;

  let dialogsElements = state.dialogs.map((d) => <DialogItem name={d.name} key={d.id} id={d.id}/>);
  let messagesElements = state.messages.map((m) => <Message message={m.message} key={m.id}/>);
  let newMessageBody = state.newMessageBody;

  const onSendMessageClick = () => {
    props.sendMessage();
  };

  const onNewMessageChange = (e) => {
    let body = e.target.value;
    props.updateNewMessageBody(body);
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