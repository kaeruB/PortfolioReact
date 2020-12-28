import React, {Component} from "react";
import Logo from "./components/Logo";
import {HashRouter, Link, Route} from "react-router-dom";
import CarrierPage from "../carrier/CarrierPage";
import GalleryPage from "../gallery/GalleryPage";
import HomePage from "../HomePage";

export class Header extends Component {
    render() {
        return (
            <HashRouter>
                <div className={"header-container"}>
                    <div className={"header"}>
                        <div className={"header__link"}>
                            <Link to="/"><Logo/></Link>
                        </div>
                        <div className={"header__right-container"}>
                            <Link className={"header__link"} to="/about">About me</Link>
                            <Link className={"header__link"} to="/gallery">Gallery</Link>
                        </div>
                    </div>
                </div>

                <div>
                    <Route exact path="/" component={HomePage}/>
                    <Route path="/about" component={CarrierPage}/>
                    <Route path="/gallery" component={GalleryPage}/>
                </div>
            </HashRouter>
        );
    }
}

export default Header;