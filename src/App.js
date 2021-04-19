import React, { Suspense } from "react";
import { Route, withRouter } from "react-router-dom";
import "./App.css";
import HeaderContainer from "./components/Header/HeaderContainer.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import UsersContainer from "./components/Users/UsersContainer.jsx";
import LoginPage from './components/Login/Login.jsx';
import {initializeApp} from './redux/appReducer.js';
import { connect } from "react-redux";
import { compose } from "redux";
import Preloader from "./components/common/Preloader/Preloader";
import store from './redux/redux-store.js';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { withSuspense } from "./hoc/withSuspense";

// import DialogsContainer from "./components/Dialogs/DialogsContainer.jsx";
// import ProfileContainer from "./components/Profile/ProfileContainer.jsx";

const DialogsContainer = React.lazy(() => import('./components/Dialogs/DialogsContainer.jsx'));
const ProfileContainer = React.lazy(() => import('./components/Profile/ProfileContainer.jsx'));


class App extends React.Component {

  componentDidMount() {
    this.props.initializeApp();
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />;
    }
    
    return (
      <div className="app-wrapper">
        <HeaderContainer />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path="/dialogs" render={withSuspense(DialogsContainer)}/>
          <Route path="/profile/:userId?" render={withSuspense(ProfileContainer)}/>
          <Route path='/users' render={() => <UsersContainer />} />
          <Route path='/login' render={() => <LoginPage />} />
        </div>
      </div>
    );
  }
};

let mapStateToProps = (state) => ({
  initialized: state.app.initialized,
})

let AppContainer = compose(
  withRouter,
  connect(mapStateToProps, {initializeApp})
)(App);

const SamuraiJSApp = (props) => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
  </BrowserRouter>
  );
}

export default SamuraiJSApp;
