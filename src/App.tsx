import React from 'react';
import './App.scss';
import GalleryPage from "./pages/gallery/GalleryPage";
import HomePage from "./pages/HomePage";
import CarrierPage from "./pages/carrier/CarrierPage";
import Footer from "./pages/Footer";

function App() {
    return (
        <div className="App">
            <HomePage/>
            <CarrierPage/>
            <GalleryPage/>
            {/*<Footer/>*/}
        </div>
    );
}

export default App;
