import React, { Component } from 'react';
import observer from '../../utils/observer';
import { Link } from 'react-router-dom'
import './Header.css'

export default class Header extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: ''
        }

        observer.subscribe(observer.events.loginUser, this.userLoggedIn.bind(this))
    }

    userLoggedIn = (username) => this.setState({ username });

    render() {
        const loggedInUser = <div id="profile">
            <span>Welcome, {this.state.username}!</span>|
        <Link to="/logout">logout</Link>
        </div >;

        return (
            <header>
                <span className="logo">☃</span> <span className="header">SeenIt</span>
                {this.state.username ? loggedInUser : null}
            </header >
        )
    }
}
