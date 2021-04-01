import React from 'react';
import { Field, reduxForm } from 'redux-form';
import s from './MyPosts.module.css';
import Post from './Post/Post.jsx';


const AddNewPostForm = (props) => {
  return ( 
    <form onSubmit={props.handleSubmit}>
      <div>
          <Field component='textarea' name='newPostText' cols="30" rows="5" />
        </div>
        <div>
          <button>Add post</button>
        </div>
    </form>
   );
}

let AddNewPostFormRedux = reduxForm({form: 'ProfileAddNewPostForm'})(AddNewPostForm);

const MyPosts = (props) => {

  let postsElements = props.posts.map((p) => <Post message={p.message} likesCount={p.likesCount}/>);

  let onAddPost = (values) => {
    props.addPost(values.newPostText);
  };

  return ( 
    <div className={s.postsBlock}>
      <h3>My Posts</h3>
      <AddNewPostFormRedux onSubmit={onAddPost} />
      <div className={s.posts}>
        {postsElements}
      </div>
    </div>
   );
}
 
export default MyPosts;