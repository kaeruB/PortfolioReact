import React, {Component} from "react";
// @ts-ignore
import profile from '../assets/img/profile.JPG';


export class HomePage extends Component {
    render() {
        return (
            <div className="home">
                <div className="width-keeper">
                    <div className="home__languages">
                        <button className="home__polish">
                            <div className="home__polish--upper">&nbsp;</div>
                            <div className="home__polish--lower">&nbsp;</div>
                        </button>
                        <button className="home__japanese">
                            <div className="home__japanese--circle">&nbsp;</div>
                        </button>
                    </div>
                    <div className="home__photo">
                        <img src={profile} alt="Me"/>
                        <h1 className="home__photo--name">Agata Izabela Bogacz</h1>
                    </div>

                    <h3 className="home__sub-title">Front-end engineer that you are looking for</h3>
                </div>
            </div>
        );
    }
}

export default HomePage;
