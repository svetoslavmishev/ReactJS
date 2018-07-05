import React, { Component } from 'react';
import fetcher from '../../utils/authFetcher';
import observer from '../../utils/observer';

class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        }

        this.onInputChange = this.onInputChange.bind(this)
        this.onInputSubmit = this.onInputSubmit.bind(this)
    }

    onInputChange(ev) {
        this.setState({ [ev.target.name]: ev.target.value });
    }

    onInputSubmit(ev) {
        ev.preventDefault();

        fetcher.login(this.state)
            .then(res => {
                observer.trigger(observer.events.loginUser, res.username);
                observer.trigger(observer.events.notification, { type: "success", message: 'Login successfully' });
                sessionStorage.setItem('token', res._kmd.authtoken);
                this.props.history.push('/catalog');
            }).catch(err => {
                this.setState({ username: '', password: '' });
                observer.trigger(observer.events.notification, { type: "error", message: err.error });
                return;
            })
    }

    render() {
        return (
            < form id="loginForm" onSubmit={this.onInputSubmit} >
                <h2>Sign In</h2>
                <label>Username:</label>
                <input name="username" type="text" onChange={this.onInputChange} value={this.state.username} />
                <label>Password:</label>
                <input name="password" type="password" onChange={this.onInputChange} value={this.state.password} />
                <input id="btnLogin" value="Sign In" type="submit" />
            </form >
        )
    }
}

export default LoginForm

