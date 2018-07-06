import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

export default class SignUpForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            form: {
                email: '',
                confirmEmail: '',
                username: '',
                password: '',
                confirmPassword: ''
            }
        }

        this.onSignUpChange = this.onSignUpChange.bind(this);
        this.onSignUpSubmit = this.onSignUpSubmit.bind(this);
    }

    onSignUpChange(ev) {
        let name = ev.target.name;
        let value = ev.target.value;
        let form = this.state.form;
        form[name] = value;

        this.setState(prevState => {
            let form = prevState.form;
            let errors = prevState.errors;
            return { form, errors }
        })
    }

    onSignUpSubmit(ev) {
        ev.preventDefault();

        let payload = {
            email: this.state.form.email,
            password: this.state.form.password,
            name: this.state.form.username
        }

        fetch('http://localhost:5000/auth/signup', {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            return res.json()
        }).then(response => console.log('Success:', response));
    }

    render() {
        return <form className="form-login" onSubmit={this.onSignUpSubmit}>
            <h3>Sign Up</h3>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email</label>
                <input name="email" type="email" onChange={this.onSignUpChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputEmail2">Confirm Email</label>
                <input name="confirmEmail" type="email" onChange={this.onSignUpChange} className="form-control" id="exampleInputEmail2" aria-describedby="emailHelp" placeholder="Confirm email" />
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputUsername">Username</label>
                <input name="username" pattern="([a-z,A-Z]+)" title="Please fill your username" type="username" onChange={this.onSignUpChange} className="form-control" id="exampleInputUsername" aria-describedby="emailHelp" placeholder="Username" />
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input name="password" pattern="([a-zA-Z0-9]).{8,}" title="Must contain at least 8 or more characters" type="password" onChange={this.onSignUpChange} className="form-control" id="exampleInputPassword1" placeholder="Password" />
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword2">Confirm Password</label>
                <input name="confirmPassword" pattern="([a-zA-Z0-9]).{8,}" title="Password did not match" type="password" onChange={this.onSignUpChange} className="form-control" id="exampleInputPassword2" placeholder="Confirm Password" />
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            <br />
            <br />
            <button type="submit" onClick={this.props.changeSwitchState} className="btn btn-secondary">Go to Login</button>
        </form >
    }
}
