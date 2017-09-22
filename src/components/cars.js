import React, { Component } from 'react';

class Cars extends Component {
    componentDidMount() {
        this.props.getManufacture();
        this.props.getAllModels();
    }
    render() {
        return (
            <div>
                <div>
                  <input type="text" name="newManufacturer" onChange={this.props.upDate}
                        value={this.props.newManufacturer} />
                    <button name="addManufacturerBtn" onClick={this.props.addManufacturer}>ADD NEW MANUFACTURER</button>
                </div>
                <select name="manufacturer_id" onChange={this.props.getOption}>
                        <option selected disabled>Select manufacturer</option>
                        {(this.props.manufacture.length !== -1 ? this.props.manufacture.map((val, ind) => {
                            return (<option key={ind} id={val.id}>{val.manufacturer}</option>)
                        }) : '')}
                    </select>
                <input type="text" name="newModel" onChange={this.props.upDate}
                    value={this.props.newModel} />
                <button name="addModel" onClick={this.props.addModel}>ADD NEW MODEL</button>
                {(this.props.manufacture.length != -1 ? this.props.manufacture.map((valUl, indUl) => {
                    return (<ul className="ulCars" key={indUl} id={valUl.id}>{valUl.manufacturer}
                        {this.props.allModels.map((val, inf) => {
                            if (valUl.id === val.manufacturer_id) return (<li>{val.model}</li>);
                        })}
                    </ul>)
                }) : '')}

            </div>
        );
    }
}

export default Cars;