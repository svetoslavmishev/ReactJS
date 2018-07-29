import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
    render() {
        const { loggedIn, onLogout } = this.props;

        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <NavLink className="navbar-brand" to="/">
                    <img src="logo.jpg" alt="stadium logo" width="140" height="45" />
                </NavLink>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <NavLink exact to="/" className="nav-link">Home</NavLink>
                        {<NavLink to="/stadium/all?page=1" className="nav-link">Stadiums</NavLink>}
                        {loggedIn && <NavLink to="/create" className="nav-link">Add Stadium</NavLink>}
                        {loggedIn && <NavLink to="/stadium/mystadiums" className="nav-link">My Stadiums</NavLink>}
                        {(localStorage.getItem('userEmail') === 'admin@admin.bg') && <NavLink to="/admin" className="nav-link">Administrator</NavLink>}
                        {loggedIn && <a href="" onClick={onLogout} className="nav-link">Logout</a>}
                        {!loggedIn && <NavLink to="/login" className="nav-link">Login</NavLink>}
                        {!loggedIn && <NavLink to="/register" className="nav-link">Register</NavLink>}
                    </ul>
                </div>
            </nav>
        )
    }
}