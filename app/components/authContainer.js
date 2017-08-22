import React from 'react';
import setRedirectUrl from '../actions/userAccActions';
import {connect} from 'react-redux';
import browserHistory from 'react-router';


class AuthContainer extends React.Component {
  componentDidMount() {
    if (!this.props.isLoggedIn) {
      // set the current url/path for future redirection (we use a Redux action)
      // then redirect (we use a React Router method)
      //setRedirectUrl(this.props.currentURL);
      //browserHistory.replace("/login")
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
function mapStateToProps(state, ownProps) {
  return {
    isLoggedIn: state.loggedIn,
    currentURL: ownProps.location.pathname
  }
}

export default connect(mapStateToProps)(AuthContainer)