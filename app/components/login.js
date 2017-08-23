import React from 'react';
import { Alert, Row, Col, Form, FormGroup, FormControl, Button, Well, Panel, ControlLabel } from 'react-bootstrap';
import { userLogin } from '../actions/userAccActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { LinkContainer } from 'react-router-bootstrap';
import { browserHistory } from 'react-router';
import FlashMessage  from './flashMessage';


class Login extends React.Component {
    constructor() {
        super();
        this.state = {
            email: '',
            password: ''
        }
    }


    handleLogin = () => {
        const user = {
            email: this.state.email,
            password: this.state.password
        }
        this.props.userLogin(user);
    }
    handleFieldChange = (e, fieldName) => {
        let field = {};
        field[fieldName] = e.target.value
        this.setState(field);
    }

    render() {
        return (
            <Row>
                <Col>
                    <h1>Log in</h1>
                    <Panel>
                        <Form>
                            <FormGroup>
                                <ControlLabel>Email</ControlLabel>
                                <FormControl
                                    type="email"
                                    value={this.state.email}
                                    onChange={(e) => this.handleFieldChange(e, 'email')}
                                ></FormControl>
                            </FormGroup>

                            <FormGroup>
                                <ControlLabel>Password</ControlLabel>
                                <FormControl
                                    type="password"
                                    value={this.state.password}
                                    onChange={(e) => this.handleFieldChange(e, 'password')}
                                ></FormControl>
                            </FormGroup>


                            <Button onClick={this.handleLogin}>Log in</Button>
                            <LinkContainer to="/signup">
                                <Button>Sign Up</Button>

                            </LinkContainer>
                        </Form>
                    </Panel>
                </Col>
            </Row>

        )
    }
}
function mapStateToProps(state, ownProps) {
    return {
        isLoggedIn: state.userAcc.isLoggedIn
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ userLogin }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);