import React, {Component} from "react";
import linked from '../assets/img/linked.png';
import wantedly from '../assets/img/wantedly.png';

export class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="width-keeper">
                    <div className="footer__buttons">
                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/agata-izabela-bogacz/" className="footer__buttons--link">
                            <img src={linked} alt="LinkedIn"/>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.wantedly.com/users/132320671" className="footer__buttons--link">
                            <img src={wantedly} alt="Wantedly"/>
                        </a>
                        <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/agata-izabela-bogacz/" className="footer__buttons--link">
                            <img src={linked} alt="LinkedIn"/>
                        </a>
                    </div>

                </div>
            </div>
        );
    }
}

export default Footer;
