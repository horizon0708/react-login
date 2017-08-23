import React from 'react';
import {setRedirectUrl, pushFlashMessage} from '../actions/userAccActions';
import {connect} from 'react-redux';
import {browserHistory} from 'react-router';
import { bindActionCreators } from 'redux';

class AuthContainer extends React.Component {
  componentDidMount() {
    if (!this.props.isLoggedIn) {
      this.props.setRedirectUrl(this.props.currentURL);
      const promptLogin ={
        style: "danger",
        title: "Holy Moly!",
        text: "You must log in first to access this super secret profile page!"
      }
      
      this.props.pushFlashMessage(promptLogin);
      browserHistory.push("login");
    }
  }

  render() {
    if (this.props.isLoggedIn) {  
      return this.props.children
    } else {
      return null
    }
  }
}

// Grab a reference to the current URL. If this is a web app and you are
// using React Router, you can use `ownProps` to find the URL. Other
// platforms (Native) or routing libraries have similar ways to find
// the current position in the app.
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ setRedirectUrl, pushFlashMessage }, dispatch)
}

function mapStateToProps(state, ownProps) {
  return {
    isLoggedIn: state.userAcc.isLoggedIn,
    currentURL: ownProps.location.pathname
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthContainer)