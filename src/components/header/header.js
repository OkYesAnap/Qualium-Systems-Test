import React, { Component } from 'react'
import './header.css';
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <header className="header">
                <ul>
                    <li><Link to="/">LOGO</Link></li>
                    <li><Link to="/signin">Singin</Link></li>
                    <li><Link to="/signup">Singup</Link></li>
                    <li><Link to="/signout">Singout</Link></li>
                </ul>
            </header>
        )
    }
}

export default Header;