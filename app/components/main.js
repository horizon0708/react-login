"use strict"
import React from 'react';
import Header from './header';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';



class Main extends React.Component {

    componentDidUpdate(prevProps) {
        const { dispatch, redirectUrl } = this.props
        const isLoggingOut = prevProps.isLoggedIn && !this.props.isLoggedIn
        const isLoggingIn = !prevProps.isLoggedIn && this.props.isLoggedIn

        if (isLoggingIn) {
            dispatch(navigateTo(redirectUrl))
        } else if (isLoggingOut) {
            // do any kind of cleanup or post-logout redirection here
        }
    }

    render() {
        return (
            <div>
                <Header />
                {this.props.children}
            </div>
        );
    }
}
function mapStateToProps(state, ownProps) {
  return {
    isLoggedIn: state.loggedIn,
    currentURL: ownProps.location.pathname
  }
}

export default connect(mapStateToProps)(Main)