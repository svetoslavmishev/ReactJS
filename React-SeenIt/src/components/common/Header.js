import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <header>
            <span className="logo">☃</span><span className="header">SeenIt</span>
            <div id="profile"><span>{localStorage.getItem('username')}</span>|<a href="#'/logout">logout</a></div>
        </header>
    )
}

export default Header;