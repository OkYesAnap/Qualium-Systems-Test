import React, { Component } from 'react'


export default class Users extends Component {
    componentDidMount() {
        this.props.allUsers();
    }
    render() {
        return (
            <div className="sign">
                <p>NAME:{this.props.name}  PASS:{this.props.pass}</p>
                <label>
                Add Name:
                  <input type="text" name="name" onChange={this.props.upDate}/>
                Add Pass:
                  <input type="password" name="pass" onChange={this.props.upDate} />
                  <button name="addUserBtn" onClick={this.props.addUser}>ADD USER</button>
                </label>
                <table className="allUsers"><tbody>{this.props.table}</tbody></table>
            </div>
        )
    }
}