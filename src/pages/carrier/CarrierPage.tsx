import React, {Component} from "react";
import CarrierDescription from "./components/CarrierDescription";
import {CARRIER_DATA} from "../../assets/data/CarrierData";
import {CarrierData} from "../../model/CarrierDataModel";
import {addFadeAwayOnScrollEffect} from "../../utils/functions";

export class CarrierPage extends Component {
    // componentDidMount() {
    //     const homePageElement = document.getElementById("jobPageId") as HTMLElement;
    //     addFadeAwayOnScrollEffect(homePageElement, 2000);
    // }

    private renderJobDescription() {
        return CARRIER_DATA.map((d: CarrierData, i: number) => {
            return (<CarrierDescription key={i} data={d}/>)
        });
    }

    render() {
        return (
            <div className="job" id='jobPageId'>
                <div className="job__header">
                    <div className="job__header--line">&nbsp;</div>
                    <span className="job__header--title">carrier</span>
                    <div className="job__header--line">&nbsp;</div>
                </div>
                {this.renderJobDescription()}
            </div>
        );
    }
}

export default CarrierPage;
