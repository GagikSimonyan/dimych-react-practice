// import logo from './logo.svg';
import React from "react";
import "./App.css";

const App = () => {
  return (
    <div className='app-wrapper'>
      <header className='header'>
        <img src="https://img.pngio.com/logo-business-png-free-logo-businesspng-transparent-images-business-logo-png-900_760.png" alt=""/>
      </header>
      <nav className='nav'>
        <div><a href="#s">Profile</a></div>
        <div><a href="#s">Messages</a></div>
        <div><a href="#s">News</a></div>
        <div><a href="#s">Music</a></div>
        <div><a href="#s">Settings</a></div>
      </nav>
      <div className='content'>
        <div>
          <img src="https://images.ctfassets.net/hrltx12pl8hq/7yQR5uJhwEkRfjwMFJ7bUK/dc52a0913e8ff8b5c276177890eb0129/offset_comp_772626-opt.jpg?fit=fill&w=800&h=300" alt=""/>
        </div>
        <div>ava + description</div>
        <div>
          My Posts
          <div>
            New Post
          </div>
          <div>
            <div>post 1</div>
            <div>post 2</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
