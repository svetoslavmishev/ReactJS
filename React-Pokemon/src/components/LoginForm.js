import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'

class LoginForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            form: {}
        }

        this.onLoginChange = this.onLoginChange.bind(this);
        this.onLoginSubmit = this.onLoginSubmit.bind(this);
    }

    onLoginChange(ev) {
        let name = ev.target.name;
        let value = ev.target.value;
        let form = this.state.form;
        form[name] = value;

        this.setState(prevState => {
            let form = prevState.form;
            return { form }
        })
    }

    onLoginSubmit(ev) {
        ev.preventDefault();

        let payload = {
            email: this.state.form.email,
            password: this.state.form.password
        }

        fetch('http://localhost:5000/auth/login', {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => {
            return res.json()
        }).then(response => this.props.authenticate(response));
    }

    render() {
        return (
            <form className="form-login" onSubmit={this.onLoginSubmit}>
                <h3>Login</h3>
                <div className="form-group">
                    <label htmlFor="exampleSignUpEmail1">Email</label>
                    <input name="email" type="email" onChange={this.onLoginChange} className="form-control" id="exampleSignUpEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                </div>
                <div className="form-group">
                    <label htmlFor="exampleSignUpPassword1">Password</label>
                    <input name="password" type="password" onChange={this.onLoginChange} pattern="([a-zA-Z0-9]).{8,}" title="Must contain at least 8 or more characters" className="form-control" id="exampleSignUpPassword1" placeholder="Password" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                <br />
                <br />
                <button type="submit" onClick={this.props.changeSwitchState} className="btn btn-secondary">Go to SignUp</button>
            </form >
        )
    }
}

export default LoginForm;
