import React, {Component} from "react";
import JobDescription from "../components/JobDescription";
import {CARRIER_DATA} from "../assets/data/CarrierData";
import {CarrierData} from "../model/CarrierDataModel";

export class JobPage extends Component {

    private renderJobDescription() {
        return CARRIER_DATA.map((d: CarrierData, i: number) => {
            return (<JobDescription key={i} data={d}/>)
        });
    }

    render() {
        return (
            <div className="job">
                <div className="job__header">
                    <span className="job__header--title">my recipe to become a front-end developer in a japanese company.</span>
                </div>
                {this.renderJobDescription()}
            </div>
        );
    }
}

export default JobPage;
