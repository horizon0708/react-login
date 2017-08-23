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
            password: '',
            secret: ''
        }
    }

    handleSignUp =() =>{
        const user = {
            email: this.state.email,
            password: this.state.password,
            secret: this.state.secret
        }
        this.props.userSignup(user);
    }

    handleFieldChange = (e, fieldName) => {
        let field = {};
        field[fieldName] = e.target.value
        this.setState(field);
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
                    onChange={(e)=>this.handleFieldChange(e,'email')}
                    ></FormControl>
              </FormGroup>

              <FormGroup>
                <ControlLabel>Password</ControlLabel>
                <FormControl 
                    type="password"
                    value={this.state.password}
                    onChange={(e)=>this.handleFieldChange(e,'password')}
                    ></FormControl>
              </FormGroup>
            

            <FormGroup>
                <ControlLabel>What is your secret? Mine's that Susan likes turtles.</ControlLabel>
                <FormControl 
                    type="text"
                    value={this.state.secret}
                    onChange={(e)=>this.handleFieldChange(e,'secret')}
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