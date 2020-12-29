import React, {Component} from "react";
import profile from '../assets/img/home/profile5.jpg';
import profileMobile from '../assets/img/home/profile-mobile.jpg';
import linked from "../assets/img/home/linked.png";
import wantedly from "../assets/img/home/wantedly.png";
import git from "../assets/img/home/git.png";


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
                        <a target="_blank" rel="noopener noreferrer" href="https://github.com/kaeruB/" className="home__buttons--link">
                            <img src={git} alt="GitHub"/>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.wantedly.com/users/132320671" className="home__buttons--link">
                            <img src={wantedly} alt="Wantedly"/>
                        </a>
                    </div>
                </div>
                <div className="home__photo">
                     <img
                         srcSet={`${profileMobile} 600w, ${profile} 2026w`}
                         sizes={"(max-width: 600px) 600px, 2026px"}
                         alt={"Me"}
                     />
                </div>
            </div>
        );
    }
}

export default HomePage;
