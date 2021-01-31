import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post.jsx';

const MyPosts = () => {
  return ( 
    <div>
      My Posts
      <div>
        <textarea name="" id="" cols="30" rows="5"></textarea>
        <button>Add post</button>
      </div>
      <div className={s.posts}>
        <Post/>
        <Post/>
      </div>
    </div>
   );
}
 
export default MyPosts;