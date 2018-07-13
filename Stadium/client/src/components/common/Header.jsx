import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export default class Header extends Component {
    render() {
        const { loggedIn, onLogout } = this.props;

        return (
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <NavLink className="navbar-brand" to="/">
                    <img src={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWYa84Qf0ckN-UME4-P6M_-tBmiTlyr_hXMyP9cCnpghIdw3nc'} alt="stadium logo" width="80" height="50" />
                </NavLink>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <NavLink exact to="/" className="nav-link">Home</NavLink>
                        {<NavLink to="/stadium/all?page=1" className="nav-link">Stadiums</NavLink>}
                        {loggedIn && <NavLink to="/create" className="nav-link">Add Stadium</NavLink>}
                        {loggedIn && <NavLink to="/stadium/mystadiums" className="nav-link">My Stadiums</NavLink>}
                        {loggedIn && <NavLink to="/admin" className="nav-link">Administrator</NavLink>}
                        {loggedIn && <a href="" onClick={onLogout} className="nav-link">Logout</a>}
                        {!loggedIn && <NavLink to="/login" className="nav-link">Login</NavLink>}
                        {!loggedIn && <NavLink to="/register" className="nav-link">Register</NavLink>}
                    </ul>
                </div>
            </nav>
        )
    }
}