import React, { Component } from 'react';
import fetcher from '../../utils/authFetcher';

class RegisterForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        }

        this.onRegisterChange = this.onRegisterChange.bind(this)
        this.onRegisterSubmit = this.onRegisterSubmit.bind(this)
    }

    onRegisterChange(ev) {
        this.setState({ [ev.target.name]: ev.target.value });
    }

    onRegisterSubmit(ev) {
        ev.preventDefault();

        fetcher.register(this.state)
            .then(parsedData =>
                console.log(parsedData));
    }

    render() {
        return (
            <form id="registerForm" onSubmit={this.onRegisterSubmit}>
                <h2>Register</h2>
                <label>Username:</label>
                <input name="username" type="text" onChange={this.onRegisterChange} />
                <label>Password:</label>
                <input name="password" type="password" onChange={this.onRegisterChange} />
                <label>Repeat Password:</label>
                <input name="repeatPass" type="password" onChange={this.onRegisterSubmit} />
                <input id="btnRegister" value="Sign Up" type="submit" />
            </form>
        )
    }
}

export default RegisterForm

