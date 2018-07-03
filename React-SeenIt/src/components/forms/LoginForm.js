import React, { Component } from 'react';
import fetcher from '../../utils/authFetcher';

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
                localStorage.setItem('token', res._kmd.authtoken);
                localStorage.setItem('username', res.username);
            });
    }

    render() {
        return (
            < form id="loginForm" onSubmit={this.onInputSubmit} >
                <h2>Sign In</h2>
                <label>Username:</label>
                <input name="username" type="text" onChange={this.onInputChange} />
                <label>Password:</label>
                <input name="password" type="password" onChange={this.onInputChange} />
                <input id="btnLogin" value="Sign In" type="submit" />
            </form >
        )
    }
}

export default LoginForm

