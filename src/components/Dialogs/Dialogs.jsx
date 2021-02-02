import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';


const DialogItem = (props) => {

  let path = '/dialogs/' + props.id;

  return ( 
    <div className={s.dialog}>
      <NavLink to={path} activeClassName={s.active}>{props.name}</NavLink>
    </div>
   );
}

const Message = (props) => {
  return ( 
    <div className={s.message}>{props.message}</div>
   );
}
 
const Dialogs = (props) => {

  let dialogsData = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Victor'},
    {id: 6, name: 'Valera'},
  ];

  let messagesData = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How is your lesson'},
    {id: 3, message: 'Yo'},
  ];

  return ( 
    <div className={s.dialogs}>
      <div className={s.dialogsItems}>
        <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
        <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>

        {/* <DialogItem name='Dimych' id='1'/>
        <DialogItem name='Andrey' id='2'/>
        <DialogItem name='Sveta' id='3'/>
        <DialogItem name='Sasha' id='4'/>
        <DialogItem name='Victor' id='5'/>
        <DialogItem name='Valera' id='6'/> */}
      </div>
      <div className={s.messages}>
        <Message message={messagesData[0].message}/>
        <Message message={messagesData[1].message}/>
        <Message message={messagesData[2].message}/>

        {/* <Message message='Hi'/>
        <Message message='How is your lesson'/>
        <Message message='Yo'/> */}
      </div>
    </div>
   );
}
 
export default Dialogs;