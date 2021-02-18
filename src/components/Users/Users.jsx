import * as axios from 'axios';
import React from 'react';
import s from './Users.module.css';
import userPhoto from './../../assets/images/biggie.jpg';

class Users extends React.Component {

  componentDidMount() {
    axios.get('https://social-network.samuraijs.com/api/1.0/users').then(responce => {
      this.props.setUsers(responce.data.items);
    });
  }

  render() {
    return (
      <div>
      {
        this.props.users.map((u) => {

           return <div key={u.id}>
              <span>
                <div>
                  <img src={u.photos.small ? u.photos.small : userPhoto} className={s.userPhoto} alt=''/>
                </div>
                <div>
                  {u.followed 
                    ? <button onClick={() => {this.props.unfollow(u.id)}}>Unfollow</button> 
                    : <button onClick={() => {this.props.follow(u.id)}}>Follow</button>}
                </div>
              </span>
              <span>
                <span>
                  <div>{u.name}</div>
                  <div>{u.status}</div>
                </span>
                <span>
                  <div>{'u.location.country'}</div>
                  <div>{'u.location.city'}</div>
                </span>
              </span>
            </div>
        })
      }
    </div>
    );
  }
}


export default Users;