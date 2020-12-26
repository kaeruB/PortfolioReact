import React from 'react';
import './App.scss';
import GalleryPage from "./pages/gallery/GalleryPage";
import HomePage from "./pages/HomePage";
import JobPage from "./pages/JobPage";
import Footer from "./pages/Footer";

function App() {
    return (
        <div className="App">
            <HomePage/>
            <JobPage/>
            <GalleryPage/>
            {/*<Footer/>*/}
        </div>
    );
}

export default App;
