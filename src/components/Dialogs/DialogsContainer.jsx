import React from 'react';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthReirect.js';
import { sendMessageCreator, updateNewMessageBodyCreator } from '../../redux/dialogsReducer.js';
import Dialogs from './Dialogs';


let mapStateToProps = (state) => {
  return {
    dialogsPage: state.dialogsPage,
  };
}

let mapDispatchToProps = (dispatch) => {
  return {
    updateNewMessageBody: (body) => {
      dispatch(updateNewMessageBodyCreator(body));
    },
    sendMessage: () => {
      dispatch(sendMessageCreator());
    }
  };
}

let AuthRedirectComponent = withAuthRedirect(Dialogs);

// let AuthRedirectComponent = (props) => {
//   if (!this.props.isAuth) return <Redirect to={'/login'} />;
//   return <Dialogs {...props} />;
// }

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);
 
export default DialogsContainer;