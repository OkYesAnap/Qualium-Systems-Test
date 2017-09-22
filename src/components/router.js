import React, { Component } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom';

class Router extends Component {
    render() {
        const { 
            name, 
            pass, 
            carOwner, 
            table, 
            allUsers, 
            addUser, 
            upDate, 
            manufacture,
            getManufacture,
            getModel,
            model,
            allName,
            getOption,
            addCarOwner,
            getAllModels,
            allModels,
            newManufacturer,
            newModel,
            addManufacturer,
            addModel
        } = this.props;
        var { CarOwners, AllUsers, Cars } = this.props.components;
        return (
            <Switch>
                <Route path="/"  exact />
                <Route path="/carowners" render={ () =>
                    (<CarOwners
                        pass={pass} 
                        carOwner={carOwner}
                        table={table}
                        manufacture={manufacture}
                        getManufacture={getManufacture}
                        getModel={getModel}
                        model={model}
                        allName={allName}
                        allUsers={allUsers}
                        getOption={getOption}
                        addCarOwner={addCarOwner}
                        />)
                } />
                <Route path="/users" render={ () =>
                    (<AllUsers
                        name={name}
                        pass={pass} 
                        allUsers={allUsers}
                        addUser={addUser}
                        upDate={upDate}
                        table={table}/>)
                } />
                <Route path="/cars" render={ () =>
                    (<Cars
                        getManufacture={getManufacture}
                        manufacture={manufacture}
                        getAllModels={getAllModels}
                        allModels={allModels}
                        upDate={upDate}
                        newManufacturer={newManufacturer}
                        newModel={newModel}
                        addManufacturer={addManufacturer}
                        getOption={getOption}
                        addModel={addModel}
                        />)
                        
                } />
            </Switch>
        )
    }
}

export default Router;