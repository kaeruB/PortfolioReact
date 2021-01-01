import React, {useEffect} from "react";
import Logo from "./components/Logo";
import {HashRouter, Link, Route} from "react-router-dom";
import CarrierPage from "../../pages/carrier/CarrierPage";
import GalleryPage from "../../pages/gallery/GalleryPage";
import HomePage from "../../pages/home/HomePage";
import {hideLoader} from "../functions";

function Header() {
    let loaderElementRef: HTMLElement | null;

    useEffect(() => {
        hideLoader(loaderElementRef);
    });

    let _showLoader = () => {
        loaderElementRef = document.getElementById('loaderId');
        if (loaderElementRef) {
            loaderElementRef.style.display = 'flex';
            hideLoader(loaderElementRef);
        }
    }

    return (
        <HashRouter>
            <div className={"header-container"}>
                <div className={"header"}>
                    <div className={"header__link"} onClick={() => _showLoader()}>
                        <Link to="/"><Logo/></Link>
                    </div>
                    <div className={"header__right-container"} onClick={() => _showLoader()}>
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

export default Header;