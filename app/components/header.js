import React from 'react';
import { Nav, Navbar, NavItem } from 'react-bootstrap';


class Header extends React.Component{

    render(){
        return(
            <Navbar inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="/">React-Router and Authentication</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight>
        <NavItem eventKey={1} href="/login">Login</NavItem>
        <NavItem eventKey={2} href="/profile">Profile</NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
        )
    }
}

export default Header;