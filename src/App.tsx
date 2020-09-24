import React from 'react';
import './App.scss';
import WorksPage from "./pages/WorksPage";
import HomePage from "./pages/HomePage";
import JobPage from "./pages/JobPage";
import Footer from "./pages/Footer";

function App() {
  return (
      <div className="App">
        <HomePage/>
        <JobPage/>
        <WorksPage/>
        <Footer/>
      </div>
  );
}

export default App;
