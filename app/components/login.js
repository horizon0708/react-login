import React from 'react';
import { Form, FormGroup, FormControl, Button, Well, Panel ,ControlLabel} from 'react-bootstrap';
import { userLogin } from '../actions/userAccActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { LinkContainer } from 'react-router-bootstrap';

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

    handleEmailChange = (e) => {
        this.setState({ email: e.target.value });
    }

    handlePasswordChange = (e) => {
        this.setState({ password: e.target.value });
    }

    render() {
        return (
            <Panel>
                <Form>
                    <FormGroup>
                        <ControlLabel>Email</ControlLabel>
                        <FormControl
                            type="email"
                            value={this.state.email}
                            onChange={this.handleEmailChange}
                        ></FormControl>
                    </FormGroup>

                    <FormGroup>
                        <ControlLabel>Password</ControlLabel>
                        <FormControl
                            type="password"
                            value={this.state.password}
                            onChange={this.handlePasswordChange}
                        ></FormControl>
                    </FormGroup>


                    <Button onClick={this.handleLogin}>Log in</Button>
                    <LinkContainer to="/signup">
                        <Button>Sign Up</Button>

                    </LinkContainer>
                </Form>
            </Panel>
        )
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ userLogin }, dispatch)
}

export default connect(null, mapDispatchToProps)(Login);