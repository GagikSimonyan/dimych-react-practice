import React from 'react';
import s from './Users.module.css';

const Users = (props) => {

  if (props.users.length === 0) {
    props.setUsers([
      { id: 1, photoUrl: 'https://i1.sndcdn.com/artworks-000122978276-wfah7k-t500x500.jpg', followed: 'false', fullName: "Dimych", 
        status: "I am a boss", location: {city: 'Minsk', country: 'Belarus'} },
      { id: 2, photoUrl: 'https://i1.sndcdn.com/artworks-000122978276-wfah7k-t500x500.jpg', followed: 'true', fullName: "Gago", 
        status: "I am a developer", location: {city: 'Yerevan', country: 'Armenia'} },
      { id: 3, photoUrl: 'https://i1.sndcdn.com/artworks-000122978276-wfah7k-t500x500.jpg', followed: 'false', fullName: "Arturik", 
        status: "I am a beatmaker", location: {city: 'Garni', country: 'Armenia'} },
    ]);
  }


  return ( 
    <div>
      {
        props.users.map((u) => {

           return <div key={u.id}>
              <span>
                <div>
                  <img src={u.photoUrl} className={s.userPhoto} alt=''/>
                </div>
                <div>
                  {u.followed 
                    ? <button onClick={() => {props.unfollow(u.id)}}>Unfollow</button> 
                    : <button onClick={() => {props.follow(u.id)}}>Follow</button>}
                </div>
              </span>
              <span>
                <span>
                  <div>{u.fullName}</div>
                  <div>{u.status}</div>
                </span>
                <span>
                  <div>{u.location.country}</div>
                  <div>{u.location.city}</div>
                </span>
              </span>
            </div>
        })
      }
    </div>
   );
}
 
export default Users;