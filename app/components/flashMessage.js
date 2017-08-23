import React from 'react';
import { Collapse,Alert, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { deleteFlashMessage } from '../actions/userAccActions';
import { bindActionCreators } from 'redux';

class FlashMessage extends React.Component {
    constructor(){
        super();
        this.state = {
            open: false
        }
    }
    
    componentWillReceiveProps(nextProps) {
        this.setState({open: nextProps.flashMessage ? true : false});
        this.setState({ style: nextProps.flashMessage ? nextProps.flashMessage.style : this.state.style,
                        title: nextProps.flashMessage ? nextProps.flashMessage.title : this.state.title,
                        text: nextProps.flashMessage ? nextProps.flashMessage.text : this.state.text});
    }
    
    handleAlertDismiss = () => {
        this.props.deleteFlashMessage();
    }
    renderFlash(){
        if(this.props.flashMessage){
            return  <Alert bsStyle={this.props.flashMessage.style}
                onDismiss={this.handleAlertDismiss}>
                <strong>{this.props.flashMessage.title}</strong> {this.props.flashMessage.text}
            </Alert>     
        }
        return <Alert bsStyle={this.state.style}
                onDismiss={this.handleAlertDismiss}>
                <strong>{this.state.title}</strong> {this.state.text}
            </Alert> ;
    }


    render() {
        

        return <Collapse in={this.state.open}>
            <div style={flashStyle}>
                {this.renderFlash()}
            </div>
            </Collapse> 
    }
}

function mapStateToProps(state, ownProps) {
    return {
        flashMessage: state.userAcc.flashMessage
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({ deleteFlashMessage }, dispatch)
}
const flashStyle = {
            position: 'absolute',
            left: 0,
            right: 0
        }
export default connect(mapStateToProps, mapDispatchToProps)(FlashMessage);