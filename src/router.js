import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom';

class Router extends Component {
    constructor() {
        super();
    }
    render() {
        const { IndexPage, Signin, Signup, NotFoud } = this.props.components;
        var { name, password, submit } = this.props;
        return (
            <Switch>
                <Route path="/" component={IndexPage} exact />
                <Route path="/signin" render={() => {
                    return <Signin
                        name={name}
                        password={password}
                        submit={submit} />
                }} />

                <Route path="/signup" render={() => {
                    return <Signup
                        name={name}
                        password={password}
                    />
                }} />
                {/*<Route path="/signout" component={SignOut} />*/}
                <Route component={NotFoud} />
            </Switch>
        )
    }
}

export default Router;