import React, { Component } from 'react';
import './App.css';

import Header from './header';
import CarOwners from './carowners';
import Users from './users'
import Api from './api';
import Cars from './cars';
import Router from './router';


const CRUD = new Api;


class App extends Component {
  constructor() {
    super();
    this.state = {
      components: {
        Cars: Cars,
        CarOwners: CarOwners,
        AllUsers: Users,
        Header: Header
      },
      table: 'EMPTY',
      name: '',
      allName: [],
      pass: '',
      user: [],
      manufacture: [],
      model: [],
      owner_id: 0,
      car_id: 0,
      manufacturer_id: 0,
      allModels:[],
      newManufacturer: '',
      newModel: ''

    }
    this.carOwner = this.carOwner.bind(this);
    this.allUsers = this.allUsers.bind(this);
    this.upDate = this.upDate.bind(this);
    this.addUser = this.addUser.bind(this);
    this.getManufacture = this.getManufacture.bind(this);
    this.getModel = this.getModel.bind(this);
    this.getOption = this.getOption.bind(this);
    this.addCarOwner = this.addCarOwner.bind(this);
    this.getAllModels = this.getAllModels.bind(this);
    this.addManufacturer = this.addManufacturer.bind(this);
    this.addModel=this.addModel.bind(this);
  }

  tableFiller(data) {
    let coumn = (val) => {
      let tds = [];
      for (let key in val) {
        tds.push(<td>{val[key]}</td>);
      }
      return tds;
    }
    let newTable = data.map((val, ind) => {
      return (<tr key={ind}>
        {coumn(val)}
      </tr>);
    })

    this.setState({
      table: newTable
    });
  }
  carOwner() {
    CRUD.reqGet('carowners').then(data => { this.tableFiller(data) });
    CRUD.reqGet('users').then(data => {
      this.setState({
        allName: data.map(val => {
          return { id: val.id, name: val.name }
        })
      })
    });
  }
  allUsers() {
    CRUD.reqGet('users').then(data => this.tableFiller(data));
  }
  addUser() {
    CRUD.reqPOST('adddata', [{ table_name: 'users', name: this.state.name, pass: this.state.pass }]);
    CRUD.reqGet('users').then(data => this.tableFiller(data));
  }
  addCarOwner() {
    if (this.state.owner_id && this.state.car_id) {
      CRUD.reqPOST('adddata', [{ table_name: 'owner_to_car', owner_id: this.state.owner_id, car_id: this.state.car_id }]);
      CRUD.reqGet('carowners').then(data => this.tableFiller(data));
    }
  }
  getManufacture() {
    CRUD.reqGet('manufacture').then(data => {
      this.setState({ manufacture: data })
    }).catch(e => console.log(e));
  }
  getModel(e) {
    CRUD.reqGetOption('model', { manufacturer: e.target.value }).then(data => {
      this.setState({ model: data })
    }).catch(e => console.log(e));
  }
  getAllModels() {
    CRUD.reqGet('allmodels').then(data => {
      this.setState({ allModels: data })
    }).catch(e => console.log(e));
  }
  getOption(e) {
    console.log(e.target.name, e.target.value,"<-----------");
    this.setState({ [e.target.name]: e.target[e.target.selectedIndex].id });
  }
  upDate(e) {
    this.setState({ [e.target.name]: e.target.value });
  }
  addManufacturer(){ 
    CRUD.reqPOST('adddata', [{ table_name: 'car_manufacturer', manufacturer: this.state.newManufacturer }]);
    this.getManufacture();
  }
  addModel(){
    CRUD.reqPOST('adddata', [{ table_name: 'car_model', manufacturer_id: this.state.manufacturer_id, model:this.state.newModel }]);    
    this.getAllModels();
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <Header />
          <h2>Welcome to Car Owners</h2>
          <Router components={this.state.components}

            table={this.state.table}
            name={this.state.name}
            pass={this.state.pass}
            manufacture={this.state.manufacture}
            model={this.state.model}
            allName={this.state.allName}
            allModels={this.state.allModels}
            newManufacturer={this.state.newManufacturer}
            newModel={this.state.newModel}
            
            carOwner={this.carOwner}
            allUsers={this.allUsers}
            addUser={this.addUser}
            upDate={this.upDate}
            getManufacture={this.getManufacture}
            getModel={this.getModel}
            getOption={this.getOption}
            addCarOwner={this.addCarOwner}
            getAllModels={this.getAllModels}
            addManufacturer={this.addManufacturer}
            addModel={this.addModel}
          />
        </div>
      </div>
    );
  }
}

export default App;
