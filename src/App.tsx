import React, {useEffect} from 'react';
import './App.scss';
import Header from "./common/header/Header";
import loader from "./assets/img/bigcat.gif";

function App() {
    let loaderElementRef: HTMLDivElement | null = null;

    useEffect(() => {
        if (loaderElementRef) {
             loaderElementRef!.style.display = 'none';
        }
    });

   return (
       <div>
           <div ref={ref => (loaderElementRef = ref)} className={"loader"}><img src={loader} alt={"Loading"}/></div>
           <Header/>
       </div>
   );
}

export default App;