import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import { logout } from './../../redux/authReducer.js';

const Header = (props) => {
  return ( 
    <header className={s.header}>
      <img src="https://img.pngio.com/logo-business-png-free-logo-businesspng-transparent-images-business-logo-png-900_760.png" alt=""/>

      <div className={s.loginBlock}>
        {props.isAuth 
          ? <div>{props.login} - <button onClick={props.logout}>Log out</button> </div>  
          : <NavLink to={'/login'}>Login</NavLink>}
      </div>
    </header>
   );
}
 
export default Header;