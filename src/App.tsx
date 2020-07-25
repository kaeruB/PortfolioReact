import React from 'react';
import './App.scss';
import WorksPage from "./pages/WorksPage";
import HomePage from "./pages/HomePage";
import EducationPage from "./pages/EducationPage";
import JobPage from "./pages/JobPage";
import Footer from "./pages/Footer";

function App() {
  return (
      <div className="App">
        <HomePage/>
        <EducationPage/>
        <JobPage/>
        <WorksPage/>
        <Footer/>
      </div>
  );
}

export default App;
