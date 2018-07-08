import React, { Component } from 'react';
import Input from '../common/Input';
import { login } from '../../api/remote';
import toastr from 'toastr';

export default class LoginPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        };

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onChangeHandler(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmitHandler(e) {
        e.preventDefault();
        login(this.state.email, this.state.password)
            .then(res => {
                if (res.success) {
                    localStorage.setItem('token', res.token);
                    toastr.success(res.message);
                    this.props.history.push('/');
                } else {
                    toastr.error(res.message);
                }
            });
    }

    render() {
        return (
            <div className="container">
                <h1>Login</h1>

                <form onSubmit={this.onSubmitHandler}>
                    <Input
                        name="email"
                        value={this.state.email}
                        onChange={this.onChangeHandler}
                        label="E-mail"
                    />
                    <Input
                        name="password"
                        type="password"
                        value={this.state.password}
                        onChange={this.onChangeHandler}
                        label="Password"
                    />
                    <input type="submit" className="btn btn-primary" value="Login" />
                </form>
            </div>
        );
    }
}