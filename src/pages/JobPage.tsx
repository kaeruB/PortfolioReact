import React, {Component} from "react";
import andea from '../assets/img/andea.png'
import akamai from '../assets/img/akamai.png'
import nangok from '../assets/img/nangok.png'

export class JobPage extends Component {
    render() {
        return (
            <div className="job">
                <div className="width-keeper job__cards-container">
                    <div className="job__title">
                        <h1>Work</h1>
                        <h1>experience</h1>
                    </div>
                    <div className="card card-1">
                        <div className="card__side card__side--front">
                            <img src={andea} alt="Andea"/>
                        </div>
                        <div className="card__side card__side--back card__side--back-1">
                            <span className="card__time">4/2018 - 2/2019</span>
                            <img src={andea} alt="Andea"/>
                            <span className="card__position">MES developer</span>
                        </div>
                    </div>
                    <div className="card card-2">
                        <div className="card__side card__side--front">
                            <img src={akamai} alt="Akamai"/>
                        </div>
                        <div className="card__side card__side--back card__side--back-2">
                            <span className="card__time">7/2019 - 12/2019</span>
                            <img src={akamai} alt="Akamai"/>
                            <span className="card__position">Front-end developer intern</span>
                        </div>
                    </div>
                    <div className="card card-3">
                        <div className="card__side card__side--front">
                            <img src={nangok} alt="Nangok Soft"/>
                        </div>
                        <div className="card__side card__side--back card__side--back-3">
                            <span className="card__time">2/2019 - present</span>
                            <img src={nangok} alt="Nangok Soft"/>
                            <span className="card__position">Front-end developer</span>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default JobPage;
