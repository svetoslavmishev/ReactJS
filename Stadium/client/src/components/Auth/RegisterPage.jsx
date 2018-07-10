import React, { Component } from 'react';
import Input from '../common/Input';
import { register } from '../../api/remote';
import toastr from 'toastr';

export default class RegisterPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            password: '',
            repeat: ''
        };

        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onChangeHandler(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    onSubmitHandler(e) {
        e.preventDefault();
        register(this.state.name, this.state.email, this.state.password)
            .then(res => {
                if (res.success) {
                    toastr.success(res.message)
                    this.props.history.push('/login');
                }
            })
    }

    render() {
        return (
            <div className="container">
                <h1>Register</h1>
                <form onSubmit={this.onSubmitHandler} className="form-group">
                    <Input
                        className="form-control"
                        name="name"
                        value={this.state.name}
                        onChange={this.onChangeHandler}
                        label="Name"
                    />
                    <Input
                        className="form-control"
                        name="email"
                        value={this.state.email}
                        onChange={this.onChangeHandler}
                        label="E-mail"
                    />
                    <Input
                        className="form-control"
                        name="password"
                        type="password"
                        value={this.state.password}
                        onChange={this.onChangeHandler}
                        label="Password"
                    />
                    <Input
                        className="form-control"
                        name="repeat"
                        type="password"
                        value={this.state.repeat}
                        onChange={this.onChangeHandler}
                        label="Repeat password"
                    /><br/>
                    <input type="submit" className="btn btn-primary" value="Register" />
                </form>
            </div>
        );
    }
}