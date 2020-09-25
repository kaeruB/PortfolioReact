import React, {Component} from "react";
import profile from '../assets/img/profile3.png';
import {addFadeAwayOnScrollEffect} from "../utils/functions";


export class HomePage extends Component {

    componentDidMount() {
        const homePageElement = document.getElementById("homePageId") as HTMLElement;
        addFadeAwayOnScrollEffect(homePageElement, 700);
    }

    render() {
        return (
            <div className="home" id='homePageId'>
                <span className="home__logo">
                    <svg width='40px' height='80px' id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 63 135">
                        <path fill="#aba8bb" d="M41,61c4.34,0,8,5,8,11s-3.66,11-8,11-8-5-8-11,3.66-11,8-11m0-3c-6.08,0-11,6.27-11,14s4.92,14,11,14,11-6.27,11-14S47.08,58,41,58Z"/>
                        <path fill="none" stroke="#aba8bb" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3px" d="M53.5,58.5a26.63,26.63,0,0,0-3,12c0,7.07,1,11,3,13a5.29,5.29,0,0,0,3.8,1.25,4.89,4.89,0,0,0,3.4-1.45l.8-.8"/>
                    </svg>
                    <svg className='home__logo--middle' width='24px' height='80px' id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 135">
                        <path fill="none" stroke="#aba8bb" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3px" d="M16.87,86.89A23.31,23.31,0,0,1,5.5,77.8C1.33,71.13,1.32,62.61,3.22,61.87s6.07,4.55,9.1,6.07c1.52-2.27,2.18-3.38,5.31-4.55a8.73,8.73,0,0,1,6.82,0c3-3.79,4.43-8.48,6.07-8.34.94.09,3,4.21,3.56,5.36,1.65,3.31,3.08,7.07,2.7,10.83-.5,5.09-3.64,9.71-7,13.38.51.56,6.81,7.67,4.55,16.68-1.89,7.55-9,13.2-17.44,13.65"/>
                    </svg>
                    <svg width='70px' height='80px' id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 118 135">
                        <path fill="#aba8bb" d="M12,61c4.34,0,8,5,8,11s-3.66,11-8,11S4,78,4,72s3.66-11,8-11m0-3C5.92,58,1,64.27,1,72S5.92,86,12,86s11-6.27,11-14S18.08,58,12,58Z"/>
                        <path fill="none" stroke="#aba8bb" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3px" d="M24.5,58.5a26.63,26.63,0,0,0-3,12c0,7.07,1,11,3,13a5.29,5.29,0,0,0,3.8,1.25,4.89,4.89,0,0,0,3.4-1.45l.8-.8"/>
                        <path fill="#aba8bb" d="M68,62c4.34,0,8,5,8,11s-3.66,11-8,11-8-5-8-11,3.66-11,8-11m0-3c-6.08,0-11,6.27-11,14s4.92,14,11,14,11-6.27,11-14S74.08,59,68,59Z"/>
                        <path fill="none" stroke="#aba8bb" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3px" d="M80.5,59.5a26.63,26.63,0,0,0-3,12c0,7.07,1,11,3,13a5.29,5.29,0,0,0,3.8,1.25,4.89,4.89,0,0,0,3.4-1.45l.8-.8"/>
                        <path fill="none" stroke="#aba8bb" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3px" d="M40.5,33.5v37a20.94,20.94,0,0,0,0,3c.19,2.73.5,7.16,3,9s7.06,1,11-2"/>
                        <path fill="none" stroke="#aba8bb" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3px" d="M28.46,49.06l26.08-2.12"/>
                    </svg>
                </span>

                <div className="home__welcome">
                    <span className="home__welcome--upper">Hi everyone</span>
                    <span className="home__welcome--bottom">
                        I'm a polish front-end developer,
                    </span>
                    <span className="home__welcome--bottom">
                        working at a japanese company.
                    </span>
                </div>
                <div className="home__photo">
                    <img src={profile} alt="Me"/>
                </div>
            </div>
        );
    }
}

export default HomePage;
