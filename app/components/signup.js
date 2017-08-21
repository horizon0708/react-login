import React from 'react';
import { Form , FormGroup, Well, FormControl } from 'react-bootstrap';

class Login extends React.Component{

    render(){
        return(
            <Well>
                <FormGroup>
                <ControlLabel>Email</ControlLabel>
                <FormControl 
                    type="Email" 
                    />
              </FormGroup>

              <FormGroup>
                <ControlLabel>Password</ControlLabel>
                <FormControl 
                    type="password" 
                    />
              </FormGroup>
            </Well>
        )
    }
}