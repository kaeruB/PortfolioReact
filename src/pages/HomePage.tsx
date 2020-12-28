import React, {Component} from "react";
import profile from '../assets/img/profile3.png';
import linked from "../assets/img/linked.png";
import wantedly from "../assets/img/wantedly.png";


export class HomePage extends Component {

    render() {
        return (
            <div className="home">
                <div className="home__welcome">
                    <span className="home__welcome--upper">Hi everyone</span>
                    <span className="home__welcome--bottom">
                        I'm a polish front-end developer,
                    </span>
                    <span className="home__welcome--bottom">
                        working at a japanese company.
                    </span>

                    <div className="home__buttons">
                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/agata-izabela-bogacz/" className="home__buttons--link">
                            <img src={linked} alt="LinkedIn"/>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.wantedly.com/users/132320671" className="home__buttons--link">
                            <img src={wantedly} alt="Wantedly"/>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/agata-izabela-bogacz/" className="home__buttons--link">
                            <img src={linked} alt="LinkedIn"/>
                        </a>
                    </div>
                </div>
                <div className="home__photo">
                    <img src={profile} alt="Me"/>
                </div>
            </div>
        );
    }
}

export default HomePage;
