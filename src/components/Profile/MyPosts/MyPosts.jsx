import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post.jsx';

const MyPosts = () => {

  let postsData = [
    {id: 1, message: 'Hi, how are you?', likesCount: 0},
    {id: 2, message: 'It is my first post', likesCount: 23},
  ];

  return ( 
    <div className={s.postsBlock}>
      <h3>My Posts</h3>
      <div>
        <div>
          <textarea name="" id="" cols="30" rows="5"></textarea>
        </div>
        <div>
          <button>Add post</button>
        </div>
      </div>
      <div className={s.posts}>
        <Post message={postsData[0].message} likesCount={postsData[0].likesCount}/>
        <Post message={postsData[1].message} likesCount={postsData[1].likesCount}/>

        {/* <Post message='Hi, how are you?' likesCount='0'/>
        <Post message='It is my first post' likesCount='23'/> */}
      </div>
    </div>
   );
}
 
export default MyPosts;