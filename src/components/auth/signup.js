import React, { Component } from 'react';


class Signup extends Component {

    render() {
        var { email, name, password } = this.props;
        return (
            <div className="sign">
                <form>
                    <label>Name: </label>
                    <input type="text" id="name" name="name" value={name} required />
                    <label>Password: </label>
                    <input type="password" id="password" name="password" value={password} required />
                    <label>Confirm Password: </label>
                    <input type="password" id="password1" name="password1" value={email}required />
                    <button id="login" type="button" onClick={this.signup}>SignIn</button>
                </form>
            </div>
        )
    }
}

export default Signup;

// signup() {
//     fetch('http://api.jyotish.gift/api/v1/auth/login', {
//         method: "POST", headers: { 'Content-type': 'application/json' },
//         body: JSON.stringify({
//             user: "Andrey",
//             password: "parol"
//         })
//     }).then(req => req.json())
//     .then(data => {
//         localStorage.token = data.message.token;
//         console.log(data)})
// }