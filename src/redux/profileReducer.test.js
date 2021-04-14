import React from 'react';
import profileReducer, { addPostActionCreator } from "./profileReducer";


test('length of posts should be incremented', () => {
  let action = addPostActionCreator('blab la');
  let state = {
    posts: [
      { id: 1, message: "Hi, how are you?", likesCount: 0 },
      { id: 2, message: "It is my first post", likesCount: 23 },
    ]
  }

  let newState = profileReducer(state, action);

  expect(newState.posts.length).toBe(5);
});
