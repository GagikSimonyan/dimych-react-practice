import { combineReducers, createStore } from "redux";
import profileReducer from './profileReducer.js';
import dialogsReducer from './dialogsReducer.js';
import sidebarReducer from './sidebarReducer.js';

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer
});

let store = createStore(reducers);

window.store = store;

export default store;