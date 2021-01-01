import React, {useEffect} from 'react';
import './App.scss';
import Header from "./common/header/Header";
import loader from "./assets/img/bigcat.gif";
import {hideLoader} from "./common/functions";

function App() {
    let loaderElementRef: HTMLElement | null = null;

    useEffect(() => {
        hideLoader(loaderElementRef);
    });

   return (
       <div>
           <div ref={ref => (loaderElementRef = ref)} className={"loader"} id={"loaderId"}><img src={loader} alt={"Loading"}/></div>
           <Header/>
       </div>
   );
}

export default App;