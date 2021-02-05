import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem.jsx';
import Message from './Message/Message.jsx';

 
const Dialogs = (props) => {

  let dialogsElements = props.state.dialogs.map((d) => <DialogItem name={d.name} id={d.id}/>);
  let messagesElements = props.state.messages.map((m) => <Message message={m.message}/>);

  let addMessageElement = React.createRef();

  let addMessage = () => {
    let messageText = addMessageElement.current.value;
    alert(messageText);
  }

  return ( 
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        {dialogsElements}
      </div>
      <div className={s.messages}>
        <div><textarea ref={addMessageElement} cols="30" rows="5"></textarea></div>
        <div><button onClick={addMessage}>Add Message</button></div>
        {messagesElements}
      </div>
    </div>
   );
}
 
export default Dialogs;