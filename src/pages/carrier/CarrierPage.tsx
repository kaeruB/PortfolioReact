import React, {Component} from "react";
import CarrierDescription from "./components/CarrierDescription";
import {CARRIER_DATA} from "./utils/CarrierData";
import {CarrierData} from "./utils/models";

export class CarrierPage extends Component {
    private _renderCarrierDescription() {
        return CARRIER_DATA.map((d: CarrierData, i: number) => {
            return (<CarrierDescription key={i} data={d}/>)
        });
    }

    render() {
        return (
            <div className="carrier">
                {this._renderCarrierDescription()}
            </div>
        );
    }
}

export default CarrierPage;
