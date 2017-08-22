import React from 'react';
import { Form , FormGroup, Panel, FormControl ,ControlLabel, Button} from 'react-bootstrap';
import { userSignup } from '../actions/userAccActions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


class Signup extends React.Component{
    constructor(){
        super();
        this.state={
            email: '',
            password: ''
        }
    }

    handleSignUp =() =>{
        const user = {
            email: this.state.email,
            password: this.state.password
        }
        this.props.userSignup(user);
    }

    handleEmailChange = (e) =>{
        this.setState({email: e.target.value});
    }

    handlePasswordChange = (e) =>{
        this.setState({password: e.target.value});
    }
    
    render(){
        return(
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

              
                <Button onClick={this.handleSignUp}>Sign Up</Button>
                    
                </Form>
            </Panel>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ userSignup }, dispatch)
}

export default connect(null, mapDispatchToProps)(Signup);