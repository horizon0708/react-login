import React from 'react';
import { Nav, Navbar, NavItem, Button } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { connect } from 'react-redux';
import { userLogout } from '../actions/userAccActions';
import { bindActionCreators } from 'redux';

class Header extends React.Component {
  renderLogInOut() {
    return this.props.isLoggedIn ?
      <LinkContainer to="/logout" onClick={this.props.userLogout}>
        <Button bsStyle="danger" >logout</Button>
      </LinkContainer> :
      <LinkContainer to="/login" >
        <Button bsStyle="primary">login</Button>
      </LinkContainer>
  }

  render() {
    return (
      <Navbar inverse collapseOnSelect>
        <Navbar.Header>
          <LinkContainer to="/">
            <Navbar.Brand>
              <span>React-Router and Authentication</span>
            </Navbar.Brand>
          </LinkContainer>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Navbar.Form pullRight>
            {this.renderLogInOut()}
          </Navbar.Form>
          <Nav pullRight>
            <LinkContainer to="/about">
              <NavItem eventKey={1}>not-so-secret-about</NavItem>
            </LinkContainer>
            <LinkContainer to="/profile">
              <NavItem eventKey={2}>super-secret-profile</NavItem>
            </LinkContainer>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    isLoggedIn: state.userAcc.isLoggedIn,
  }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ userLogout }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)