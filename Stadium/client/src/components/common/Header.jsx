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
                        <li className="nav-item active">
                            <NavLink exact to="/" className="nav-link">Home</NavLink>
                        </li>
                        <li className="nav-item active">
                            {<NavLink to="/stadium/all?page=1" className="nav-link">Stadiums</NavLink>}
                        </li>
                        <li className="nav-item active">
                            {loggedIn && <NavLink to="/create" className="nav-link">Add Stadium</NavLink>}
                        </li>
                        <li className="nav-item active">
                            {loggedIn && <NavLink to="/stadium/mystadiums" className="nav-link">My Stadiums</NavLink>}
                        </li>
                        <li className="nav-item active">
                            {loggedIn && <NavLink to="/admin" className="nav-link">Admin Panel</NavLink>}
                        </li>
                        <li className="nav-item active">
                            {loggedIn && <a href="" onClick={onLogout} className="nav-link">Logout</a>}
                        </li>
                        <li className="nav-item active">
                            {!loggedIn && <NavLink to="/login" className="nav-link">Login</NavLink>}
                        </li>
                        <li className="nav-item active">
                            {!loggedIn && <NavLink to="/register" className="nav-link">Register</NavLink>}
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}