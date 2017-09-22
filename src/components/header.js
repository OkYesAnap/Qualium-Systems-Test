import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <header>
            <ul>
                <li><Link to="/users">Users</Link></li>
                <li><Link to="/carowners">CAR OWNERS</Link></li>
                <li><Link to="/cars">ADD CARS</Link></li>
            </ul>
            </header>
        )
    }
}

export default Header;