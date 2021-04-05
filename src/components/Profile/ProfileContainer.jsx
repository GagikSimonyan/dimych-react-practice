import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile.jsx';
import { getUserProfile, getStatus, updateStatus } from './../../redux/profileReducer.js';
import { Redirect, withRouter } from 'react-router-dom';
import { withAuthRedirect } from './../../hoc/withAuthReirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if (!userId) {
      debugger;
      userId = this.props.authorizeduserId;
    }
    this.props.getUserProfile(userId);
    this.props.getStatus(userId);
  }

  render() {
    return (
      <Profile {...this.props} profile={this.props.profile} updateStatus={this.props.updateStatus} />
    );
  }
}

let mapStateToProps = (state) => { 
  return {
    profile: state.profilePage.profile, 
    status: state.profilePage.status, 
    authorizeduserId: state.auth.userId,
    isAuth: state.auth.isAuth,
  };
}

export default compose(
  connect(mapStateToProps, { getUserProfile, getStatus, updateStatus }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
