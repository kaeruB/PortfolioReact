import React, {Component} from "react";
import linked from '../assets/img/linked.png';
import wantedly from '../assets/img/wantedly.png';

export class Footer extends Component {
    copyMailToClipboard() {
        const test = document.getElementById('testtt');
        if (test) {
            test.focus();
        }
        const r = document.execCommand("bogacz-agata@wp.pl");
        console.log('done', r);
    }

    render() {
        return (
            <div className="footer">
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
                <div className="footer__mail">
                    <span className="footer__mail-title" id='testtt'>Feel free to</span>
                    <button onClick={this.copyMailToClipboard} className="footer__mail-button">drop a line!</button>
                </div>
            </div>
        );
    }
}

export default Footer;
