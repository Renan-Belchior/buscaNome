import React from "react";
import Repo from "./repos";
import App from "./Home";
import {BrowserRouter as Router} from 'react-router-dom'

function Render(){
    return(
       <Router>
           <switch>
                <route exact path='/'>
                    <App/> 
                </route>
                <route path='/repos'>
                    <Repo/>
                </route>
           </switch>
           
       </Router>
    )
}

export default Render;