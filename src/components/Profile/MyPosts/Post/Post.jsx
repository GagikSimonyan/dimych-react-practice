import React from 'react';
import s from './Post.module.css';

const Post = () => {
  return ( 
    <div className={s.item}>
        <img src="https://www.nj.com/resizer/h8MrN0-Nw5dB5FOmMVGMmfVKFJo=/450x0/smart/cloudfront-us-east-1.images.arcpublishing.com/advancelocal/SJGKVE5UNVESVCW7BBOHKQCZVE.jpg" alt=""/>
        Post 1
        <div>
          <span>like</span>
        </div>
    </div>
   );
}
 
export default Post;