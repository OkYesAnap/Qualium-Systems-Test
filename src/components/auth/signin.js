import React, { Component } from 'react'

import './sign.css';


class Signin extends Component {
    render() {
        var {name, password, submit} = this.props; 
        return (
            <div className="sign">
                <form>
                    <label htmlFor="name">Name: </label>
                    <input type="text" id="name" name="name" defaultValue={name} required />
                    <label htmlFor="password">Password: </label>
                    <input type="password" id="password" defaultValue={password} name="password" required />
                    <button id="login" type="button" onClick={submit}>SignIn</button>
                </form>
            </div>
        )
    }
}

export default Signin;