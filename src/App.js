import React from "react";
import { Route } from "react-router-dom";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import DialogsContainer from "./components/Dialogs/DialogsContainer.jsx";
import UsersContainer from "./components/Users/UsersContainer.jsx";
import ProfileContainer from "./components/Profile/ProfileContainer.jsx";

const App = () => {
  return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path="/dialogs" render={() => <DialogsContainer />}/>
          <Route path="/profile/:userId?" render={() => <ProfileContainer />}/>
          <Route path='/users' render={() => <UsersContainer />} />
        </div>
      </div>
  );
};

export default App;
