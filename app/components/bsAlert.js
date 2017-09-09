import React from 'react';
import { Collapse, Alert } from 'react-bootstrap';

class BsAlert extends React.Component {
    constructor() {
        super();
        this.state = {
            open: false
        }
    }

    componentWillReceiveProps(nextProps) {
        this.setState({
            open: nextProps.currentAlert ? true : false,
            type: nextProps.currentAlert ? nextProps.currentAlert.type : this.state.type ? this.state.type : 'success',
            title: nextProps.currentAlert ? nextProps.currentAlert.title : this.state.title,
            text: nextProps.currentAlert ? nextProps.currentAlert.text : this.state.text
        });
    }

    handleAlertDismiss = () => {
        this.props.deleteFlashMessage();
    }

    renderFlash() {
        if (this.props.flashMessage) {
            return <Alert
                bsStyle={this.props.flashMessage.style}
                onDismiss={this.handleAlertDismiss}
                className={this.props.opts? this.props.opts.className: null}
                style={this.props.opts? this.props.opts.style: null}>
                <strong>{this.props.flashMessage.title}</strong> {this.props.flashMessage.text}
            </Alert>
        }
        return <Alert bsStyle={this.state.style}
            onDismiss={this.handleAlertDismiss}
            className={this.props.opts? this.props.opts.className: null}
            style={this.props.opts? this.props.opts.style: null}>
            <strong>{this.state.title}</strong> {this.state.text}
        </Alert>;
    }


    render() {
        return <Collapse in={this.state.open}>
            <div style={this.props.opts ? this.props.opts.location : {
                position: 'absolute',
                left: 0,
                right: 0
            }}>
                {this.renderFlash()}
            </div>
        </Collapse>
    }
}


const location = {
    position: 'absolute',
    left: 0,
    right: 0
}

export default BsAlert;