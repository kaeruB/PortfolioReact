import React, {Component} from "react";
import CarrierDescription from "./components/CarrierDescription";
import {CARRIER_DATA} from "./utils/CarrierData";
import {CarrierData} from "./utils/models";

export class CarrierPage extends Component {
    private renderJobDescription() {
        return CARRIER_DATA.map((d: CarrierData, i: number) => {
            return (<CarrierDescription key={i} data={d}/>)
        });
    }

    render() {
        return (
            <div className="job" id='jobPageId'>
                {this.renderJobDescription()}
            </div>
        );
    }
}

export default CarrierPage;
