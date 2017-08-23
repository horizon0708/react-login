"use strict"
import React from 'react';
import Header from './header';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {browserHistory} from 'react-router';
import { Row, Col } from 'react-bootstrap';

import FlashMessage from './flashMessage';

class Main extends React.Component {

    componentDidUpdate(prevProps) {
        const { dispatch, redirectUrl } = this.props
        const isLoggingOut = prevProps.isLoggedIn && !this.props.isLoggedIn
        const isLoggingIn = !prevProps.isLoggedIn && this.props.isLoggedIn

        if (isLoggingIn) {
            this.props.redirectURL ? browserHistory.push(this.props.redirectURL) : browserHistory.redirect('about');
        } else if (isLoggingOut) {
            browserHistory.push('/logout');
            // do any kind of cleanup or post-logout redirection here
        }
    }

    render() {
        return (
            <div>
                <Header />

                    

                <Row>
                    <Col xs={12} sm={10} smOffset={1} style={{position: 'relative'}}>
                        <FlashMessage />
                        <div style={{paddingTop: '30px'}}>
                        {this.props.children}
                        </div>
                    </Col>
                </Row>
                
            </div>
        );
    }
}
function mapStateToProps(state, ownProps) {
  return {
    isLoggedIn: state.userAcc.isLoggedIn,
    redirectURL: state.userAcc.curUrl,
    currentURL: ownProps.location.pathname
  }
}

export default connect(mapStateToProps)(Main)