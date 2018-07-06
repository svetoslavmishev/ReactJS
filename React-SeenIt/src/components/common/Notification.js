import React, { Component } from 'react';
import observer from '../../utils/observer';
import './Notifications.css';

export default class RegisterForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            success: '',
            error: '',
            lodaing: ''
        }

        observer.subscribe(observer.events.notification, this.showNotification)
        this.hideNotification = this.hideNotification.bind(this);
    }

    showNotification = (data) => {
        let type = data.type;
        let message = data.message;
        this.setState({ [type]: type, message: message })
    }

    hideNotification(ev) {
        this.setState({
            success: '',
            error: '',
            lodaing: '',
            message: ''
        })
    }

    render() {
        let notificationId;
        if (this.state.success) {
            notificationId = "infoBox";
        } else if (this.state.error) {
            notificationId = "errorBox";
        } else if (this.state.loading) {
            notificationId = "loadingBox";
        }

        return (this.state.message ?
            <div id={notificationId} className="notification" onClick={this.hideNotification} >
                <span>{this.state.message}
                </span>
            </div> : '')
    }
}