import React from 'react';
import FlashMessage from './flashMessage';
import { connect } from 'react-redux';

class Profile extends React.Component{

    render(){
        return(
            
            
            <div style={{paddingTop: '100px'}}>
                Hi. {console.log(this.props.userAcc.user.email)}! Your secret is '{this.props.userAcc.user.secret}'! My super secret is that I am your biggest fan! Shhh!!
            </div>
        )
    }
}
function mapStateToProps(state) {
    return {
        userAcc: state.userAcc
    }
}
export default connect(mapStateToProps)(Profile);