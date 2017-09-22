import React, { Component } from 'react';


export default class CarOwners extends Component {
    componentDidMount() {
        this.props.carOwner();
        this.props.getManufacture();
    }
    render() {
        return (
            <div className="sign">
                {console.log(this.props)}
                <div>
                    <select name="owner_id" onChange={this.props.getOption}>
                        <option selected disabled>Select Owner</option>
                        {(this.props.allName.length !== -1 ? this.props.allName.map((val, ind) => {
                            return (<option key={ind} id={val.id}>{val.name}</option>)
                        }) : '')}
                    </select>
                </div>

                <div>
                    <select onChange={this.props.getModel}>
                        <option selected disabled>Select manufacturer</option>
                        {(this.props.manufacture.length !== -1 ? this.props.manufacture.map((val, ind) => {
                            return (<option key={ind}>{val.manufacturer}</option>)
                        }) : '')}
                    </select>
                    <select name="car_id"  onChange={this.props.getOption}>
                        <option selected disabled>Select model</option>
                        {(this.props.model.length !== -1 ? this.props.model.map((val, ind) => {
                            return (<option key={ind} id={val.id}>{val.model}</option>)
                        }) : '')}
                    </select>
                </div>
                <button onClick={this.props.addCarOwner}>Add Car Owner</button>
                <table className="carOwners"><tbody>{this.props.table}</tbody></table>
            </div>
        )
    }
}